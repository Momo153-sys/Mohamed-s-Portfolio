import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(10, "Message should be at least 10 characters").max(2000),
});

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [busy, setBusy] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: data.get("name"),
      email: data.get("email"),
      message: data.get("message"),
    });
    if (!parsed.success) {
      const fe: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (fe[i.path[0] as string] = i.message));
      setErrors(fe);
      return;
    }
    setErrors({});
    setBusy(true);
    setTimeout(() => {
      setBusy(false);
      setStatus("sent");
      e.currentTarget?.reset?.();
    }, 700);
  }

  return (
    <form onSubmit={onSubmit} className="glass rounded-2xl p-6 md:p-8 space-y-5 max-w-2xl">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="text-xs text-muted-foreground">Name</label>
          <input
            name="name"
            className="mt-1 w-full px-3 py-2.5 rounded-lg bg-background/40 border border-input focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="Lionel Messi"
          />
          {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
        </div>
        <div>
          <label className="text-xs text-muted-foreground">Email</label>
          <input
            name="email"
            type="email"
            className="mt-1 w-full px-3 py-2.5 rounded-lg bg-background/40 border border-input focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="thegoat@gmail.com"
          />
          {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
        </div>
      </div>
      <div>
        <label className="text-xs text-muted-foreground">Message</label>
        <textarea
          name="message"
          rows={5}
          className="mt-1 w-full px-3 py-2.5 rounded-lg bg-background/40 border border-input focus:outline-none focus:ring-2 focus:ring-ring resize-none"
          placeholder="Tell me about the role, team or project…"
        />
        {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
      </div>
      <div className="flex items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          Or email me at <a className="text-primary hover:underline" href="mailto:mohameddoum2000@gmail.com">mohameddoum2000@gmail.com</a>
        </p>
        <button
          disabled={busy}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all ring-glow disabled:opacity-60"
        >
          {status === "sent" ? <CheckCircle2 className="h-4 w-4" /> : <Send className="h-4 w-4" />}
          {status === "sent" ? "Sent" : busy ? "Sending…" : "Send message"}
        </button>
      </div>
    </form>
  );
}
