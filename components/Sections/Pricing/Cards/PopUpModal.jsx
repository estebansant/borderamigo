"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import Link from "next/link";

const PopUpModal = () => {
  const [tab, setTab] = React.useState("register");

  const onTabChange = (value) => {
    setTab(value);
  };

  const [plan, setPlan] = React.useState("");

  const onPlanChange = (value) => {
    setPlan(value);
  };

  return (
    <React.Fragment>
      <DialogHeader className="flex-column-start h-fit w-fit">
        <DialogTitle>
          <p className="h4-bold text-black">Get Started</p>
        </DialogTitle>
        <DialogDescription>
          <p className="paragraph text-black">
            Begin your new life in Spain, today
          </p>
        </DialogDescription>
      </DialogHeader>

      <Tabs
        defaultValue="register"
        value={tab}
        onValueChange={onTabChange}
        className="flex-column-start h-full min-h-full w-full gap-[8px]"
      >
        <TabsList className="h-fit w-fit bg-line transition-all duration-300">
          <TabsTrigger
            value="register"
            style={{
              backgroundColor: tab === "register" ? "#F8771E" : "#F4F3F3",
            }}
            className="px-[12px] transition-all duration-300"
          >
            <p
              style={{ color: tab === "register" ? "#FFFFFF" : "#10151A" }}
              className="h5-bold"
            >
              Register
            </p>
          </TabsTrigger>
          <TabsTrigger
            value="login"
            style={{
              backgroundColor: tab === "login" ? "#F8771E" : "#F4F3F3",
            }}
            className="px-[12px] transition-all duration-300"
          >
            <p
              style={{ color: tab === "login" ? "#FFFFFF" : "#10151A" }}
              className="h5-bold"
            >
              Login
            </p>
          </TabsTrigger>
        </TabsList>

        <TabsContent
          value="login"
          className="flex w-full flex-col items-start justify-between"
        >
          <div className="flex-column-start w-full min-w-full gap-[16px]">
            <div className="flex-column-start w-full items-center gap-[8px] avg:w-[85%]">
              <Label htmlFor="email">
                <span className="button-text text-black">Email</span>
              </Label>
              <Input
                type="email"
                id="email"
                placeholder="Email"
                className="h-[32px] w-full min-w-full rounded-[6px] border-solid border-gray bg-white placeholder:text-gray focus:ring-mint"
              />
            </div>
            <div className="flex-column-start w-full items-center gap-[8px] avg:w-[85%]">
              <Label htmlFor="password">
                <span className="button-text text-black">Password</span>
              </Label>
              <Input
                type="password"
                id="password"
                placeholder="********"
                className="h-[32px] w-full min-w-full rounded-[6px] border-[1px] border-solid border-gray bg-white placeholder:text-gray focus:ring-mint"
              />
            </div>
          </div>

          <div className="flex-center mt-[45px] w-full min-w-full">
            <Button asChild className="flex-center w-[265px]">
              <Link
                href="/"
                className="h5-bold intro-bold h-[44px] bg-mint text-white hover:bg-orange"
              >
                Login
              </Link>
            </Button>
          </div>
        </TabsContent>

        <TabsContent
          value="register"
          className="flex-column-start w-full gap-[16px]"
        >
          <div className="flex-column-start button-text w-full items-center gap-[8px] avg:w-[85%]">
            <Label htmlFor="name">
              <span className="button-text text-black">Name</span>
            </Label>
            <Input
              type="text"
              id="name"
              placeholder="Name"
              className="h-[32px] w-full min-w-full rounded-[6px] border-[1px] border-solid border-gray bg-white placeholder:text-gray focus:ring-mint"
            />
          </div>
          <div className="flex-column-start w-full items-center gap-[4px] avg:w-[85%]">
            <Label htmlFor="phone">
              <span className="button-text text-black">Phone number</span>
            </Label>
            <Input
              type="tel"
              id="phone"
              placeholder="Phone"
              className="h-[32px] w-full min-w-full rounded-[6px] border-[1px] border-solid border-gray bg-white placeholder:text-gray focus:ring-mint"
            />
          </div>
          <div className="flex-column-start w-full items-center gap-[4px] avg:w-[85%]">
            <Label htmlFor="email">
              <span className="button-text text-black">Email</span>
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              className="h-[32px] w-full min-w-full rounded-[6px] border-[1px] border-solid border-gray bg-white placeholder:text-gray focus:ring-mint"
            />
          </div>
          <div className="flex-column-start w-full items-center gap-[4px] avg:w-[85%]">
            <Label htmlFor="password">
              <span className="button-text text-black">Password</span>
            </Label>
            <Input
              type="password"
              id="password"
              placeholder="********"
              className="h-[32px] w-full min-w-full rounded-[6px] border-[1px] border-solid border-gray bg-white placeholder:text-gray focus:ring-mint"
            />
          </div>

          <ToggleGroup
            value={plan}
            onValueChange={onPlanChange}
            type="single"
            className="mt-[12px] w-full gap-[16px]"
          >
            <ToggleGroupItem
              value="A"
              style={{
                backgroundColor: plan === "A" ? "#F8771E" : "#FFFFFF",
              }}
              className="h-[45px] w-[90px] rounded-[55px] border-[2px] border-solid border-mint bg-line transition-all duration-300"
            >
              <span
                style={{ color: plan === "A" ? "#FFFFFF" : "#F8771E" }}
                className="button-text"
              >
                €599
              </span>
            </ToggleGroupItem>
            <ToggleGroupItem
              value="B"
              style={{
                backgroundColor: plan === "B" ? "#F8771E" : "#FFFFFF",
              }}
              className="h-[45px] w-[90px] rounded-[55px] border-[2px] border-solid border-mint bg-line transition-all duration-300"
            >
              <span
                style={{ color: plan === "B" ? "#FFFFFF" : "#F8771E" }}
                className="button-text"
              >
                €1399
              </span>
            </ToggleGroupItem>
          </ToggleGroup>
          <Button asChild className="flex-center mt-[12px] w-full">
            <Link
              href="/"
              className="h5-bold intro-bold h-[44px] bg-mint text-white hover:bg-orange"
            >
              Continue with payment
            </Link>
          </Button>
        </TabsContent>
      </Tabs>
    </React.Fragment>
  );
};

export { PopUpModal };
