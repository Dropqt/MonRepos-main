'use client';

import { useState, useEffect } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar, FaGoogle, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Hawk from '@/components/brand/Hawk';

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

        const place = new window.google.maps.places.Place({ id: placeId });

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
            reviews: result.reviews || [],
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
      if (window.google?.maps?.places?.Place) {
        fetchReviews();
        return;
      }

      const existingScript = document.querySelector('script[src*="maps.googleapis.com"]');
      if (existingScript) {
        existingScript.addEventListener('load', () => fetchReviews());
        return;
      }

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
      stars.push(<FaStar key={`full-${i}`} className="text-accent" />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-accent" />);
    }
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-accent/40" />);
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

  const googleLink = 'https://www.google.com/maps/place/Monrepos/@43.6422413,21.8701449,17z';

  if (loading) {
    return (
      <section className="border-t border-line bg-cream py-20 px-5">
        <div className="mx-auto max-w-3xl animate-pulse text-center">
          <div className="mx-auto mb-4 h-8 w-64 rounded bg-sand" />
          <div className="mx-auto mb-8 h-4 w-48 rounded bg-sand" />
          <div className="mx-auto h-64 max-w-2xl rounded-2xl bg-sand" />
        </div>
      </section>
    );
  }

  if (error || !placeDetails) {
    return (
      <section className="border-t border-line bg-cream py-20 px-5">
        <div className="mx-auto max-w-3xl text-center">
          <Hawk className="mx-auto h-6 w-12 text-sage" />
          <h2 className="mt-4 text-4xl">Šta naši gosti kažu?</h2>
          <p className="mt-3 text-cocoa">Pogledajte naše recenzije na Google-u.</p>
          <a
            href={googleLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mt-8"
          >
            <FaGoogle /> Vidi Google recenzije
          </a>
        </div>
      </section>
    );
  }

  const currentReviewData = placeDetails.reviews[currentReview];

  return (
    <section className="border-t border-line bg-cream py-20 px-5">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center">
          <p className="eyebrow">Recenzije</p>
          <h2 className="text-4xl">Šta naši gosti kažu?</h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="flex gap-1 text-lg">{renderStars(placeDetails.rating)}</div>
            <span className="text-2xl font-bold">{placeDetails.rating.toFixed(1)}</span>
          </div>
          <p className="mt-1 text-sm text-cocoa">
            Na osnovu {placeDetails.user_ratings_total} recenzija
          </p>
        </div>

        {/* Carousel */}
        <div className="relative mx-auto mt-12 max-w-3xl">
          <div className="panel p-8 md:p-12">
            <div className="mb-2 flex items-center gap-4">
              {currentReviewData.profile_photo_url && (
                <img
                  src={currentReviewData.profile_photo_url}
                  alt={currentReviewData.author_name}
                  className="h-12 w-12 rounded-full"
                />
              )}
              <div className="flex-1">
                <h3 className="font-sans text-lg font-semibold text-espresso">
                  {currentReviewData.author_name}
                </h3>
                <p className="text-sm text-cocoa">
                  {currentReviewData.relative_time_description}
                </p>
              </div>
              <FaGoogle className="text-xl text-cocoa/50" />
            </div>

            <div className="mb-4 flex gap-1">{renderStars(currentReviewData.rating)}</div>

            <p className="font-serif text-lg italic leading-relaxed text-cocoa">
              “{currentReviewData.text}”
            </p>

            {placeDetails.reviews.length > 1 && (
              <div className="mt-8 flex items-center justify-between border-t border-line pt-6">
                <button
                  onClick={prevReview}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-sand text-espresso transition-colors hover:bg-sage hover:text-white"
                  aria-label="Prethodna recenzija"
                >
                  <FaChevronLeft />
                </button>

                <div className="flex items-center gap-2">
                  {placeDetails.reviews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentReview(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentReview ? 'w-8 bg-accent' : 'w-2 bg-line hover:bg-cocoa/40'
                      }`}
                      aria-label={`Recenzija ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextReview}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-sand text-espresso transition-colors hover:bg-sage hover:text-white"
                  aria-label="Sledeća recenzija"
                >
                  <FaChevronRight />
                </button>
              </div>
            )}
          </div>

          <div className="mt-6 text-center">
            <a
              href={googleLink}
              target="_blank"
              rel="noopener noreferrer"
              className="anim-link inline-flex items-center gap-2"
            >
              <FaGoogle /> Vidi sve recenzije na Google-u
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
