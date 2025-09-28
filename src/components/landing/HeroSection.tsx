import Link from 'next/link';

export const HeroSection = () => {
  return (
    <section className="text-center py-20 md:py-32">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
          Never Write a Review Response Again
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-8">
          Let our AI instantly craft personalized, professional responses to your customer reviews, saving you time and boosting your online reputation.
        </p>
        <Link href="/dashboard" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105">
          Get Started for Free
        </Link>
      </div>
    </section>
  );
};