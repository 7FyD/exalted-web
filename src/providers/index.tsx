import React from "react";

import { QueryProvider } from "./Query";
import { Toaster } from "@/components/ui/toaster";

export const Providers: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <QueryProvider>
      {children}
      <Toaster />
    </QueryProvider>
  );
};
