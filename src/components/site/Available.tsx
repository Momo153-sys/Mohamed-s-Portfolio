export function AvailableBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
      </span>
      <span className="text-muted-foreground">Available for new opportunities</span>
    </div>
  );
}
