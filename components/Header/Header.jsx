import React from "react";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";

const Header = () => {
  return (
    <header className="">
      <DesktopNavigation />
      <MobileNavigation />
    </header>
  );
};

export { Header };
