"use client";

import { useState } from "react";
import { 
  ShoppingBag, 
  ShoppingCart, 
  Star, 
  Plus, 
  Minus, 
  Check, 
  X, 
  CreditCard, 
  Sparkles 
} from "lucide-react";

interface Product {
  id: string;
  name: string;
  category: "Electronics" | "Apparel" | "Accessories" | "Hardware";
  price: number;
  rating: number;
  image: string;
  description: string;
}

const PRODUCTS: Product[] = [
  {
    id: "v-1",
    name: "Vendure Wireless Cyber Headset",
    category: "Electronics",
    price: 149.99,
    rating: 4.9,
    image: "🎧",
    description: "Active noise cancellation with 40-hour battery life and spatial audio driver."
  },
  {
    id: "v-2",
    name: "Subramanya AI Developer Jacket",
    category: "Apparel",
    price: 89.00,
    rating: 4.8,
    image: "🧥",
    description: "Premium waterproof techwear hoody with embroidered glowing neon logos."
  },
  {
    id: "v-3",
    name: "Ergonomic Mechanical Keyboard",
    category: "Electronics",
    price: 129.50,
    rating: 4.9,
    image: "⌨️",
    description: "Hot-swappable tactile switches with customizable RGB light bar and aluminum frame."
  },
  {
    id: "v-4",
    name: "High-Precision Crypto Wallet Key",
    category: "Hardware",
    price: 79.99,
    rating: 4.7,
    image: "🔐",
    description: "Hardware encrypted cold storage key with OLED display and biometric lock."
  },
];

export default function VendureHomePage() {
  const [cart, setCart] = useState<{ product: Product; quantity: number }[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [category, setCategory] = useState("All");
  const [checkoutDone, setCheckoutDone] = useState(false);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as { product: Product; quantity: number }[]
    );
  };

  const cartTotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const filtered = PRODUCTS.filter((p) => category === "All" || p.category === category);

  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col font-sans">
      {/* Navbar */}
      <header className="sticky top-0 z-40 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800/80 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-teal-500 to-indigo-500 p-0.5 shadow-lg shadow-cyan-500/20">
            <div className="w-full h-full bg-neutral-950 rounded-[10px] flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-cyan-400" />
            </div>
          </div>
          <div>
            <div className="font-bold text-base bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
              VENDURE STOREFRONT
            </div>
            <div className="text-[10px] font-mono text-neutral-400">HEADLESS COMMERCE v3.0</div>
          </div>
        </div>

        <button
          onClick={() => setCartOpen(true)}
          className="flex items-center space-x-2 bg-cyan-500 hover:bg-cyan-400 text-neutral-950 font-bold px-4 py-2 rounded-xl transition-all shadow-lg shadow-cyan-500/20 text-xs"
        >
          <ShoppingCart className="w-4 h-4" />
          <span>Cart ({cart.reduce((a, b) => a + b.quantity, 0)})</span>
          <span className="font-mono bg-neutral-950 text-cyan-400 px-2 py-0.5 rounded-md text-[10px]">
            ${cartTotal.toFixed(2)}
          </span>
        </button>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-10 flex-1 w-full space-y-8">
        {/* Category Filters */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-2">
          {["All", "Electronics", "Apparel", "Hardware"].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                category === cat
                  ? "bg-cyan-500 text-neutral-950 font-bold"
                  : "bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((p) => (
            <div
              key={p.id}
              className="bg-neutral-900/80 border border-neutral-800 hover:border-cyan-500/50 rounded-2xl p-5 flex flex-col justify-between transition-all group"
            >
              <div className="space-y-3">
                <div className="h-32 bg-neutral-950 rounded-xl border border-neutral-800 flex items-center justify-center text-5xl group-hover:scale-105 transition-transform">
                  {p.image}
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                    {p.category}
                  </span>
                  <span className="flex items-center space-x-1 text-amber-400">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>{p.rating}</span>
                  </span>
                </div>

                <h3 className="font-bold text-white text-base group-hover:text-cyan-400 transition-colors">
                  {p.name}
                </h3>
                <p className="text-neutral-400 text-xs leading-relaxed">{p.description}</p>
              </div>

              <div className="pt-4 border-t border-neutral-800/80 mt-4 flex items-center justify-between">
                <span className="text-lg font-extrabold text-white font-mono">${p.price.toFixed(2)}</span>
                <button
                  onClick={() => addToCart(p)}
                  className="bg-neutral-800 hover:bg-cyan-500 hover:text-neutral-950 text-white font-bold text-xs px-3 py-1.5 rounded-xl transition-all border border-neutral-700 hover:border-cyan-400 flex items-center space-x-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Cart Drawer */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-end">
          <div className="bg-neutral-900 border-l border-neutral-800 w-full max-w-md h-full flex flex-col justify-between p-6">
            <div className="space-y-4 overflow-y-auto">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                  <ShoppingCart className="w-5 h-5 text-cyan-400" />
                  <span>Your Shopping Cart</span>
                </h3>
                <button onClick={() => setCartOpen(false)} className="text-neutral-400 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {cart.length === 0 ? (
                <div className="text-center py-12 text-neutral-500 text-xs">
                  Your cart is empty. Add products from the store!
                </div>
              ) : (
                <div className="space-y-3">
                  {cart.map((item) => (
                    <div
                      key={item.product.id}
                      className="bg-neutral-950 p-3 rounded-xl border border-neutral-800 flex items-center justify-between text-xs"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{item.product.image}</span>
                        <div>
                          <div className="font-bold text-white">{item.product.name}</div>
                          <div className="text-cyan-400 font-mono">${item.product.price.toFixed(2)}</div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 bg-neutral-900 border border-neutral-800 rounded-lg p-1">
                        <button
                          onClick={() => updateQuantity(item.product.id, -1)}
                          className="p-1 hover:bg-neutral-800 rounded text-neutral-400"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-mono text-white font-bold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, 1)}
                          className="p-1 hover:bg-neutral-800 rounded text-neutral-400"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="border-t border-neutral-800 pt-4 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-400">Total Amount</span>
                  <span className="text-xl font-bold font-mono text-white">${cartTotal.toFixed(2)}</span>
                </div>

                {checkoutDone ? (
                  <div className="bg-emerald-500/10 border border-emerald-500/30 p-3 rounded-xl text-center text-xs text-emerald-400 font-mono font-bold flex items-center justify-center space-x-2">
                    <Check className="w-4 h-4" />
                    <span>Order Placed Successfully!</span>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      setCheckoutDone(true);
                      setTimeout(() => {
                        setCart([]);
                        setCheckoutDone(false);
                        setCartOpen(false);
                      }, 2500);
                    }}
                    className="w-full bg-cyan-500 hover:bg-cyan-400 text-neutral-950 font-bold py-3 rounded-xl transition-all shadow-lg shadow-cyan-500/20 text-xs flex items-center justify-center space-x-2"
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>Complete Order</span>
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
