import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export function PageHeading({ eyebrow, title, description, action }: { eyebrow?: string; title: string; description: string; action?: React.ReactNode }) {
  return <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div>{eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}<h1 className="page-title">{title}</h1><p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">{description}</p></div>{action}</div>;
}

export function StatCard({ label, value, detail, icon: Icon, tint = "blue" }: { label: string; value: string; detail: string; icon: LucideIcon; tint?: "blue" | "green" | "purple" | "amber" }) {
  const tints = { blue: "bg-brand-50 text-brand-600 dark:bg-brand-900/40 dark:text-sky-400", green: "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400", purple: "bg-violet-50 text-violet-600 dark:bg-violet-900/30 dark:text-violet-400", amber: "bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400" };
  return <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="surface p-5"><div className="flex items-start justify-between"><div><p className="text-sm font-medium text-slate-500 dark:text-slate-400">{label}</p><p className="mt-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">{value}</p></div><span className={`grid h-10 w-10 place-items-center rounded-xl ${tints[tint]}`}><Icon size={20} /></span></div><p className="mt-3 text-xs text-slate-400 dark:text-slate-500">{detail}</p></motion.div>;
}
