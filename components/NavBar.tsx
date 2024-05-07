import React from "react";
import { CustomLink } from "./CustomLink";
export function NavBar() {
  return (
    <div className="font-mono w-full px-32 pt-8 font-medium flex items-center justify-between relative">
      <div className=" w-full flex justify-between items-center">
        <nav>
          <CustomLink href="/home" title="Home" className=" mr-10" />
          <CustomLink href="/about" title="About" className=" mr-10" />
          <CustomLink href="/contact" title="Contact" className=" mr-10" />
        </nav>
      </div>
    </div>
  );
}
