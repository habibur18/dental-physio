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
import { useRouter } from "next/navigation";
import { Suspense, useEffect, useMemo, useState } from "react";
import CalendarLoading from "./CalenderLoading";

export function NewCalendar() {
  const [slots, setSlots] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(undefined);
  const [doctorGender, setDoctorGender] = useState("all");
  const [minDate, setMinDate] = useState(null);
  const [maxDate, setMaxDate] = useState(null);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFirstFetch, setIsFirstFetch] = useState(true); // Track the first fetch

  // useEffect(() => {
  //   async function fetchSlots() {
  //     try {
  //       setIsLoading(true);
  //       const res = await fetch(
  //         `${process.env.NEXT_PUBLIC_BASE_URL}/api/slots`
  //       );
  //       if (!res.ok) {
  //         throw new Error(`HTTP error! status: ${res.status}`);
  //       }
  //       const data = await res.json();
  //       if (!Array.isArray(data)) {
  //         throw new Error("Invalid data format: expected an array");
  //       }
  //       setSlots(data);
  //       console.log("Fetched slots:", data);

  //       const dates = data.map((slot) => parseISO(slot.date));
  //       console.log("Parsed dates:", dates);

  //       if (dates.length > 0) {
  //         const newMinDate = min(dates);
  //         const newMaxDate = max(dates);
  //         setMinDate(newMinDate);
  //         setMaxDate(newMaxDate);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching slots:", error);
  //       setError(error.message);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   fetchSlots(); // Fetch slots initially
  //   const interval = setInterval(fetchSlots, 5000); // Fetch slots every 5 seconds
  //   return () => clearInterval(interval);
  // }, []);

  useEffect(() => {
    async function fetchSlots() {
      try {
        if (isFirstFetch) {
          setIsLoading(true); // Show loading only during the first fetch
        }

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/slots`
        );
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        if (!Array.isArray(data)) {
          throw new Error("Invalid data format: expected an array");
        }
        setSlots(data);
        console.log("Fetched slots:", data);

        const dates = data.map((slot) => parseISO(slot.date));
        console.log("Parsed dates:", dates);

        if (dates.length > 0) {
          const newMinDate = min(dates);
          const newMaxDate = max(dates);
          setMinDate(newMinDate);
          setMaxDate(newMaxDate);
        }
      } catch (error) {
        console.error("Error fetching slots:", error);
        setError(error.message);
      } finally {
        if (isFirstFetch) {
          setIsLoading(false); // Stop loading after the first fetch
          setIsFirstFetch(false); // Set to false after first fetch
        }
      }
    }

    fetchSlots(); // Fetch slots initially
    const interval = setInterval(fetchSlots, 5000); // Fetch slots every 5 seconds
    return () => clearInterval(interval);
  }, [isFirstFetch]); // Dependency array to track isFirstFetch state

  const handlePreviousMonth = () => {
    const previousMonth = subMonths(selectedMonth, 1);
    if (minDate && previousMonth >= startOfMonth(minDate)) {
      setSelectedMonth(previousMonth);
      selectFirstAvailableDateInMonth(previousMonth);
    }
  };

  const handleNextMonth = () => {
    const nextMonth = addMonths(selectedMonth, 1);
    if (maxDate && nextMonth <= endOfMonth(maxDate)) {
      setSelectedMonth(nextMonth);
      selectFirstAvailableDateInMonth(nextMonth);
    }
  };

  const selectFirstAvailableDateInMonth = (month) => {
    const availableDatesInMonth = slots
      .filter(
        (slot) =>
          isSameMonth(parseISO(slot.date), month) &&
          (doctorGender === "all" || slot.gender.toLowerCase() === doctorGender)
      )
      .map((slot) => parseISO(slot.date))
      .sort((a, b) => a.getTime() - b.getTime());

    if (availableDatesInMonth.length > 0) {
      setSelectedDate(availableDatesInMonth[0]);
    } else {
      setSelectedDate(undefined);
    }
  };

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

  useEffect(() => {
    if (availableDates.length > 0 && !selectedDate) {
      const sortedDates = availableDates.sort((a, b) => a - b);
      setSelectedDate(sortedDates[0]);
    } else if (availableDates.length === 0) {
      setSelectedDate(undefined);
    }
  }, [availableDates, selectedDate]);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleGenderChange = (gender) => {
    setDoctorGender(gender);
  };

  const getOppositeGender = (gender) => {
    return gender === "male" ? "Female" : "Male";
  };

  const FilterTab = ({ active, label, onClick }) => (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
        active
          ? "bg-teal-500 text-white"
          : "bg-white/10 text-teal-100 hover:bg-white/20"
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
          <div
            key={day}
            className="text-center text-sm font-semibold p-2 text-teal-200"
          >
            {day}
          </div>
        ))}
        {calendarDays.map((date, index) => {
          const isCurrentMonth = isSameMonth(date, selectedMonth);
          const isAvailable = availableDates.some(
            (d) =>
              isSameDay(d, date) &&
              (doctorGender === "all" ||
                slots.some(
                  (slot) =>
                    isSameDay(parseISO(slot.date), date) &&
                    slot.gender.toLowerCase() === doctorGender
                ))
          );
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
              className={`p-2 border border-teal-500/20 text-center ${
                isCurrentMonth
                  ? isAvailable
                    ? "bg-teal-700 cursor-pointer hover:bg-teal-800 duration-300"
                    : "bg-white/5"
                  : "bg-black/20"
              }`}
              onClick={() =>
                isCurrentMonth && isAvailable && handleDateSelect(date)
              }
            >
              {isCurrentMonth && (
                <>
                  <div className="font-semibold text-white">
                    {format(date, "d")}
                  </div>
                  <div className="text-xs text-teal-200">
                    {format(date, "EEE")}
                  </div>
                  <div className="flex justify-center space-x-1 mt-1">
                    {hasMale && (
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    )}
                    {hasFemale && (
                      <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
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

  const hasAvailableSlotsForMonth = useMemo(() => {
    return filteredSlots.length > 0;
  }, [filteredSlots]);

  const availableSlotsCount = useMemo(() => {
    const maleSlots = slots.filter(
      (slot) =>
        isSameMonth(parseISO(slot.date), selectedMonth) &&
        slot.gender.toLowerCase() === "male"
    ).length;
    const femaleSlots = slots.filter(
      (slot) =>
        isSameMonth(parseISO(slot.date), selectedMonth) &&
        slot.gender.toLowerCase() === "female"
    ).length;
    return { male: maleSlots, female: femaleSlots };
  }, [slots, selectedMonth]);

  if (isLoading) {
    return <CalendarLoading />;
  }

  if (error) {
    return (
      <ErrorFallback
        error={{ message: error }}
        resetErrorBoundary={() => setError(null)}
      />
    );
  }

  // reservation the slot onclick
  const handleSlotReservation = async (_id) => {
    try {
      const res = await fetch(`/api/slots/${_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });

      // If the response status is OK (200), proceed with the redirection
      if (res.ok) {
        // You don't need to check for `status: "success"` in the body anymore.
        const data = await res.json(); // Optional: Log the data for debugging

        console.log(data);
        // router.push(`/reservation/${_id}`); // Redirect to the reservation page
        // window.location.href = `/reservation/${_id}`;
        window.open(`/reservation/${_id}`, "_blank");
      } else {
        throw new Error("Failed to update the reservation.");
      }
    } catch (err) {
      // Optionally handle errors, like showing a message to the user
      console.log(err.message);
    }
  };

  return (
    <Suspense fallback={<div>loading.................. </div>}>
      <article
        id="book"
        className="py-16 md:py-24 bg-gradient-to-br from-black via-teal-900 to-black relative overflow-hidden"
      >
        <Card className="w-full max-w-[1600px] mx-auto bg-transparent border-none shadow-none">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-white">
              Book Your Appointments
            </CardTitle>
            <CardDescription className="text-teal-100 text-lg">
              Book your physiotherapy session with our expert doctors
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 rounded-lg">
            <div className="flex justify-center sm:justify-between flex-wrap sm:flex-nowrap gap-y-5  items-center mb-6">
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
                    onClick={() => handleGenderChange(gender)}
                  />
                ))}
              </div>
              <div className="flex items-center space-x-4 text-white">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handlePreviousMonth}
                  className="border-teal-500 text-teal-100 bg-teal-500/20 hover:bg-teal-500/20 hover:text-teal-100"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <span className="text-lg font-semibold">
                  {format(selectedMonth, "MMMM yyyy")}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleNextMonth}
                  className="border-teal-500 text-teal-100 bg-teal-500/20 hover:bg-teal-500/30 hover:text-teal-100"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="text-white text-center p-6 bg-teal-800/30 rounded-lg border-2 border-teal-500/50 shadow-lg">
              {renderCalendar()}
            </div>
            {!hasAvailableSlotsForMonth && doctorGender !== "all" && (
              <div className="text-center p-6 bg-teal-800/30 rounded-lg border-2 border-teal-500/50 shadow-lg w-3/4 mx-auto mt-8 text-red-600">
                <div className="mt-4 text-teal-100 font-bold text-center p-4 bg-teal-800/30 rounded-lg">
                  No{" "}
                  {doctorGender.charAt(0).toUpperCase() + doctorGender.slice(1)}{" "}
                  Dentors available for {format(selectedMonth, "MMMM yyyy")}.
                  {doctorGender === "female" &&
                    availableSlotsCount.male > 0 && (
                      <>
                        {" "}
                        However, {availableSlotsCount.male}{" "}
                        <span className="text-teal-200">Male Dentors</span>{" "}
                        available.
                      </>
                    )}
                  {doctorGender === "male" &&
                    availableSlotsCount.female > 0 && (
                      <>
                        {" "}
                        However, {availableSlotsCount.female}{" "}
                        <span className="text-teal-200"> Female Dentors</span>{" "}
                        available.
                      </>
                    )}
                </div>
              </div>
            )}
            {selectedDate && (
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Available Slots for{" "}
                  {format(selectedDate, "EEEE, MMMM d, yyyy")}
                </h3>
                {filteredSlots.filter((slot) =>
                  isSameDay(parseISO(slot.date), selectedDate)
                ).length > 0 ? (
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
                          className="border border-teal-500/20 p-4 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/[0.15] transition-colors cursor-pointer"
                          onClick={() => handleSlotReservation(slot._id)}
                        >
                          <div>
                            <div className="text-lg font-semibold text-white">
                              {slot.time}
                            </div>
                            <div className="text-sm text-teal-100 flex gap-3 items-center">
                              <Image
                                src={
                                  slot.gender.toLowerCase() === "male"
                                    ? "/maleIcon.svg"
                                    : "/FemaleIcon.svg"
                                }
                                width={20}
                                height={20}
                                alt="gender icon"
                              />
                              {slot.gender.toLowerCase() === "male"
                                ? "Male Doctor"
                                : "Female Doctor"}
                            </div>
                            <div className="text-sm text-teal-200">
                              {slot.doctor}
                            </div>
                          </div>
                          <div className="self-end">
                            <Button
                              variant="outline"
                              className="w-full bg-teal-500/10 hover:bg-teal-500 text-teal-100 hover:text-white text-lg duration-300 border-teal-500/30"
                            >
                              Book Now
                            </Button>
                          </div>
                        </div>
                      ))}
                  </div>
                ) : (
                  <div className="text-white text-center p-6 bg-teal-800/30 rounded-lg border-2 border-teal-500/50 shadow-lg">
                    <p className="text-xl font-semibold mb-2">
                      No slots available with{" "}
                      {doctorGender === "all"
                        ? "any"
                        : `${
                            doctorGender.charAt(0).toUpperCase() +
                            doctorGender.slice(1)
                          }`}{" "}
                      Dentors for {format(selectedDate, "EEEE, MMMM d, yyyy")}
                    </p>
                    {doctorGender !== "all" &&
                      slots.some(
                        (slot) =>
                          isSameDay(parseISO(slot.date), selectedDate) &&
                          slot.gender.toLowerCase() !== doctorGender
                      ) && (
                        <p className="text-lg text-teal-300">
                          However, {getOppositeGender(doctorGender)} Dentors are
                          available for this date.
                        </p>
                      )}
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent"></div>
      </article>
    </Suspense>
  );
}

function convertTo24HourFormat(timeStr) {
  const [time, modifier] = timeStr.split(" ");
  let [hours, minutes] = time.split(":");
  hours = String(hours);
  if (modifier === "PM" && hours !== "12") {
    hours = String(parseInt(hours, 10) + 12);
  } else if (modifier === "AM" && hours === "12") {
    hours = "00";
  }
  return `${hours.padStart(2, "0")}:${minutes}:00`;
}

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div
      role="alert"
      className="text-center p-6 bg-red-100 rounded-lg border-2 border-red-500 shadow-lg"
    >
      <h2 className="text-2xl font-bold text-red-700 mb-4">
        Oops! Something went wrong.
      </h2>
      <p className="text-red-600 mb-4">{error.message}</p>
      <Button
        onClick={resetErrorBoundary}
        className="bg-red-500 hover:bg-red-600 text-white"
      >
        Try again
      </Button>
    </div>
  );
}
