import { useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import PetCard from "@/components/PetCard";

const Adopt = () => {
  const pets = [
    {
      name: "Luna",
      age: "2 years",
      breed: "Golden Retriever",
      image: "/placeholder.svg",
      description: "Luna is a friendly and energetic dog who loves to play fetch and go for long walks.",
    },
    {
      name: "Oliver",
      age: "1 year",
      breed: "Persian Cat",
      image: "/placeholder.svg",
      description: "Oliver is a gentle and affectionate cat who enjoys lounging in sunny spots.",
    },
    {
      name: "Max",
      age: "3 years",
      breed: "German Shepherd",
      image: "/placeholder.svg",
      description: "Max is a loyal and intelligent dog, great with families and other pets.",
    },
    // Add more pets as needed
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-white">
      <NavBar />
      
      <main className="container px-4 pt-32 pb-16">
        <h1 className="text-4xl font-bold text-center mb-8">Available Pets</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pets.map((pet, index) => (
            <PetCard key={index} {...pet} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Adopt;