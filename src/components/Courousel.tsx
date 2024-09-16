"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const CarouselComponent = () => {
  const autoplayPlugin = Autoplay({ delay: 3000, stopOnInteraction: true });

  const banners = [
    { img: "/imgs/offer2.png" },
    { img: "/imgs/offer1.png" },
  ];

  return (
    <Carousel
      plugins={[autoplayPlugin]}
      className="w-full"
      onMouseEnter={() => autoplayPlugin.stop()}
      onMouseLeave={() => autoplayPlugin.reset()}
    >
      <CarouselContent>
        {banners.map((banner, index) => (
          <CarouselItem key={index}>
            <img src={banner.img} alt={`banner-${index}`} className="" />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default CarouselComponent;
