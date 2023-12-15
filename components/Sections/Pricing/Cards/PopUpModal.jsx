"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { checkout } from "@/checkout";
import { Input } from "@/components/ui/input";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import Link from "next/link";
import logo from "@/public/assets/icons/logo_icon.png";
import Image from "next/image";

const PopUpModal = ({ change, plan }) => {
  // Handle form
  async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    /* eslint-disable */
    const response = await fetch("/api/submit", {
      method: "POST",
      body: formData,
    });

    // Handle response if necessary
    const data = await response.json();
    // ...
    /* eslint-enable */
  }

  const [tab, setTab] = React.useState("register");

  const onTabChange = (value) => {
    setTab(value);
  };

  return (
    <React.Fragment>
      <Tabs
        defaultValue="register"
        value={tab}
        onValueChange={onTabChange}
        className="flex-column-start h-full  min-h-full w-full gap-[8px] rounded-[55px]"
      >
        <TabsList className="h-fit w-full min-w-full rounded-[55px] bg-black transition-all duration-300">
          <TabsTrigger
            value="login"
            style={{
              backgroundColor: tab === "login" ? "#FFD6AF" : "#10151A",
            }}
            className="w-full rounded-[55px] px-[12px] transition-all duration-300"
          >
            <p
              style={{ color: tab === "login" ? "#10151A" : "#FFFFFF" }}
              className="intro"
            >
              Login
            </p>
          </TabsTrigger>
          <TabsTrigger
            value="register"
            style={{
              backgroundColor: tab === "register" ? "#FFD6AF" : "#10151A",
            }}
            className="w-full rounded-[55px] px-[12px] transition-all duration-300"
          >
            <p
              style={{ color: tab === "register" ? "#10151A" : "#FFFFFF" }}
              className="intro"
            >
              Register
            </p>
          </TabsTrigger>
        </TabsList>

        <DialogHeader className="flex-column-start mt-[12px] h-fit w-fit">
          <DialogTitle>
            <p className="h4-bold text-black">Get Started</p>
          </DialogTitle>
          <DialogDescription>
            <p className="paragraph text-black">
              Begin your new life in Spain, <b>today!</b>
            </p>
          </DialogDescription>
        </DialogHeader>

        <TabsContent
          value="login"
          className="flex w-full flex-col items-start justify-between"
        >
          <form
            className="flex w-full flex-col items-start justify-between"
            onSubmit={onSubmit}
          >
            <div className="flex-column-start w-full min-w-full gap-[16px]">
              <div className="flex-column-start w-full items-center gap-[8px] ">
                <Label htmlFor="email">
                  <span className="button-text text-black">Email</span>
                </Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="h-[42px] w-full min-w-full rounded-[6px] border-solid border-gray bg-white placeholder:text-gray focus:ring-mint"
                />
              </div>
              <div className="flex-column-start w-full items-center gap-[8px] ">
                <Label htmlFor="password">
                  <span className="button-text text-black">Password</span>
                </Label>
                <Input
                  type="password"
                  id="password"
                  placeholder="********"
                  className="h-[42px] w-full min-w-full rounded-[6px] border-[1px] border-solid border-gray bg-white placeholder:text-gray focus:ring-mint"
                />
              </div>
            </div>

            <div className="flex-center mt-[45px] w-full min-w-full">
              <Button asChild className="flex-center w-[265px]">
                <Link
                  href="/"
                  className="intro-bold h-[44px] bg-black text-white transition-all duration-300 hover:cursor-pointer hover:bg-mint"
                >
                  Login
                </Link>
              </Button>
            </div>
          </form>
        </TabsContent>

        <TabsContent
          value="register"
          className="flex-column-start w-full gap-[16px]"
        >
          <form
            className="flex-column-start w-full gap-[16px]"
            onSubmit={onSubmit}
          >
            <div className="flex-column-start button-text w-full items-center gap-[8px] ">
              <Input
                type="text"
                id="name"
                placeholder="Your name"
                className="h-[42px] w-full min-w-full rounded-[6px] border-[1px] border-solid border-gray bg-white placeholder:text-gray focus:ring-mint"
              />
            </div>
            <div className="flex-column-start w-full items-center gap-[4px] ">
              <Input
                type="email"
                id="email"
                placeholder="Email address"
                className="h-[42px] w-full min-w-full rounded-[6px] border-[1px] border-solid border-gray bg-white placeholder:text-gray focus:ring-mint"
              />
            </div>
            <div className="flex-column-start w-full items-center gap-[4px] ">
              <Input
                type="password"
                id="password"
                placeholder="********"
                className="h-[42px] w-full min-w-full rounded-[6px] border-[1px] border-solid border-gray bg-white placeholder:text-gray focus:ring-mint"
              />
            </div>
            <div className="flex-column-start w-full items-center gap-[4px] ">
              <Input
                type="tel"
                id="phone"
                placeholder="Phone number"
                className="h-[42px] w-full min-w-full rounded-[6px] border-[1px] border-solid border-gray bg-white placeholder:text-gray focus:ring-mint"
              />
            </div>

            <ToggleGroup
              value={plan}
              onValueChange={change}
              type="single"
              className="flex-column-start mt-[12px] w-full gap-[12px]"
            >
              <span className="h4-bold text-black">Select A Plan</span>
              <div className="flex-column-start w-full gap-[16px] avg:flex-row">
                <ToggleGroupItem
                  value="A"
                  style={{
                    backgroundColor: plan === "A" ? "#440B9B" : "#10151A",
                  }}
                  className="h-[74px] w-full rounded-[14px] bg-black pl-[4px] transition-all duration-300 avg:w-auto"
                >
                  <div className="small-paragraph-semibold flex-center w-full text-center text-white avg:w-auto">
                    <Image
                      src={logo}
                      alt="logo"
                      className="h-[74px]  w-[74px]"
                    />
                    Consultation + <br /> Self Guided Process
                  </div>
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="B"
                  style={{
                    backgroundColor: plan === "B" ? "#440B9B" : "#10151A",
                  }}
                  className="h-[74px] w-full rounded-[14px] bg-black pl-[4px] transition-all duration-300 avg:w-auto"
                >
                  <div className="small-paragraph-semibold flex-center w-full text-center text-white avg:w-auto">
                    <Image
                      src={logo}
                      alt="logo"
                      className="h-[74px]  w-[74px]"
                    />
                    We Handle <br />
                    Everything!
                  </div>
                </ToggleGroupItem>
              </div>
            </ToggleGroup>
            <Button
              asChild
              onClick={() => {
                checkout({
                  lineItems: [
                    {
                      price: "price_1OMhk5GfaGGBNJ6SOtvFhyQl",

                      quantity: 1,
                    },
                  ],
                });
              }}
              className="flex-center mt-[4px] w-full"
            >
              <div className="intro-bold mb-[20px] h-[44px] bg-black text-white transition-all duration-300 hover:cursor-pointer hover:bg-mint avg:mb-0">
                Get Started
              </div>
            </Button>
          </form>
        </TabsContent>
      </Tabs>
    </React.Fragment>
  );
};

export { PopUpModal };
