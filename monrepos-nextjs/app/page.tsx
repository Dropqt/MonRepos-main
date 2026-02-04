import LandingIntro from '@/components/LandingIntro';
import Cards from '@/components/Cards';
import GoogleReviews from '@/components/GoogleReviews';

export default function Home() {
  return (
    <div>
      <LandingIntro />
      <Cards />
      <GoogleReviews />
    </div>
  );
}
