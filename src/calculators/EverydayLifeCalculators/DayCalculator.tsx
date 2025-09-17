"use client";
import React, { useState } from "react";
import { CalendarDays } from "lucide-react";

export default function DayCalculator() {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [date1, setDate1] = useState<string>("");
  const [date2, setDate2] = useState<string>("");
  const [result, setResult] = useState<string | null>(null);

  // Find day of the week
  const handleDayOfWeek = () => {
    if (!selectedDate) {
      setResult("Please select a date.");
      return;
    }
    const date = new Date(selectedDate);
    const day = date.toLocaleDateString("en-US", { weekday: "long" });
    setResult(`${selectedDate} is a ${day}.`);
  };

  // Difference between two dates
  const handleDateDifference = () => {
    if (!date1 || !date2) {
      setResult("Please select both dates.");
      return;
    }
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const diffTime = Math.abs(d2.getTime() - d1.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setResult(`The difference between ${date1} and ${date2} is ${diffDays} day(s).`);
  };

  const handleClear = () => {
    setSelectedDate("");
    setDate1("");
    setDate2("");
    setResult(null);
  };

  return (
    <div className="min-h-[92vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-sm rounded-2xl shadow-md p-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl flex items-center justify-center">
            <CalendarDays className="h-6 w-6 text-cyan-600" />
          </div>
          <h1 className="text-2xl font-semibold text-slate-800">Day Calculator</h1>
        </div>

        {/* Day of Week */}
        <div className="mb-4">
          <label className="block text-slate-700 mb-2 font-medium">Select Date</label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 mb-2"
          />
          <button
            onClick={handleDayOfWeek}
            className="w-full py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl shadow hover:from-cyan-700 hover:to-blue-700 transition"
          >
            Find Day of the Week
          </button>
        </div>

        <hr className="my-4 border-slate-300" />

        {/* Date Difference */}
        <div className="mb-4">
          <label className="block text-slate-700 mb-2 font-medium">Date 1</label>
          <input
            type="date"
            value={date1}
            onChange={(e) => setDate1(e.target.value)}
            className="w-full p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 mb-2"
          />
          <label className="block text-slate-700 mb-2 font-medium">Date 2</label>
          <input
            type="date"
            value={date2}
            onChange={(e) => setDate2(e.target.value)}
            className="w-full p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 mb-2"
          />
          <button
            onClick={handleDateDifference}
            className="w-full py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl shadow hover:from-green-700 hover:to-emerald-700 transition"
          >
            Calculate Difference
          </button>
        </div>

        {/* Result */}
        {result && (
          <div className="p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl border border-cyan-200 text-center font-medium text-slate-700 mb-3">
            {result}
          </div>
        )}

        {/* Clear */}
        <button
          onClick={handleClear}
          className="w-full py-3 bg-red-500 text-white rounded-xl shadow hover:bg-red-600 transition"
        >
          Clear
        </button>
      </div>
    </div>
  );
}
