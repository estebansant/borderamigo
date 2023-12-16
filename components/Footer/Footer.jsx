import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "@/public/assets/icons/logo.svg";

const Footer = () => {
  return (
    <footer className="flex-column-center h-auto w-full gap-12 bg-pink px-6 pb-[55px] pt-[60px] md:px-[50px] lg:px-[150px]">
      <div className="flex-column-start md:flex-between w-full gap-12 md:flex-row">
        <div className="flex-column-start max-w-[390px] gap-6">
          <Image
            src={logo}
            alt="visa pulse"
            className="ml-[-15px] h-[60px] w-[180px]"
          />
          <p className="small-paragraph text-mint">
            We pave the way to streamline and fast track your digital nomad
            residence in Spain. We handle the tedious details so you can enjoy
            more tapas, siestas and sunshine in Spain.
          </p>
        </div>

        <div className="flex-column-start md:flex-between gap-12 md:flex-row md:gap-[60px] lg:gap-[192px]">
          <div className="flex-column-start h-full w-auto gap-6">
            <h6 className="h5-bold text-black">About us</h6>
            <ul>
              <li>
                <Link href="#benefits">
                  <p className="paragraph md:intro text-black hover:cursor-pointer hover:underline">
                    Benefits
                  </p>
                </Link>
              </li>
              <li>
                <Link href="#how-it-works">
                  <p className="paragraph md:intro text-black hover:cursor-pointer hover:underline">
                    How it Works
                  </p>
                </Link>
              </li>
              <li>
                <Link href="#faqs">
                  <p className="paragraph md:intro text-black hover:cursor-pointer hover:underline">
                    FAQ
                  </p>
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex-column-start h-full w-auto gap-6">
            <h6 className="h5-bold text-black">Blog</h6>
            <ul className="w-auto">
              <li className="w-auto">
                <Link href="/" className="w-auto">
                  <p className="paragraph md:intro text-black hover:cursor-pointer hover:underline">
                    Article 1
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <p className="paragraph md:intro text-black hover:cursor-pointer hover:underline">
                    Article 2
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <p className="paragraph md:intro text-black hover:cursor-pointer hover:underline">
                    Article 3
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex-between w-full">
        <div className="flex-center">
          <p className="small-paragraph text-left text-black avg:text-center">
            ® 2023 · VisaPulse by DigitalNomadVisa Spain
          </p>
        </div>
        <div className="flex-center gap-6">
          <Link href="/terms-of-service" className="flex-center">
            <p className="flex-center small-paragraph text-center text-black hover:cursor-pointer hover:underline">
              Terms of service
            </p>
          </Link>
          <Link href="/privacy-policy" className="flex-center">
            <p className="flex-center small-paragraph text-center text-black hover:cursor-pointer hover:underline">
              Privacy policy
            </p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
