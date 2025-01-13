export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to Your Startup
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Your compelling tagline goes here
          </p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join us today and transform your business
          </p>
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    title: "Feature 1",
    description: "Description of your first main feature goes here. Explain how it benefits your users."
  },
  {
    title: "Feature 2",
    description: "Description of your second main feature goes here. Highlight its unique value proposition."
  },
  {
    title: "Feature 3",
    description: "Description of your third main feature goes here. Emphasize its competitive advantage."
  }
];