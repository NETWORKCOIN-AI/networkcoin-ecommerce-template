import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import { Toaster } from "@/components/ui/toaster";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between">
          <h1 className="text-xl font-bold">Store</h1>
        </div>
      </header>
      <main className="container py-8">
        <h2 className="text-2xl font-semibold mb-4">Welcome to the Store</h2>
        <p className="text-muted-foreground">
          This is a starter e-commerce template. Add your products and start selling.
        </p>
      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <CartProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
        <Toaster />
      </CartProvider>
    </HashRouter>
  </React.StrictMode>
);
