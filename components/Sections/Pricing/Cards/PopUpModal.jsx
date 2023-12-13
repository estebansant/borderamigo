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
      <DialogHeader>
        <DialogTitle>Get Started</DialogTitle>
        <DialogDescription>
          Start your new life in Spain, today
        </DialogDescription>
      </DialogHeader>

      <Tabs defaultValue="register" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" placeholder="********" />
          </div>
          <Button asChild>
            <Link href="/">Login</Link>
          </Button>
        </TabsContent>
        <TabsContent value="register">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" placeholder="Name" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="phone">Phone number</Label>
            <Input type="tel" id="phone" placeholder="Phone" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" placeholder="********" />
          </div>
          <ToggleGroup type="single">
            <ToggleGroupItem value="A" aria-label="Toggle bold">
              <div>A</div>
            </ToggleGroupItem>
            <ToggleGroupItem value="B" aria-label="Toggle italic">
              <div>B</div>
            </ToggleGroupItem>
          </ToggleGroup>
        </TabsContent>
      </Tabs>
    </React.Fragment>
  );
};

export { PopUpModal };
