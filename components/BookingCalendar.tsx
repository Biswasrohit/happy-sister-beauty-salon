"use client";

import { motion } from "framer-motion";

interface BookingCalendarProps {
  selectedDate: string;
  onSelectDate: (date: string) => void;
}

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number): number {
  return new Date(year, month, 1).getDay();
}

export function BookingCalendar({
  selectedDate,
  onSelectDate,
}: BookingCalendarProps) {
  const today = new Date();
  const viewYear = today.getFullYear();
  const viewMonth = today.getMonth();

  return (
    <div>
      <h3 className="mb-4 font-serif text-xl text-charcoal">Select a Date</h3>
      <CalendarMonth
        year={viewYear}
        month={viewMonth}
        selectedDate={selectedDate}
        onSelectDate={onSelectDate}
        today={today}
      />
      <CalendarMonth
        year={viewMonth === 11 ? viewYear + 1 : viewYear}
        month={viewMonth === 11 ? 0 : viewMonth + 1}
        selectedDate={selectedDate}
        onSelectDate={onSelectDate}
        today={today}
      />
    </div>
  );
}

function CalendarMonth({
  year,
  month,
  selectedDate,
  onSelectDate,
  today,
}: {
  year: number;
  month: number;
  selectedDate: string;
  onSelectDate: (date: string) => void;
  today: Date;
}) {
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);
  const monthName = new Date(year, month).toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const days: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let d = 1; d <= daysInMonth; d++) days.push(d);

  const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

  return (
    <div className="mb-6">
      <h4 className="mb-3 text-center font-medium text-charcoal">
        {monthName}
      </h4>
      <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-warm-gray">
        {dayNames.map((d) => (
          <div key={d} className="py-1">
            {d}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, i) => {
          if (day === null) return <div key={`empty-${i}`} />;

          const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
          const isPast = dateStr < todayStr;
          const isSelected = dateStr === selectedDate;
          const isToday = dateStr === todayStr;

          return (
            <motion.button
              key={dateStr}
              disabled={isPast}
              onClick={() => onSelectDate(dateStr)}
              whileHover={!isPast ? { scale: 1.1 } : undefined}
              whileTap={!isPast ? { scale: 0.95 } : undefined}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className={`rounded-lg py-2 text-sm focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-coral ${
                isPast
                  ? "cursor-not-allowed text-cream-dark"
                  : isSelected
                    ? "bg-coral font-semibold text-white shadow-[0_2px_8px_rgba(232,116,97,0.3)]"
                    : isToday
                      ? "border border-coral bg-coral/8 font-semibold text-coral"
                      : "text-charcoal hover:bg-blush/50"
              }`}
            >
              {day}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
