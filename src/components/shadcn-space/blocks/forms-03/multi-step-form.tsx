"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import {
  Check,
  ChevronRight,
  ChevronLeft,
  User,
  MessageSquare,
  Rocket,
  Mail,
  Phone,
  PenTool,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Field, FieldLabel } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const steps = [
  { id: 1, title: "You", icon: User, description: "Basic details" },
  {
    id: 2,
    title: "Training",
    icon: MessageSquare,
    description: "Personal info",
  },
  { id: 3, title: "Review", icon: Rocket, description: "Review and send" },
];

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ApplicationFields = {
  name: string;
  email: string;
  phone: string;
  training: string;
};

type FieldErrors = Partial<Record<"name" | "email" | "phone", string>>;

const emptyFields: ApplicationFields = {
  name: "",
  email: "",
  phone: "",
  training: "",
};

function validateStep(step: number, fields: ApplicationFields): FieldErrors {
  const errors: FieldErrors = {};
  if (step === 1) {
    if (!fields.name.trim()) errors.name = "Enter your name.";
    if (!EMAIL.test(fields.email.trim())) errors.email = "Enter a valid email.";
  }
  if (step === 2 && !fields.phone.trim()) {
    errors.phone = "Enter a phone number.";
  }
  return errors;
}

const inputClass =
  "h-11 min-h-11 rounded-none border-white/15 bg-[#111111] pl-10 text-base text-[#F3EEE7] placeholder:text-[#F3EEE7]/40 md:text-base focus-visible:ring-[#F3EEE7]/25";

function Forms03() {
  const reduceMotion = useReducedMotion();
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");
  const [formData, setFormData] = useState<ApplicationFields>(emptyFields);
  const [errors, setErrors] = useState<FieldErrors>({});

  const progress = (currentStep / steps.length) * 100;

  const nextStep = () => {
    const nextErrors = validateStep(currentStep, formData);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    if (currentStep < steps.length) {
      setDirection(1);
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setErrors({});
      setDirection(-1);
      setCurrentStep((prev) => prev - 1);
    }
  };

  const sendApplication = async () => {
    const nextErrors = {
      ...validateStep(1, formData),
      ...validateStep(2, formData),
    };
    setErrors(nextErrors);
    setSendError("");
    if (Object.keys(nextErrors).length > 0) {
      if (nextErrors.name || nextErrors.email) setCurrentStep(1);
      else setCurrentStep(2);
      return;
    }
    setSending(true);
    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          training: formData.training.trim(),
        }),
      });
      if (!response.ok) {
        setSendError("We could not send that. Please try again.");
        return;
      }
      setSubmitted(true);
    } catch {
      setSendError("We could not send that. Please try again.");
    } finally {
      setSending(false);
    }
  };

  const stepVariants = {
    initial: (dir: number) => ({
      x: reduceMotion ? 0 : dir > 0 ? 20 : -20,
      opacity: reduceMotion ? 1 : 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: reduceMotion ? 0 : 0.4, ease: [0.23, 1, 0.32, 1] as const },
    },
    exit: (dir: number) => ({
      x: reduceMotion ? 0 : dir > 0 ? -20 : 20,
      opacity: reduceMotion ? 1 : 0,
      transition: { duration: reduceMotion ? 0 : 0.3, ease: "easeInOut" as const },
    }),
  };

  return (
    <section
      className="flex w-full items-center justify-center font-sans text-[#F3EEE7]"
      style={{ fontFamily: "'Satoshi', sans-serif" }}
      aria-label="Membership application"
    >
      <div className="mx-auto w-full max-w-2xl">
        <form
          className="flex flex-col gap-6"
          onSubmit={(event) => {
            event.preventDefault();
            if (currentStep < steps.length) nextStep();
          }}
        >
          <div className="relative space-y-6">
            <div className="relative flex justify-between">
              <div className="absolute top-8 right-8 left-8 z-0 h-0.5 bg-white/15">
                <div
                  className="h-full bg-[#F3EEE7] transition-all duration-500"
                  style={{
                    width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
                  }}
                />
              </div>
              {steps.map((step) => {
                const Icon = step.icon;
                const isActive = currentStep === step.id;
                const isCompleted = currentStep > step.id || (submitted && step.id === 3);

                return (
                  <div
                    key={step.id}
                    className="relative flex flex-col items-center"
                  >
                    <div className="z-10 bg-[#111111] p-3">
                      <div
                        className={cn(
                          "z-10 flex size-11 items-center justify-center border border-white/15 bg-[#111111] text-[#F3EEE7] transition-all duration-500",
                          isActive && "ring-8 ring-[#F3EEE7]/10",
                          isCompleted && "border-[#0A3C2E] bg-[#0A3C2E] text-[#F3EEE7]",
                        )}
                      >
                        {isCompleted ? (
                          <Check className="size-4" />
                        ) : (
                          <Icon className="size-4" />
                        )}
                      </div>
                    </div>
                    <div className="mt-3 text-center">
                      <p
                        className={cn(
                          "text-xs font-bold tracking-[0.16em] uppercase transition-colors duration-300",
                          isActive ? "text-[#F3EEE7]" : "text-[#F3EEE7]/45",
                        )}
                      >
                        {step.title}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <Card className="relative gap-6 overflow-hidden rounded-none border-white/10 bg-[#181818] pt-6 pb-0 text-[#F3EEE7] shadow-none">
            <div className="px-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={submitted ? "sent" : currentStep}
                  initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : -10 }}
                  transition={{ duration: reduceMotion ? 0 : 0.2 }}
                >
                  <h3 className="text-xl font-bold tracking-tight text-[#F3EEE7] sm:text-2xl">
                    {submitted && "We'll be in touch"}
                    {!submitted && currentStep === 1 && "Your details"}
                    {!submitted && currentStep === 2 && "How you want to train"}
                    {!submitted && currentStep === 3 && "Review your application"}
                  </h3>
                  <p className="text-base text-[#F3EEE7]/70">
                    {submitted && "Someone from the club will be in contact with you."}
                    {!submitted &&
                      currentStep === 1 &&
                      "Name and a way to reach you."}
                    {!submitted &&
                      currentStep === 2 &&
                      "A phone number, and what you want from the work."}
                    {!submitted &&
                      currentStep === 3 &&
                      "Make sure everything looks correct before sending."}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {submitted ? null : (
            <CardContent className="px-6">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentStep}
                  custom={direction}
                  variants={stepVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="flex w-full flex-col gap-6"
                  aria-live="polite"
                >
                  {currentStep === 1 && (
                    <div className="space-y-4">
                      <Field>
                        <FieldLabel
                          htmlFor="name"
                          className="text-base font-semibold text-[#F3EEE7]"
                        >
                          Name
                        </FieldLabel>
                        <div className="relative">
                          <User className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-[#F3EEE7]/55" />
                          <Input
                            id="name"
                            name="name"
                            autoComplete="name"
                            placeholder="Your name"
                            value={formData.name}
                            aria-invalid={errors.name ? true : undefined}
                            aria-describedby={errors.name ? "name-error" : undefined}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            className={inputClass}
                          />
                        </div>
                        {errors.name ? (
                          <p id="name-error" role="alert" className="text-sm text-[#ffb4b4]">
                            {errors.name}
                          </p>
                        ) : null}
                      </Field>
                      <Field>
                        <FieldLabel
                          htmlFor="email"
                          className="text-base font-semibold text-[#F3EEE7]"
                        >
                          Email
                        </FieldLabel>
                        <div className="relative">
                          <Mail className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-[#F3EEE7]/55" />
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            inputMode="email"
                            autoComplete="email"
                            placeholder="you@email.com"
                            value={formData.email}
                            aria-invalid={errors.email ? true : undefined}
                            aria-describedby={errors.email ? "email-error" : undefined}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                            className={inputClass}
                          />
                        </div>
                        {errors.email ? (
                          <p id="email-error" role="alert" className="text-sm text-[#ffb4b4]">
                            {errors.email}
                          </p>
                        ) : null}
                      </Field>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="space-y-4">
                      <Field>
                        <FieldLabel
                          htmlFor="phone"
                          className="text-base font-semibold text-[#F3EEE7]"
                        >
                          Phone
                        </FieldLabel>
                        <div className="relative">
                          <Phone className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-[#F3EEE7]/55" />
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            inputMode="tel"
                            autoComplete="tel"
                            placeholder="(614) 555-0100"
                            value={formData.phone}
                            aria-invalid={errors.phone ? true : undefined}
                            aria-describedby={errors.phone ? "phone-error" : undefined}
                            onChange={(e) =>
                              setFormData({ ...formData, phone: e.target.value })
                            }
                            className={inputClass}
                          />
                        </div>
                        {errors.phone ? (
                          <p id="phone-error" role="alert" className="text-sm text-[#ffb4b4]">
                            {errors.phone}
                          </p>
                        ) : null}
                      </Field>
                      <Field>
                        <FieldLabel
                          htmlFor="training"
                          className="text-base font-semibold text-[#F3EEE7]"
                        >
                          What do you want from training?
                        </FieldLabel>
                        <div className="relative">
                          <PenTool className="absolute top-3 left-3 size-4 text-[#F3EEE7]/55" />
                          <Textarea
                            id="training"
                            name="training"
                            placeholder="A short note on your goals, schedule, or experience."
                            className="min-h-[120px] resize-none rounded-none border-white/15 bg-[#111111] pt-2.5 pl-10 text-base text-[#F3EEE7] placeholder:text-[#F3EEE7]/40 md:text-base focus-visible:ring-[#F3EEE7]/25"
                            value={formData.training}
                            onChange={(e) =>
                              setFormData({ ...formData, training: e.target.value })
                            }
                          />
                        </div>
                      </Field>
                    </div>
                  )}

                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <div className="relative overflow-hidden border border-white/15 bg-[#111111] p-6">
                        <div className="relative z-10 space-y-6">
                          <div className="flex items-center justify-between gap-3">
                            <div className="flex items-center gap-2">
                              <div className="size-2 bg-[#F3EEE7]" />
                              <span className="text-xs font-bold tracking-[0.16em] text-[#F3EEE7]/70 uppercase">
                                Final review
                              </span>
                            </div>
                            <Badge
                              variant="secondary"
                              className="rounded-none border-white/15 bg-[#181818] text-[#F3EEE7]"
                            >
                              Ready to send
                            </Badge>
                          </div>

                          <div className="grid gap-2">
                            <ReviewRow icon={User} label="Name" value={formData.name.trim() || "—"} />
                            <Separator className="bg-white/10" />
                            <ReviewRow icon={Mail} label="Email" value={formData.email.trim() || "—"} />
                            <Separator className="bg-white/10" />
                            <ReviewRow icon={Phone} label="Phone" value={formData.phone.trim() || "—"} />
                            <Separator className="bg-white/10" />
                            <ReviewRow
                              icon={PenTool}
                              label="Training"
                              value={formData.training.trim() || "—"}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 border border-dashed border-white/15 bg-white/5 p-4">
                        <div className="flex size-11 shrink-0 items-center justify-center bg-[#0A3C2E]">
                          <Rocket className="size-5 text-[#F3EEE7]" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-bold text-[#F3EEE7]">Almost there</p>
                          <p className="text-sm leading-relaxed text-[#F3EEE7]/70">
                            Send your application. Someone from the club will be in contact with you.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </CardContent>
            )}

            {submitted ? null : (
            <div className="flex items-center justify-between gap-4 border-t border-white/10 bg-[#111111] p-6">
              <button
                type="button"
                onClick={prevStep}
                disabled={currentStep === 1 || sending}
                className="inline-flex h-11 min-h-11 items-center px-6 text-base font-medium text-[#F3EEE7] transition-opacity disabled:opacity-40"
              >
                <ChevronLeft className="mr-2 size-4" /> Back
              </button>

              <div className="flex flex-col items-end gap-2">
                {sendError ? (
                  <p role="alert" className="text-sm text-[#ffb4b4]">
                    {sendError}
                  </p>
                ) : null}
                {currentStep < steps.length ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="inline-flex h-11 min-h-11 items-center bg-[#0A3C2E] px-6 text-base font-bold text-[#F3EEE7]"
                  >
                    Continue
                    <ChevronRight className="ml-2 size-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => void sendApplication()}
                    disabled={sending}
                    className="inline-flex h-11 min-h-11 items-center bg-[#0A3C2E] px-6 text-base font-bold text-[#F3EEE7] disabled:opacity-60"
                  >
                    {sending ? "Sending" : "Send application"}
                  </button>
                )}
              </div>
            </div>
            )}
          </Card>

          {submitted ? null : (
          <Card className="rounded-none border-white/10 bg-[#181818] py-6 text-[#F3EEE7] shadow-none">
            <CardContent className="flex flex-col gap-2 px-6">
              <div className="flex items-end justify-between">
                <div className="space-y-1">
                  <Badge
                    variant="outline"
                    className="rounded-none border-white/15 bg-[#111111] px-3 py-1 text-[#F3EEE7]"
                  >
                    Step {currentStep} of {steps.length}
                  </Badge>
                  <h2 className="text-xl font-bold tracking-tight text-[#F3EEE7]">
                    Complete your application
                  </h2>
                </div>
                <div className="hidden text-right sm:block">
                  <p className="text-sm font-medium text-[#F3EEE7]/55">Progress</p>
                  <p className="text-2xl font-bold text-[#F3EEE7]">{Math.round(progress)}%</p>
                </div>
              </div>
              <Progress
                value={progress}
                className="h-1 rounded-none bg-white/10 **:data-[slot=progress-indicator]:bg-[#F3EEE7]"
              />
            </CardContent>
          </Card>
          )}
        </form>
      </div>
    </section>
  );
}

function ReviewRow({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof User;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start justify-between gap-4 py-2">
      <span className="flex items-center gap-2 text-sm font-medium text-[#F3EEE7]/60">
        <Icon className="size-3.5 text-[#F3EEE7]/60" />
        {label}
      </span>
      <span className="max-w-[60%] text-right text-sm font-semibold break-words text-[#F3EEE7]">
        {value}
      </span>
    </div>
  );
}

export { Forms03 };
export default Forms03;
