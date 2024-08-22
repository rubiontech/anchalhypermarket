"use client"
import GoogleReview from "@/components/GoogleReview";
import Map from "@/components/Map";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Product from "@/components/Product";
import dynamic from "next/dynamic";
import googleReview from "../lib/reviews.json";
import Footer from "@/components/Footer";
import Image from "next/image";

// Dynamically import the client component
const CarouselComponent = dynamic(() => import("../components/Courousel"), {
  ssr: false,
});

export default function Home() {  
  return (
    <>
      <div
        id="Homepage"
        className="pt-[43px] bg-white bg-opacity-60 backdrop-blur-md min-h-screen overflow-hidden"
      >
        <div className="flex-col md:flex md:flex-row  ">
          <CarouselComponent />
        </div>
        <div id="product" className="flex flex-col p-4">
          <h1 className="text-xl text-center font-semibold mb-4">Products</h1>

          <div
            id="products"
            className="mt-2 flex flex-wrap flex-col md:flex-row justify-center items-center gap-4"
          >
            <Product
              title="Fresh Meat"
              img="/imgs/products/1.png"
              description="Premium quality fresh meat for your favorite dishes."
            />
            <Product
              title="Vegetables"
              img="/imgs/products/2.png"
              description="A wide selection of fresh vegetables to enhance your meals."
            />
            <Product
              title="Dairy Products"
              img="/imgs/products/4.png"
              description="Enjoy fresh milk, cheese, and yogurt every day."
            />
            <Product
              title="Bakery Items"
              img="/imgs/products/5.png"
              description="Delicious bread, pastries, and cakes baked fresh daily."
            />
            <Product
              title="Frozen Foods"
              img="/imgs/products/6.png"
              description="Quick and easy meal solutions with our frozen food range."
            />
            <Product
              title="Beverages"
              img="/imgs/products/7.png"
              description="A variety of drinks including juices, sodas, and water."
            />
            <Product
              title="Kitchen Appliances"
              img="/imgs/products/8.png"
              description="Essential appliances to make your kitchen more efficient."
            />
            <Product
              title="Cake Baking Essentials"
              img="/imgs/products/9.png"
              description="Everything you need to bake the perfect cake."
            />
          </div>
        </div>

        <div id="Review" className="flex flex-col p-4">
          <h1 className="text-xl text-center font-semibold mb-4">
            Testimonials
          </h1>

          <div
            id="googleReviews"
            className="mt-2 flex flex-wrap flex-col md:flex-row justify-center items-center gap-4"
          >
            {googleReview.reviews.map((review) => {
              return (
                <GoogleReview
                  key={review.author_name}
                  img={review.profile_photo_url}
                  name={review.author_name}
                  review={review.text}
                  date={review.relative_time_description}
                  rating={review.rating}
                />
              );
            })}
          </div>
        </div>
        <div className="flex-col md:flex md:flex-row  bg-white">
          <div
            className="flex-1 text-center m-auto bg-cover bg-center text-zinc-900  "
            style={{ backgroundImage: "url('/imgs/vegitables.webp')" }}
          >
            <div
              id="about"
              className="z-10 p-8 mx-auto bg-white max-w-screen-sm  bg-opacity-80 backdrop-blur-lg"
            >
              <h3 className="font-semibold text-2xl">About</h3>
              <p className="text-sm mt-4 w-2/2 font-light mx-auto">
                Anchal Hypermart is dedicated to providing customers with high
                quality products at affordable prices, a safe shopping
                environment, and readily available parking in the back. We offer
                a wide variety of groceries, from fresh produce, meat, seafood,
                to packaged goods and snacks. Thank you for choosing us as your
                one-stop shop for all your grocery needs!
              </p>
            </div>
            <div className="  inset-0 bg-black opacity-30"></div>
          </div>
        </div>

        <div className="flex  flex-col md:flex-row ">
          <div className=" md:flex-1 p-10 max-w-screen-md">
            <Map />
          </div>
          <div className=" border-l md:border-l  border-l-gray-400">
            <div className=" md:flex-1 p-10">
              <MaxWidthWrapper>
                <span>
                  {/* <h4 className="text-lg font-bold">Anchal Hypermarket</h4> */}
                  <Image src="/logo/logo_malayalam.svg" width={100} height={100} alt="" />
                  <span className="font-thin">
                    <p>Market junction, Anchal, Kerala 691306</p>
                  </span>
                  <span className="font-thin  ">
                    <p className="mt-5">Open Monday to Sunday</p>
                    <p>Hours: 8AM - 9PM</p>
                    <p>Free Customer Parking in Back</p>
                    <h4 className="mt-5 text-lg font-bold">Contact</h4>
                    <p>Mobile: +918938528352</p>
                  </span>
                </span>
              </MaxWidthWrapper>
            </div>
          </div>
        </div>
       
      </div>
    </>
  );
}
