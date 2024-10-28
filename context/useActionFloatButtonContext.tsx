"use client";
import React, { createContext, useContext } from "react";
import useActionFloatButton from "@/hooks/useActionFloatButton";

interface ActionFloatButtonContextValue {
  isOpen: boolean;
  isDrawerOpen: boolean;
  isDesktop: boolean;
  toggleOpen: () => void;
  openDrawer: () => void;
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ActionFloatButtonContext =
  createContext<ActionFloatButtonContextValue | null>(null);

export function ActionFloatButtonProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const value = useActionFloatButton();
  return (
    <ActionFloatButtonContext.Provider value={value}>
      {children}
    </ActionFloatButtonContext.Provider>
  );
}

export function useActionFloatButtonContext() {
  const context = useContext(ActionFloatButtonContext);
  if (!context) {
    throw new Error(
      "useActionFloatButtonContext must be used within ActionFloatButtonProvider"
    );
  }
  return context;
}
