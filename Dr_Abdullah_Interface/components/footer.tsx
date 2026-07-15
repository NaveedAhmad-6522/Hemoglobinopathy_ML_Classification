export function Footer({ className = "" }: { className?: string }) {
  return <footer className={`border-t border-slate-200/80 py-5 text-center text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400 ${className}`}>
    Developed by <span className="font-semibold text-slate-700 dark:text-slate-200">Engr. Naveed Ahmad</span> &amp; <span className="font-semibold text-slate-700 dark:text-slate-200">Dr. Abdullah</span>
  </footer>;
}
