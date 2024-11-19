"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isSameDay,
  isSameMonth,
  max,
  min,
  parseISO,
  startOfMonth,
  subMonths,
} from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Suspense, useEffect, useMemo, useState } from "react";
import CalendarLoading from "./CalenderLoading";

export function HomePageDBCopy() {
  const [slots, setSlots] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(undefined);
  const [doctorGender, setDoctorGender] = useState("all");
  const [minDate, setMinDate] = useState(null);
  const [maxDate, setMaxDate] = useState(null);

  useEffect(() => {
    async function fetchSlots() {
      const res = await fetch("/api/slots");
      const data = await res.json();
      setSlots(data);

      // Parse the date values properly to get min/max dates
      const dates = data.map((slot) => parseISO(slot.date));
      console.log(dates);

      // Set min and max dates
      const newMinDate = min(dates);
      const newMaxDate = max(dates);

      setMinDate(newMinDate);
      setMaxDate(newMaxDate);
    }
    fetchSlots();
  }, []);
  console.log(minDate, maxDate); // This should now correctly log min/max dates

  // Previous month navigation
  const handlePreviousMonth = () => {
    const previousMonth = subMonths(selectedMonth, 1);
    // Prevent navigating before the minDate
    if (minDate && previousMonth >= startOfMonth(minDate)) {
      setSelectedMonth(previousMonth);
    }
  };

  // Next month navigation
  const handleNextMonth = () => {
    const nextMonth = addMonths(selectedMonth, 1);
    // Prevent navigating beyond the maxDate
    if (maxDate && nextMonth <= endOfMonth(maxDate)) {
      setSelectedMonth(nextMonth);
    }
  };

  // const filteredSlots = useMemo(() => {
  //   const filtered = slots.filter(
  //     (slot) =>
  //       (!doctorGender ||
  //         slot.gender.toLowerCase() === doctorGender.toLowerCase()) &&
  //       isSameMonth(parseISO(slot.date), selectedMonth)
  //   );
  //   return filtered;
  // }, [doctorGender, selectedMonth, slots]);

  const filteredSlots = useMemo(() => {
    return slots.filter(
      (slot) =>
        (doctorGender === "all" ||
          slot.gender.toLowerCase() === doctorGender) &&
        isSameMonth(parseISO(slot.date), selectedMonth)
    );
  }, [doctorGender, selectedMonth, slots]);

  const availableDates = useMemo(() => {
    return filteredSlots.map((slot) => parseISO(slot.date));
  }, [filteredSlots]);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  // const handleGenderChange = (value) => {
  //   setDoctorGender(value === "all" ? undefined : value);
  //   setSelectedDate(undefined); // Reset selected date when changing gender
  // };

  const FilterTab = ({ active, label, onClick }) => (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
        active
          ? "bg-teal-500 text-white"
          : "bg-white text-gray-700 hover:bg-gray-50"
      }`}
    >
      {label}
    </button>
  );
  const renderCalendar = () => {
    const start = startOfMonth(selectedMonth);
    const end = endOfMonth(selectedMonth);
    const days = eachDayOfInterval({ start, end });
    const startDayOfWeek = getDay(start);

    const calendarDays = Array(42)
      .fill(null)
      .map((_, index) => {
        const dayIndex = index - startDayOfWeek;
        const date = new Date(start);
        date.setDate(date.getDate() + dayIndex);
        return date;
      });

    return (
      <div className="grid grid-cols-7 gap-1">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-center text-sm font-semibold p-2">
            {day}
          </div>
        ))}
        {calendarDays.map((date, index) => {
          const isCurrentMonth = isSameMonth(date, selectedMonth);
          const isAvailable = availableDates.some((d) => isSameDay(d, date));
          const hasMale = filteredSlots.some(
            (slot) =>
              isSameDay(parseISO(slot.date), date) &&
              slot.gender.toLowerCase() === "male"
          );
          const hasFemale = filteredSlots.some(
            (slot) =>
              isSameDay(parseISO(slot.date), date) &&
              slot.gender.toLowerCase() === "female"
          );

          return (
            <div
              key={index}
              className={`p-2 border text-center ${
                isCurrentMonth
                  ? isAvailable
                    ? "bg-green-100 cursor-pointer hover:bg-green-200"
                    : "bg-white"
                  : "bg-gray-100"
              }`}
              onClick={() =>
                isCurrentMonth && isAvailable && handleDateSelect(date)
              }
            >
              {isCurrentMonth && (
                <>
                  <div className="font-semibold">{format(date, "d")}</div>
                  <div className="text-xs text-gray-500">
                    {format(date, "EEE")}
                  </div>
                  <div className="flex justify-center space-x-1 mt-1">
                    {hasMale && (
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    )}
                    {hasFemale && (
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    )}
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <Suspense fallback={<CalendarLoading />}>
        <Card className="w-full container mx-auto border-none shadow-none ">
          <CardHeader className=" text-black text-center ">
            <CardTitle className="text-3xl font-bold">
              Book Your Appointments
            </CardTitle>
            <CardDescription className="text-black text-lg">
              Book your physiotherapy session with our expert doctors
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6  rounded-lg">
            <div className="flex justify-between items-center mb-6">
              <div className="flex gap-2">
                {["all", "male", "female"].map((gender) => (
                  <FilterTab
                    key={gender}
                    active={doctorGender === gender}
                    label={`${
                      gender === "all"
                        ? "All"
                        : gender === "male"
                        ? "Male"
                        : "Female"
                    } Dentors`}
                    onClick={() => setDoctorGender(gender)}
                  />
                ))}
              </div>
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handlePreviousMonth}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <span className="text-lg font-semibold">
                  {format(selectedMonth, "MMMM yyyy")}
                </span>
                <Button variant="outline" size="icon" onClick={handleNextMonth}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-inner p-4">
              {renderCalendar()}
            </div>
            {selectedDate && (
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-4">
                  Available Slots for{" "}
                  {format(selectedDate, "EEEE, MMMM d, yyyy")}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {filteredSlots
                    .filter((slot) =>
                      isSameDay(parseISO(slot.date), selectedDate)
                    )
                    .sort((a, b) => {
                      const timeA = new Date(
                        `1970-01-01T${convertTo24HourFormat(a.time)}`
                      );
                      const timeB = new Date(
                        `1970-01-01T${convertTo24HourFormat(b.time)}`
                      );
                      return timeA - timeB;
                    })
                    .map((slot) => (
                      <div
                        key={slot._id}
                        className="border p-4 rounded-lg bg-gray-100  cursor-pointer "
                      >
                        <div>
                          <div className="text-lg font-semibold">
                            {/* {format(parseISO(slot.date), "h:mm a")} new */}
                            {slot.time}
                          </div>
                          <div className="text-sm text-gray-500 flex gap-3 items-center">
                            <Image
                              src={
                                slot.gender.toLowerCase() === "male"
                                  ? "/maleIcon.svg"
                                  : "/FemaleIcon.svg"
                              }
                              width={20}
                              height={20}
                              alt=" gender icon"
                            />
                            {slot.gender.toLowerCase() === "male"
                              ? "Male Doctor"
                              : "Female Doctor"}
                          </div>
                          {/* doctor name */}
                          <div className="text-sm text-gray-500">
                            {" "}
                            {slot.doctor}
                          </div>
                        </div>
                        <div className="self-end">
                          <Button
                            variant="outline"
                            className="w-full bg-teal-100 hover:bg-teal-500 hover:text-white text-teal-600 text-lg duration-300"
                          >
                            Book Now
                          </Button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </Suspense>
    </>
  );
}

function convertTo24HourFormat(timeStr) {
  // Example input: "09:00 AM", "03:00 PM"
  const [time, modifier] = timeStr.split(" ");

  let [hours, minutes] = time.split(":");

  // Ensure that hours is treated as a string for padStart
  hours = String(hours);

  // Handle AM/PM conversion
  if (modifier === "PM" && hours !== "12") {
    hours = String(parseInt(hours, 10) + 12);
  } else if (modifier === "AM" && hours === "12") {
    hours = "00";
  }

  // Ensure that the hours part is always two digits using padStart
  return `${hours.padStart(2, "0")}:${minutes}:00`;
}
