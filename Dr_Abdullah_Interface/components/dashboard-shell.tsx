"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Bell, BrainCircuit, ChevronLeft, ClipboardPlus, FileClock, HelpCircle, House, Info, LogOut, Menu, Moon, Search, Sun, X } from "lucide-react";
import { useState } from "react";
import { Footer } from "./footer";
import { Logo } from "./logo";
import { useTheme } from "./theme-provider";

const nav = [
  { href: "/dashboard", label: "Overview", icon: House },
  { href: "/prediction/new", label: "New prediction", icon: ClipboardPlus },
  { href: "/history", label: "Prediction history", icon: FileClock },
  { href: "/explanations", label: "AI explanation", icon: BrainCircuit },
  { href: "/about", label: "About the model", icon: Info },
];

function NavLinks({ onSelect }: { onSelect?: () => void }) {
  const pathname = usePathname();
  return <nav className="space-y-1.5">
    <p className="px-3 pb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">Clinical workspace</p>
    {nav.map(({ href, label, icon: Icon }) => {
      const active = pathname === href || (href === "/prediction/new" && pathname === "/results");
      return <Link key={href} href={href} onClick={onSelect} className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${active ? "bg-brand-50 text-brand-700 dark:bg-brand-900/40 dark:text-sky-300" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"}`}>
        <Icon size={18} className={active ? "text-brand-600 dark:text-sky-400" : "text-slate-400 group-hover:text-brand-600"} />{label}
      </Link>;
    })}
  </nav>;
}

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const { dark, toggle } = useTheme();
  return <div className="min-h-screen bg-slate-50 dark:bg-[#0b1322]">
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col border-r border-slate-200 bg-white px-4 py-5 dark:border-slate-800 dark:bg-slate-950 lg:flex">
      <Logo /><div className="mt-10"><NavLinks /></div>
      <div className="mt-auto rounded-2xl bg-brand-50 p-4 dark:bg-brand-950/50"><HelpCircle className="text-brand-600 dark:text-sky-400" size={20} /><p className="mt-3 text-sm font-semibold text-slate-800 dark:text-white">Need assistance?</p><p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400">Review the model guide and clinical support resources.</p><button className="mt-3 text-xs font-bold text-brand-700 dark:text-sky-400">Open support center</button></div>
      <Link href="/login" className="mt-4 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"><LogOut size={17} />Sign out</Link>
    </aside>
    <AnimatePresence>{open && <><motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)} className="fixed inset-0 z-40 bg-slate-950/30 backdrop-blur-sm lg:hidden" /><motion.aside initial={{ x: -280 }} animate={{ x: 0 }} exit={{ x: -280 }} transition={{ type: "spring", stiffness: 320, damping: 30 }} className="fixed inset-y-0 left-0 z-50 flex w-72 flex-col bg-white px-4 py-5 shadow-2xl dark:bg-slate-950 lg:hidden"><div className="flex items-center justify-between"><Logo /><button onClick={() => setOpen(false)} className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"><X size={20} /></button></div><div className="mt-10"><NavLinks onSelect={() => setOpen(false)} /></div></motion.aside></>}</AnimatePresence>
    <div className="lg:pl-64"><header className="sticky top-0 z-20 flex h-[73px] items-center justify-between border-b border-slate-200/80 bg-white/85 px-4 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80 sm:px-7"><div className="flex items-center gap-3"><button onClick={() => setOpen(true)} className="rounded-xl p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 lg:hidden"><Menu size={21} /></button><div className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 sm:flex dark:border-slate-800 dark:bg-slate-900"><Search size={16} className="text-slate-400" /><input aria-label="Search" placeholder="Search records..." className="w-40 bg-transparent text-sm outline-none placeholder:text-slate-400 md:w-56 dark:text-white" /><span className="rounded border border-slate-200 px-1.5 text-[10px] text-slate-400 dark:border-slate-700">⌘ K</span></div></div><div className="flex items-center gap-1.5 sm:gap-3"><button onClick={toggle} aria-label="Toggle color theme" className="rounded-xl p-2 text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800">{dark ? <Sun size={19} /> : <Moon size={19} />}</button><button aria-label="Notifications" className="relative rounded-xl p-2 text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"><Bell size={19} /><span className="absolute right-2 top-1.5 h-1.5 w-1.5 rounded-full bg-rose-500" /></button><div className="ml-1 flex items-center gap-2 border-l border-slate-200 pl-3 dark:border-slate-800"><span className="grid h-9 w-9 place-items-center rounded-full bg-brand-100 text-xs font-bold text-brand-700 dark:bg-brand-900 dark:text-sky-300">DA</span><div className="hidden md:block"><p className="text-xs font-bold text-slate-800 dark:text-white">Dr. Abdullah</p><p className="text-[10px] text-slate-500">Clinical user</p></div><ChevronLeft className="hidden rotate-[270deg] text-slate-400 md:block" size={15} /></div></div></header><main className="min-h-[calc(100vh-73px)] px-4 py-7 sm:px-7 lg:px-9">{children}</main><Footer className="mx-4 lg:mx-9" /></div>
  </div>;
}
