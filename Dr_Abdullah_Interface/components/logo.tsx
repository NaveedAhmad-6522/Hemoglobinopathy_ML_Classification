import { Activity } from "lucide-react";

export function Logo({ dark = false }: { dark?: boolean }) {
  return <div className="flex items-center gap-2.5">
    <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-600 text-white shadow-lg shadow-brand-600/20"><Activity size={20} strokeWidth={2.4} /></span>
    <div className={`leading-none ${dark ? "text-white" : "text-ink dark:text-white"}`}>
      <p className="text-sm font-bold tracking-tight">HemaInsight</p>
      <p className={`mt-1 text-[9px] font-semibold uppercase tracking-[0.16em] ${dark ? "text-sky-200" : "text-brand-600 dark:text-sky-400"}`}>Clinical AI</p>
    </div>
  </div>;
}
