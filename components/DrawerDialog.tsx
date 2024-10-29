"use client";
import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import FormEmail from "./FormContact";
import { useActionFloatButtonContext } from "@/context/useActionFloatButtonContext";
export default function DrawerDialog() {
  const { isDrawerOpen, setIsDrawerOpen, isDesktop } =
    useActionFloatButtonContext();

  if (isDesktop)
    return (
      <Dialog open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Consul Us via Email</DialogTitle>
            <DialogDescription>
              Send us a message and we&lsquo;ll get back to you soon.
            </DialogDescription>
          </DialogHeader>
          <FormEmail />
        </DialogContent>
      </Dialog>
    );

  return (
    <Drawer modal={false} open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      <DrawerContent className="mb-5">
        <DrawerHeader>
          <DrawerTitle>Consul with Us via Email</DrawerTitle>
          <DrawerDescription>
            Send us a message and we&lsquo;ll get back to you soon.
          </DrawerDescription>
        </DrawerHeader>
        <FormEmail />
      </DrawerContent>
    </Drawer>
  );
}
