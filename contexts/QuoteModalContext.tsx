"use client";

import { createContext, useContext, useState } from "react";
import QuoteModal from "@/components/quote-modal";

type QuoteContextType = {
  openQuote: () => void;
};

const QuoteContext = createContext<QuoteContextType | null>(null);

export function QuoteProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  const openQuote = () => setOpen(true);
  const closeQuote = () => setOpen(false);

  return (
    <QuoteContext.Provider value={{ openQuote }}>
      {children}

      <QuoteModal open={open} onClose={closeQuote} />
    </QuoteContext.Provider>
  );
}

export function useQuoteModal() {
  const context = useContext(QuoteContext);

  if (!context) {
    throw new Error("useQuoteModal must be used inside QuoteProvider");
  }

  return context;
}