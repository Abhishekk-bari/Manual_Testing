
function Feature() {
    const features = [
        {
          title: "Comprehensive Testing Scenarios",
          description: "Access a wide range of testing scenarios for various types of testing.",
        },
        {
          title: "Categorized by Testing Types",
          description: "Easily find scenarios for functional, performance, security, and more.",
        },
        {
          title: "Contribute and Share Your Scenarios",
          description: "Help the community by adding your own testing scenarios.",
        },
      ];
    
      return (
        <div className="py-16 px-4 ">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      );
    };

export default Feature
