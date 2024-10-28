"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import FormEmail from "./FormContact";
import { FaWhatsapp } from "react-icons/fa";
import useMediaQuery from "@/hooks/useMediaQuery";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
export default function FloatingActionButtonV2() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const toggleOpen = () => setIsOpen(!isOpen);

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50">
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.button
                key="phone"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ delay: 0.1 }}
                className="absolute bottom-16 right-0 p-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                aria-label="Call"
              >
                <FaWhatsapp size={24} />
              </motion.button>
              <motion.button
                key="mail"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                className="absolute bottom-32 right-0 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-label="Email"
                onClick={openDrawer}
              >
                <Mail size={24} />
              </motion.button>
            </>
          )}
        </AnimatePresence>
        <motion.button
          className="p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          onClick={toggleOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <AnimatePresence mode="wait">
            {!isOpen ? (
              <motion.div
                key="phone"
                initial={{ rotate: 0 }}
                animate={{ rotate: 0 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Phone className="text-white" size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="text-white" size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
      {isDesktop && (
        <Dialog open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you’re done.
              </DialogDescription>
            </DialogHeader>
            <FormEmail />
          </DialogContent>
        </Dialog>
      )}
      {!isDesktop && (
        <Drawer dismissible={false} open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Contact Us via Email</DrawerTitle>
              <DrawerDescription>
                Send us a message and we&lsquo;ll get back to you soon.
              </DrawerDescription>
            </DrawerHeader>
            <FormEmail />
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="outline"  onClick={() => setIsDrawerOpen(false)}>Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      )}
    </>
  );
}
