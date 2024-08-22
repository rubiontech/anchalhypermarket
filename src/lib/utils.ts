import { type ClassValue, clsx } from "clsx";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const formatPrice = (price: number) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  let formattedPrice = formatter.format(price);

  // Check if the currency symbol is at the beginning or end
  const currencySymbol = formatter
    .formatToParts(price)
    .find((part) => part.type === "currency")?.value!;

  // Insert a space between the currency symbol and the number
  formattedPrice = formattedPrice.replace(currencySymbol, currencySymbol + " ");

  return formattedPrice;
};

export function constructMetaData({
  title = "Anchal Hypermarket",
  description = "Anchal Hypermarket is your one-stop destination for fresh groceries, high-quality meats, daily essentials, and more. Experience a wide selection of products at competitive prices, with a commitment to providing the best shopping experience for our customers.",
  image = "/thumbnail.png",
  icons = "/favicon.ico",
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
} = {}): Metadata {
  return {
    title,
    description,
    icons,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@NabeelMS01",
    },
    metadataBase: new URL("https://case-app-dev.vercel.app"),
  };
}
 
 

 

 
