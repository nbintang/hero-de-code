import  { useState } from "react";
import useMediaQuery from "./useMediaQuery";

export default function useActionFloatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const toggleOpen = () => setIsOpen(!isOpen);

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  return {
    isOpen,
    isDrawerOpen,
    isDesktop,
    toggleOpen,
    openDrawer,
    setIsDrawerOpen,
  };
}
