"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookingCalendar } from "./BookingCalendar";
import { services } from "@/lib/services";
import type { BookingData } from "@/lib/types";

const timeSlots: string[] = [];
for (let h = 9; h < 19; h++) {
  for (let m = 0; m < 60; m += 30) {
    if (h === 19 && m > 0) break;
    const hour = h > 12 ? h - 12 : h;
    const ampm = h >= 12 ? "PM" : "AM";
    const minutes = m === 0 ? "00" : "30";
    timeSlots.push(`${hour}:${minutes} ${ampm}`);
  }
}

const stepVariants = {
  enter: { opacity: 0, x: 40 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -40 },
};

export function BookingForm() {
  const [step, setStep] = useState<"date" | "time" | "details" | "confirmed">(
    "date"
  );
  const [booking, setBooking] = useState<BookingData>({
    date: "",
    time: "",
    serviceId: "",
    name: "",
    phone: "",
    email: "",
  });

  const selectedService = services.find((s) => s.id === booking.serviceId);

  function handleDateSelect(date: string) {
    setBooking({ ...booking, date });
    setStep("time");
  }

  function handleTimeSelect(time: string) {
    setBooking({ ...booking, time });
    setStep("details");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStep("confirmed");
  }

  if (step === "confirmed") {
    const dateObj = new Date(booking.date + "T12:00:00");
    const formattedDate = dateObj.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
        className="glass-card rounded-2xl p-8 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.2 }}
          className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-forest/10"
        >
          <svg
            className="h-8 w-8 text-forest"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </motion.div>
        <h3 className="mb-2 font-serif text-2xl text-charcoal">
          Booking Confirmed!
        </h3>
        <p className="mb-6 text-warm-gray">
          Thank you, {booking.name}! Here are your appointment details:
        </p>
        <div className="glass-green mx-auto max-w-sm space-y-2 rounded-xl p-6 text-left text-sm">
          <p>
            <span className="font-semibold text-charcoal">Service:</span>{" "}
            {selectedService?.name}
          </p>
          <p>
            <span className="font-semibold text-charcoal">Date:</span>{" "}
            {formattedDate}
          </p>
          <p>
            <span className="font-semibold text-charcoal">Time:</span>{" "}
            {booking.time}
          </p>
          <p>
            <span className="font-semibold text-charcoal">Phone:</span>{" "}
            {booking.phone}
          </p>
          <p>
            <span className="font-semibold text-charcoal">Email:</span>{" "}
            {booking.email}
          </p>
        </div>
        <button
          onClick={() => {
            setBooking({
              date: "",
              time: "",
              serviceId: "",
              name: "",
              phone: "",
              email: "",
            });
            setStep("date");
          }}
          className="mt-6 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-white shadow-[0_2px_12px_rgba(27,67,50,0.25)] transition-shadow duration-200 hover:shadow-[0_4px_20px_rgba(27,67,50,0.35)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest active:scale-[0.97]"
        >
          Book Another Appointment
        </button>
      </motion.div>
    );
  }

  return (
    <div className="glass-card rounded-2xl p-6 md:p-8">
      {/* Progress steps */}
      <div className="mb-8 flex items-center justify-center gap-2">
        {(["date", "time", "details"] as const).map((s, i) => (
          <div key={s} className="flex items-center gap-2">
            <motion.div
              animate={{
                backgroundColor:
                  step === s
                    ? "#1B4332"
                    : ["date", "time", "details"].indexOf(step) > i
                      ? "rgba(27,67,50,0.15)"
                      : "#F0EDE5",
                color:
                  step === s
                    ? "#FEFCF6"
                    : ["date", "time", "details"].indexOf(step) > i
                      ? "#1B4332"
                      : "#7C7C7C",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold"
            >
              {i + 1}
            </motion.div>
            {i < 2 && <div className="h-0.5 w-8 bg-cream-dark" />}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {step === "date" && (
          <motion.div
            key="date"
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
          >
            <BookingCalendar
              selectedDate={booking.date}
              onSelectDate={handleDateSelect}
            />
          </motion.div>
        )}

        {step === "time" && (
          <motion.div
            key="time"
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
          >
            <button
              onClick={() => setStep("date")}
              className="mb-4 text-sm text-forest hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
            >
              &larr; Change date
            </button>
            <h3 className="mb-4 font-serif text-xl text-charcoal">
              Select a Time
            </h3>
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
              {timeSlots.map((time, i) => (
                <motion.button
                  key={time}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.02, type: "spring", stiffness: 300, damping: 24 }}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => handleTimeSelect(time)}
                  className={`rounded-xl border px-3 py-2.5 text-sm focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-forest ${
                    booking.time === time
                      ? "border-forest bg-forest text-white shadow-[0_2px_8px_rgba(27,67,50,0.25)]"
                      : "border-white/40 bg-white/40 text-charcoal hover:border-sage hover:bg-mint/30"
                  }`}
                >
                  {time}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {step === "details" && (
          <motion.div
            key="details"
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
          >
            <button
              onClick={() => setStep("time")}
              className="mb-4 text-sm text-forest hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
            >
              &larr; Change time
            </button>
            <h3 className="mb-4 font-serif text-xl text-charcoal">
              Your Details
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="service"
                  className="mb-1 block text-sm font-medium text-charcoal"
                >
                  Service
                </label>
                <select
                  id="service"
                  required
                  value={booking.serviceId}
                  onChange={(e) =>
                    setBooking({ ...booking, serviceId: e.target.value })
                  }
                  className="w-full rounded-xl border border-white/40 bg-white/50 px-4 py-3 text-sm text-charcoal outline-none backdrop-blur-sm focus:border-forest focus:ring-1 focus:ring-forest"
                >
                  <option value="">Choose a service...</option>
                  <optgroup label="Barber">
                    {services
                      .filter((s) => s.category === "barber")
                      .map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.name} - ${s.price} ({s.duration} min)
                        </option>
                      ))}
                  </optgroup>
                  <optgroup label="Beauty">
                    {services
                      .filter((s) => s.category === "beauty")
                      .map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.name} - ${s.price} ({s.duration} min)
                        </option>
                      ))}
                  </optgroup>
                </select>
              </div>

              {[
                { id: "name", label: "Full Name", type: "text", placeholder: "Your name", field: "name" as const },
                { id: "phone", label: "Phone Number", type: "tel", placeholder: "(555) 123-4567", field: "phone" as const },
                { id: "email", label: "Email", type: "email", placeholder: "you@example.com", field: "email" as const },
              ].map((input) => (
                <div key={input.id}>
                  <label
                    htmlFor={input.id}
                    className="mb-1 block text-sm font-medium text-charcoal"
                  >
                    {input.label}
                  </label>
                  <input
                    id={input.id}
                    type={input.type}
                    required
                    value={booking[input.field]}
                    onChange={(e) =>
                      setBooking({ ...booking, [input.field]: e.target.value })
                    }
                    className="w-full rounded-xl border border-white/40 bg-white/50 px-4 py-3 text-sm text-charcoal outline-none backdrop-blur-sm focus:border-forest focus:ring-1 focus:ring-forest"
                    placeholder={input.placeholder}
                  />
                </div>
              ))}

              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full rounded-full bg-forest py-3.5 text-sm font-semibold text-white shadow-[0_2px_12px_rgba(27,67,50,0.25)] transition-shadow duration-200 hover:shadow-[0_4px_20px_rgba(27,67,50,0.35)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
              >
                Confirm Booking
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
