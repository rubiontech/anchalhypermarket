import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface IMaxWidthWrapper {
  className?: string;
  children: ReactNode;
}
const MaxWidthWrapper = ({ className, children }: IMaxWidthWrapper) => {
  return (
    <div className={cn("h-full mx-auto w-full max-w-[98%]  ", className)}>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
