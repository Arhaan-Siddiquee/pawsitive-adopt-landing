import { Button } from "@/components/ui/button";
import { Dog, Cat, Heart, PawPrint } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-white">
      {/* Hero Section */}
      <section className="container px-4 pt-20 pb-16 animate-fadeIn">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Find Your Perfect Pet Companion
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Connect with local shelters and find your new best friend through our
            modern adoption platform
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full">
            Start Adopting Today
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <PawPrint className="w-10 h-10 text-primary" />,
                title: "Easy Matching",
                description:
                  "Find pets that match your lifestyle with our smart algorithm",
              },
              {
                icon: <Heart className="w-10 h-10 text-primary" />,
                title: "Verified Shelters",
                description:
                  "All our partner shelters are thoroughly vetted and verified",
              },
              {
                icon: <Dog className="w-10 h-10 text-primary" />,
                title: "Virtual Meetings",
                description:
                  "Meet your potential pet virtually before visiting in person",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-secondary/30"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary">
        <div className="container px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { number: "10,000+", label: "Pets Adopted" },
              { number: "500+", label: "Partner Shelters" },
              { number: "98%", label: "Happy Families" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Meet Your New Best Friend?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of happy pet owners who found their perfect companion
            through our platform
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full">
            Get Started Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;