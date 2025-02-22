import hero1 from "@/public/images/pexels-caio-61372.jpg";
import hero2 from "@/public/images/pexels-charlesdeluvio-1851164.jpg";
import hero3 from "@/public/images/pexels-gilberto-reyes-259461-800330.jpg";
import hero4 from "@/public/images/pexels-pixabay-160846.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";

const carouselImages = [hero1, hero2, hero3, hero4];

const HeroCarousel = () => {
  return (
    <div className="hidden lg:block">
      <Carousel>
        <CarouselContent>
          {carouselImages.map((image, index) => {
            return (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="p-2">
                    <Image
                      src={image}
                      alt="hero"
                      className="w-full h-[24rem] rounded-none object-cover"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
export default HeroCarousel;
