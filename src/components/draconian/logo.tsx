export function DraconianLogo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      {/* shield */}
      <path
        d="M24 3 L41 10 V23 C41 34 33.5 42 24 45 C14.5 42 7 34 7 23 V10 Z"
        stroke="currentColor"
        strokeWidth="2.4"
        fill="rgba(79,163,232,0.10)"
        strokeLinejoin="round"
      />
      {/* aperture / lens */}
      <circle cx="24" cy="23" r="8.5" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="24" cy="23" r="3.2" fill="currentColor" />
      {/* aperture blades hint */}
      <path
        d="M24 14.5 V18 M31.6 18.7 L28.9 21 M31.6 27.3 L28.9 25 M24 31.5 V28 M16.4 27.3 L19.1 25 M16.4 18.7 L19.1 21"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Wordmark() {
  return (
    <span className="flex items-baseline gap-2">
      <span className="font-display text-xl font-bold tracking-tight text-foreground">
        Draconian
      </span>
      <span className="hidden text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground sm:inline">
        IP Security
      </span>
    </span>
  );
}
