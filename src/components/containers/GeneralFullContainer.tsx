import { cn } from "cn-func";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const GeneralFullContainer: React.FC<Props> = ({ children, className }) => {
  return <div className={cn("w-full", className)}>{children}</div>;
};

export default GeneralFullContainer;
