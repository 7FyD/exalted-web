import React from "react";

import { QueryProvider } from "./Query";
import { Toaster } from "@/components/ui/toaster";
import { BrowserRouter } from "react-router-dom";

export const Providers: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <BrowserRouter>
      <QueryProvider>
        {children}
        <Toaster />
      </QueryProvider>
    </BrowserRouter>
  );
};
