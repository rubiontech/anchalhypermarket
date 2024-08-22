import dynamic from "next/dynamic";
import Image from "next/image";

// Dynamically import the icons to avoid SSR issues
const FaStar = dynamic(() => import("react-icons/fa").then((mod) => mod.FaStar), { ssr: false });
const FaStarHalfAlt = dynamic(() => import("react-icons/fa").then((mod) => mod.FaStarHalfAlt), { ssr: false });
const FaRegStar = dynamic(() => import("react-icons/fa").then((mod) => mod.FaRegStar), { ssr: false });

interface IReview {
  name: string;
  img: string;
  review: string;
  date: string;
  rating: number; // rating out of 5
}

const GoogleReview = ({ name, img, review, date, rating }: IReview) => {
  // Helper function to render stars
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-500" />);
      }
    }
    return stars;
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-start gap-4 max-w-md mx-auto">
      <div className="flex items-center w-full gap-4">
        <img
          src={img}
          alt={`${name}'s profile picture`}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
      </div>
      <div className="flex items-center mb-2">{renderStars()}</div>
      <p className="text-gray-700">{review}</p>
    </div>
  );
};

export default GoogleReview;
