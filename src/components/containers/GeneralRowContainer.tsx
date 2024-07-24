import { cn } from "cn-func";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const GeneralRowContainer: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={cn("xl:px-4 lg:px-4 md:px-4 sm:px-3 xs:px-3", className)}>
      {children}
    </div>
  );
};

export default GeneralRowContainer;
