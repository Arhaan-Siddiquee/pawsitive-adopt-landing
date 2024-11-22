import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart } from "lucide-react";

interface PetCardProps {
  name: string;
  age: string;
  breed: string;
  image: string;
  description: string;
}

const PetCard = ({ name, age, breed, image, description }: PetCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-square relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full transition-transform hover:scale-105"
        />
        <button className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white">
          <Heart className="w-5 h-5 text-primary" />
        </button>
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{name}</CardTitle>
          <span className="text-sm text-gray-500">{age}</span>
        </div>
        <CardDescription>{breed}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 line-clamp-2">{description}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-primary hover:bg-primary/90 rounded-full">
          Meet {name}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PetCard;