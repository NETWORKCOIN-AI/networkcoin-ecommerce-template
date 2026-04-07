import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetDescription,
} from "@/components/ui/sheet";
import { useCart } from "@/contexts/CartContext";
import { CartItem } from "./CartItem";

export function CartDrawer() {
  const { items, cartTotal, cartCount } = useCart();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {cartCount > 0 && (
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
              {cartCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
          <SheetDescription>
            {cartCount === 0
              ? "Your cart is empty."
              : `You have ${cartCount} item${cartCount > 1 ? "s" : ""} in your cart.`}
          </SheetDescription>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto">
          {items.map((item) => (
            <div key={item.id}>
              <CartItem item={item} />
              <Separator />
            </div>
          ))}
        </div>
        {cartCount > 0 && (
          <div className="space-y-4 pt-4">
            <Separator />
            <div className="flex items-center justify-between text-base font-medium">
              <span>Total</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <Button className="w-full" size="lg">
              Proceed to Checkout
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
