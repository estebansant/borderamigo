import React from "react";
import { Header } from "./../../components/Header/Header";
import { Footer } from "./../../components/Footer/Footer";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <main className="flex flex-col items-center justify-between">
        {children}
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
