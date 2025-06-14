import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import eventsData from "../data/events.json";

const CalendarGrid = () => {
  const [currentMonth, setCurrentMonth] = useState(dayjs());
  const [events, setEvents] = useState([]);

  const today = dayjs();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  useEffect(() => {
    setEvents(eventsData);
  }, []);

  const startDay = currentMonth.startOf("month").startOf("week");
  const endDay = currentMonth.endOf("month").endOf("week");

  let date = startDay.clone();
  const calendar = [];

  while (date.isBefore(endDay, "day")) {
    const week = [];
    for (let i = 0; i < 7; i++) {
      week.push(date.clone());
      date = date.add(1, "day");
    }
    calendar.push(week);
  }

  const getEventsForDay = (day) => {
    return events.filter((event) => dayjs(event.date).isSame(day, "day"));
  };

  return (
    <div className="p-4 min-h-screen bg-[#4169E1] text-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => setCurrentMonth(currentMonth.subtract(1, "month"))}
          className="text-sm bg-white text-[#45B5FF] px-3 py-1 rounded hover:bg-gray-200 font-semibold"
        >
          ← Prev
        </button>
        <h2 className="text-2xl font-bold">
          Sparrow <span className="text-white">X</span> -{" "}
          {currentMonth.format("MMMM YYYY")}
        </h2>
        <button
          onClick={() => setCurrentMonth(currentMonth.add(1, "month"))}
          className="text-sm bg-white text-[#45B5FF] px-3 py-1 rounded hover:bg-gray-200 font-semibold"
        >
          Next →
        </button>
      </div>

      {/* Today's Date */}
      <div className="text-center text-lg font-semibold mb-4">
        Today:{" "}
        <span className="underline decoration-white">
          {today.format("dddd, MMMM D, YYYY")}
        </span>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 text-center font-semibold text-white border-b border-white pb-2">
        {days.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      {/* Calendar */}
      {calendar.map((week, i) => (
        <div key={i} className="grid grid-cols-7 gap-2 mt-1">
          {week.map((day, idx) => {
            const dayEvents = getEventsForDay(day);
            const isToday = day.isSame(today, "day");

            return (
              <div
                key={idx}
                className={`p-2 h-36 rounded-xl text-sm relative transition-all duration-200 overflow-hidden cursor-pointer
                  ${day.month() === currentMonth.month()
                    ? "bg-white text-black"
                    : "bg-blue-300 text-gray-800 opacity-80"} 
                  hover:scale-105 hover:shadow-xl`}
              >
                <div
                  className={`w-10 h-10 mb-1 flex items-center justify-center mx-auto rounded-full font-bold transition-all
                    ${isToday
                      ? "bg-[#00A8FF] text-white shadow-md ring-2 ring-white"
                      : "bg-blue-100 text-black"}`}
                >
                  {day.date()}
                </div>

               {/* Events */}
<div className="mt-1 space-y-1">
  {dayEvents.map((event, idx) => (
    <div
      key={idx}
      className={`text-xs px-2 py-1 rounded-lg text-white truncate hover:scale-105 hover:bg-opacity-90 transition-transform
        ${idx % 2 === 0 ? "bg-blue-600" : "bg-blue-800"}`}
      title={event.title}
    >
      {event.title}
    </div>
  ))}
</div>

              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default CalendarGrid;
