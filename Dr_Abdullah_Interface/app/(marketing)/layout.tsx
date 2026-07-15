import { Footer } from "@/components/footer";
import { Logo } from "@/components/logo";
import Link from "next/link";

export default function MarketingLayout({ children }: { children: React.ReactNode }) { return <div className="min-h-screen bg-white dark:bg-[#0b1322]"><header className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8"><Logo /><nav className="hidden items-center gap-7 text-sm font-semibold text-slate-600 md:flex dark:text-slate-300"><a href="#features" className="hover:text-brand-600">Platform</a><a href="#workflow" className="hover:text-brand-600">Workflow</a><a href="#about" className="hover:text-brand-600">About</a></nav><Link href="/login" className="btn-primary px-4 py-2">Sign in</Link></header>{children}<Footer className="mx-auto max-w-7xl px-5 sm:px-8" /></div>; }
