import Image from "next/image";

interface IProducts {
    title: string;
    img: string;
    description?: string;
    alt?: string;
  }
  
  const Product = ({ title, img, description, alt }: IProducts) => {
    return (
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center w-full md:w-1/4">
        <Image
          width={300 }
          height={300}
          className="w-full h-48 bg-gray-200 rounded-md mb-4"
          src={img}
          alt={alt || title}
        />
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        {description && <p className="text-gray-600 mb-4">{description}</p>}
      </div>
    );
  };
  
  export default Product;
  