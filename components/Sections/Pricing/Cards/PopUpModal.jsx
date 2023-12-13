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
        className="flex-column-start w-full gap-[8px]"
      >
        <TabsList className=" h-fit w-fit gap-[16px]">
          <TabsTrigger value="register" className="p-0 focus:underline">
            <p className="h5-bold text-black">Register</p>
          </TabsTrigger>
          <TabsTrigger value="login" className="p-0 focus:underline">
            <p className="h5-bold text-black">Login</p>
          </TabsTrigger>
        </TabsList>

        <TabsContent
          value="login"
          className="flex-column-start w-full gap-[16px]"
        >
          <div className="flex-column-start w-[265px] max-w-sm items-center gap-[8px]">
            <Label htmlFor="email">
              <span className="button-text text-black">Email</span>
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              className="h-[32px] w-[265px] rounded-[6px] border-none bg-line shadow-md2 placeholder:text-gray focus:border-[1px] focus:border-solid focus:border-mint focus:ring-0 focus:ring-transparent"
            />
          </div>
          <div className="flex-column-start w-[265px] max-w-sm items-center gap-[8px]">
            <Label htmlFor="password">
              <span className="button-text text-black">Password</span>
            </Label>
            <Input
              type="password"
              id="password"
              placeholder="********"
              className="h-[32px] w-[265px] rounded-[6px] border-none bg-line shadow-md2 placeholder:text-gray focus:border-[1px] focus:border-solid focus:border-mint focus:ring-0 focus:ring-transparent"
            />
          </div>
          <Button asChild className="flex-center mt-[12px] w-[265px]">
            <Link
              href="/"
              className="h5-bold intro-bold h-[44px] bg-mint text-white hover:bg-orange"
            >
              Login
            </Link>
          </Button>
        </TabsContent>

        <TabsContent
          value="register"
          className="flex-column-start w-full gap-[16px]"
        >
          <div className="flex-column-start w-full max-w-sm items-center gap-[8px]">
            <Label htmlFor="name">
              <span className="button-text text-black">Name</span>
            </Label>
            <Input
              type="text"
              id="name"
              placeholder="Name"
              className="h-[32px] w-[265px] rounded-[6px] border-none bg-line shadow-md2 placeholder:text-gray focus:border-[1px] focus:border-solid focus:border-mint focus:ring-0 focus:ring-transparent"
            />
          </div>
          <div className="flex-column-start w-full max-w-sm items-center gap-[4px]">
            <Label htmlFor="phone">
              <span className="button-text text-black">Phone number</span>
            </Label>
            <Input
              type="tel"
              id="phone"
              placeholder="Phone"
              className="h-[32px] w-[265px] rounded-[6px] border-none bg-line shadow-md2 placeholder:text-gray focus:border-[1px] focus:border-solid focus:border-mint focus:ring-0 focus:ring-transparent"
            />
          </div>
          <div className="flex-column-start w-full max-w-sm items-center gap-[4px]">
            <Label htmlFor="email">
              <span className="button-text text-black">Email</span>
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              className="h-[32px] w-[265px] rounded-[6px] border-none bg-line shadow-md2 placeholder:text-gray focus:border-[1px] focus:border-solid focus:border-mint focus:ring-0 focus:ring-transparent"
            />
          </div>
          <div className="flex-column-start w-full max-w-sm items-center gap-[4px]">
            <Label htmlFor="password">
              <span className="button-text text-black">Password</span>
            </Label>
            <Input
              type="password"
              id="password"
              placeholder="********"
              className="h-[32px] w-[265px] rounded-[6px] border-none bg-line shadow-md2 placeholder:text-gray focus:border-[1px] focus:border-solid focus:border-mint focus:ring-0 focus:ring-transparent"
            />
          </div>
          <ToggleGroup type="single" className="mt-[12px] w-full">
            <ToggleGroupItem
              value="A"
              className="h-[45px] w-[90px] bg-line focus:bg-dark-pink"
            >
              <span className="button-text text-black">€599</span>
            </ToggleGroupItem>
            <ToggleGroupItem
              value="B"
              className="h-[45px] w-[90px] bg-line focus:bg-dark-pink"
            >
              <span className="button-text text-black">€1399</span>
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
