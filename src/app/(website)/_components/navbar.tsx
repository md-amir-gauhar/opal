import { MenuIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const LandingPageNavbar = () => {
  return (
    <div className="flex w-full justify-between items-center">
      <div className="text-3xl font-semibold flex items-center gap-x-3">
        <MenuIcon className="w-8 h-8" />
        <Image src="/opal-logo.svg" alt="logo" width={40} height={40} />
        Opal
      </div>
    </div>
  );
};

export default LandingPageNavbar;
