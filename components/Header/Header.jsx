import React from "react";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex h-[64px] w-full flex-col items-center justify-center border-b-[1px] border-solid border-line bg-pink">
      <DesktopNavigation />
      <MobileNavigation />
    </header>
  );
};

export { Header };
