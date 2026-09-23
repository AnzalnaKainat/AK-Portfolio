"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Loader2, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const contactSchema = z.object({
  name: z.string().min(2, "Tell me your name."),
  email: z.string().email("That email doesn’t look right."),
  budget: z.string().optional(),
  message: z.string().min(10, "A few more details would help."),
});

type ContactValues = z.infer<typeof contactSchema>;

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = React.useState<Status>("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (values: ContactValues) => {
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" error={errors.name?.message}>
          <input
            {...register("name")}
            type="text"
            placeholder="Your name"
            className={inputClass}
          />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input
            {...register("email")}
            type="email"
            placeholder="you@company.com"
            className={inputClass}
          />
        </Field>
      </div>

      <Field label="Budget (optional)">
        <select {...register("budget")} className={cn(inputClass, "appearance-none")}>
          <option value="">Prefer not to say</option>
          <option value="< $2k">Under $2k</option>
          <option value="$2k – $10k">$2k – $10k</option>
          <option value="$10k+">$10k+</option>
          <option value="Full-time role">Full-time role</option>
        </select>
      </Field>

      <Field label="Message" error={errors.message?.message}>
        <textarea
          {...register("message")}
          rows={5}
          placeholder="What are you building, and how can I help?"
          className={cn(inputClass, "resize-none")}
        />
      </Field>

      <div className="flex items-center gap-4">
        <Button type="submit" disabled={status === "submitting"} size="lg">
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Sending
            </>
          ) : (
            <>
              Send message <Send className="h-4 w-4" />
            </>
          )}
        </Button>

        {status === "success" && (
          <motion.p
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-1.5 font-mono text-xs text-signal-green"
          >
            <CheckCircle2 className="h-4 w-4" /> Sent — I&apos;ll reply soon.
          </motion.p>
        )}
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-1.5 font-mono text-xs text-signal-rose"
          >
            <AlertCircle className="h-4 w-4" /> Something went wrong — email me directly instead.
          </motion.p>
        )}
      </div>
    </form>
  );
}

const inputClass =
  "w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-signal-blue/50";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-mono text-xs text-muted-foreground">
        {label}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs text-signal-rose">{error}</span>}
    </label>
  );
}
