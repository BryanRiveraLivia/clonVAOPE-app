import { cn } from "cn-func";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const GeneralContainer: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={cn("xl:max-w-[1420px]  mx-auto", className)}>
      {children}
    </div>
  );
};

export default GeneralContainer;
