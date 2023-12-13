import React from "react";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";

const Header = () => {
  return (
    <header className="top-0 z-50 flex h-[64px] w-full flex-col items-center justify-center border-b-[1px] border-solid border-line bg-bew-gray">
      <DesktopNavigation />
      <MobileNavigation />
    </header>
  );
};

export { Header };
