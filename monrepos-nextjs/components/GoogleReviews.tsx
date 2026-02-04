'use client';

import { useState, useEffect } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar, FaGoogle, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Extend Window interface to include google
declare global {
  interface Window {
    google?: {
      maps?: {
        places?: {
          Place: new (options: { id: string }) => {
            fetchFields: (options: { fields: string[] }) => Promise<{ place: unknown }>;
          };
        };
      };
    };
  }
}

interface Review {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  profile_photo_url?: string;
  relative_time_description: string;
}

interface PlaceDetails {
  rating: number;
  user_ratings_total: number;
  reviews: Review[];
}

export default function GoogleReviews() {
  const [placeDetails, setPlaceDetails] = useState<PlaceDetails | null>(null);
  const [currentReview, setCurrentReview] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Mon Repos Google Place ID
  const placeId = 'ChIJnwXNFE06VEcRET9fyHuE7FM';

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;

    if (!apiKey) {
      // Use setTimeout to avoid synchronous setState in effect
      setTimeout(() => {
        setError('API key not configured');
        setLoading(false);
      }, 0);
      return;
    }

    const fetchReviews = async () => {
      try {
        if (!window.google?.maps?.places?.Place) {
          setTimeout(() => {
            setError('Google Maps not loaded');
            setLoading(false);
          }, 0);
          return;
        }

        // Use the new Places API (google.maps.places.Place)
        const place = new window.google.maps.places.Place({
          id: placeId,
        });

        // Fetch place details with reviews
        const { place: placeResult } = await place.fetchFields({
          fields: ['displayName', 'rating', 'userRatingCount', 'reviews'],
        });

        const result = placeResult as {
          rating?: number;
          userRatingCount?: number;
          reviews?: Review[];
        } | null;

        if (result) {
          setPlaceDetails({
            rating: result.rating || 0,
            user_ratings_total: result.userRatingCount || 0,
            reviews: result.reviews || []
          });
          setLoading(false);
        } else {
          setError('Could not load reviews');
          setLoading(false);
        }
      } catch (err) {
        console.error('Error fetching reviews:', err);
        setError('Could not load reviews');
        setLoading(false);
      }
    };

    const loadScript = () => {
      // Check if script already loaded
      if (window.google?.maps?.places?.Place) {
        fetchReviews();
        return;
      }

      // Check if script is already being loaded
      const existingScript = document.querySelector('script[src*="maps.googleapis.com"]');
      if (existingScript) {
        existingScript.addEventListener('load', () => fetchReviews());
        return;
      }

      // Load Google Maps JavaScript API with Places library (new version)
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&loading=async&language=sr`;
      script.async = true;
      script.defer = true;
      script.onload = () => fetchReviews();
      script.onerror = () => {
        setError('Failed to load Google Maps');
        setLoading(false);
      };
      document.head.appendChild(script);
    };

    loadScript();
  }, [placeId]);

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    }
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-400" />);
    }
    return stars;
  };

  const nextReview = () => {
    if (placeDetails?.reviews) {
      setCurrentReview((prev) => (prev + 1) % placeDetails.reviews.length);
    }
  };

  const prevReview = () => {
    if (placeDetails?.reviews) {
      setCurrentReview((prev) => (prev - 1 + placeDetails.reviews.length) % placeDetails.reviews.length);
    }
  };

  if (loading) {
    return (
      <div className="w-full bg-gradient-to-br from-green-50 to-white py-12 px-4">
        <div className="max-w-[1240px] mx-auto text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-48 mx-auto mb-8"></div>
            <div className="h-64 bg-gray-200 rounded-2xl max-w-2xl mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !placeDetails) {
    return (
      <div className="w-full bg-gradient-to-br from-green-50 to-white py-12 px-4">
        <div className="max-w-[1240px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Šta naši gosti kažu?
          </h2>
          <p className="text-gray-600 mb-8">
            Pogledajte naše recenzije na Google-u
          </p>
          <a
            href="https://www.google.com/maps/place/Monrepos/@43.6422413,21.8701449,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300"
          >
            <FaGoogle className="text-xl" />
            Vidi Google recenzije
          </a>
        </div>
      </div>
    );
  }

  const currentReviewData = placeDetails.reviews[currentReview];

  return (
    <div className="w-full bg-gradient-to-br from-green-50 to-white py-12 px-4">
      <div className="max-w-[1240px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Šta naši gosti kažu?
          </h2>

          {/* Overall Rating */}
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="flex gap-1">
              {renderStars(placeDetails.rating)}
            </div>
            <span className="text-2xl font-bold text-gray-800">
              {placeDetails.rating.toFixed(1)}
            </span>
          </div>
          <p className="text-gray-600">
            Na osnovu {placeDetails.user_ratings_total} recenzija
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            {/* Review Content */}
            <div className="mb-6">
              <div className="flex items-center gap-4 mb-4">
                {currentReviewData.profile_photo_url && (
                  <img
                    src={currentReviewData.profile_photo_url}
                    alt={currentReviewData.author_name}
                    className="w-12 h-12 rounded-full"
                  />
                )}
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-800">
                    {currentReviewData.author_name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {currentReviewData.relative_time_description}
                  </p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {renderStars(currentReviewData.rating)}
              </div>

              <p className="text-gray-700 leading-relaxed italic">
                "{currentReviewData.text}"
              </p>
            </div>

            {/* Navigation */}
            {placeDetails.reviews.length > 1 && (
              <div className="flex items-center justify-between mt-8 pt-6 border-t">
                <button
                  onClick={prevReview}
                  className="p-3 rounded-full bg-green-100 hover:bg-green-200 text-green-700 transition-colors"
                  aria-label="Previous review"
                >
                  <FaChevronLeft />
                </button>

                <div className="flex gap-2">
                  {placeDetails.reviews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentReview(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentReview
                          ? 'bg-green-600 w-8'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to review ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextReview}
                  className="p-3 rounded-full bg-green-100 hover:bg-green-200 text-green-700 transition-colors"
                  aria-label="Next review"
                >
                  <FaChevronRight />
                </button>
              </div>
            )}
          </div>

          {/* Google Link */}
          <div className="text-center mt-6">
            <a
              href="https://www.google.com/maps/place/Monrepos/@43.6422413,21.8701449,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              <FaGoogle />
              Vidi sve recenzije na Google-u
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
