const features = [
  { name: 'Instant AI Responses', description: 'Generate human-like responses in seconds for any review.' },
  { name: 'Tone Customization', description: 'Adjust the tone to perfectly match your brand voice—from formal to friendly.' },
  { name: 'Multi-Platform Ready', description: 'Craft responses suitable for Google, Yelp, TripAdvisor, and more.' },
  { name: 'Save Time', description: 'Turn hours of work into minutes, freeing you up to focus on your business.' },
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
       <h2 className="text-3xl font-bold text-center text-white mb-12">Why You Will Love It</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.name} className="bg-slate-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">{feature.name}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};