import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Navbar = () => {
  const NavButtons = [
    { title: "Home", link: "#" },
    { title: "Products", link: "#products" },

    { title: "About", link: "#about" },
    { title: "Contact", link: "#" },
  ];

  return (
    <>
      <div
        id="nav1"
        className="fixed top-0 left-0 right-0 bg-[#7CB518] h-[43px] md:h-[52px] items-center text-white text-sm font-semibold z-50"
      >
        <MaxWidthWrapper>
          <div className="m-auto w-full flex flex-col md:flex-row justify-between items-center pt-2">
            <div className="flex-none hidden md:block">
              <p className="w-52 font-extralight">
                Market junction, Anchal, Kerala 691306
              </p>
            </div>
            <div className="flex-none">Open 7 Days / Week, 9 AM - 10 PM </div>
            <div className="flex-none hidden lg:block font-extralight">
              <p>
                <a href="tel:+917012237271">Phone: +91 7012237271</a>
              </p>
              <p>
                <a href="tel:04732894285">Tel: 0473 2894285</a>
              </p>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      <div
        id="nav2"
        className=" hidden md:block md:fixed top-0 left-0 right-0 mt-[47px] bg-transparent z-40  backdrop-blur-md "
      >
        <MaxWidthWrapper className="relative">
          <div className="mx-auto flex justify-between items-center ">
            <div className=" ">
              <Image
                src="/logo/logo_malayalam.svg"
                alt=""
                width={70}
                height={50}
              />
            </div>
            <div className="flex space-x-4">
              {NavButtons.map((nav) => (
                <a
                  key={nav.title}
                  href={nav.link}
                  className="px-8 py-2 bg-white border border-zinc-900 text-gray-800 rounded-full hover:bg-[#7CB518] hover:border-transparent hover:text-white"
                >
                  {nav.title}
                </a>
              ))}
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </>
  );
};

export default Navbar;
