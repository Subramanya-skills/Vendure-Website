"use client";

import Link from "next/link";
import { ShoppingBag, DollarSign, Package, ArrowLeft, TrendingUp, Users, CheckCircle } from "lucide-react";

export default function VendureDashboardPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 px-6 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center space-x-3">
          <Link href="/" className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors">
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <h1 className="font-bold text-lg text-slate-900">Vendure Merchant Store Dashboard</h1>
            <p className="text-xs text-slate-500">Sales revenue, order fulfillment status & inventory analytics</p>
          </div>
        </div>

        <Link href="/" className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs px-4 py-2 rounded-xl transition-all shadow-md shadow-cyan-500/20">
          Storefront Portal
        </Link>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8 flex-1 w-full space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500 uppercase">Gross Revenue</span>
              <DollarSign className="w-5 h-5 text-emerald-500" />
            </div>
            <div className="text-3xl font-extrabold text-slate-900 font-mono">$48,920.00</div>
            <div className="text-xs text-emerald-600 font-mono flex items-center space-x-1">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>+24.2% monthly growth</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500 uppercase">Orders Completed</span>
              <ShoppingBag className="w-5 h-5 text-cyan-500" />
            </div>
            <div className="text-3xl font-extrabold text-slate-900 font-mono">1,124</div>
            <div className="text-xs text-cyan-600 font-mono">Fulfillment Rate: 99.4%</div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500 uppercase">Active Products</span>
              <Package className="w-5 h-5 text-amber-500" />
            </div>
            <div className="text-3xl font-extrabold text-slate-900 font-mono">148 SKUs</div>
            <div className="text-xs text-slate-500 font-mono">Vendure Headless Channel</div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500 uppercase">Registered Customers</span>
              <Users className="w-5 h-5 text-indigo-500" />
            </div>
            <div className="text-3xl font-extrabold text-slate-900 font-mono">3,890</div>
            <div className="text-xs text-indigo-600 font-mono">Repeat Purchasers: 42%</div>
          </div>
        </div>
      </main>
    </div>
  );
}
