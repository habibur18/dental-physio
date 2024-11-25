import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { useState } from "react";
import { Label } from "./ui/label";

const DateOfBirthPicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [age, setAge] = useState("");

  // Function to calculate age
  const calculateAge = (dob) => {
    if (!dob) return "";

    const today = dayjs();
    const birthDate = dayjs(dob);

    // Calculate the difference in years
    const years = today.diff(birthDate, "year");
    birthDate.add(years, "year"); // Add the full years to the birthDate

    // Calculate the difference in months
    const months = today.diff(birthDate, "month");
    birthDate.add(months, "month"); // Add the full months to the birthDate

    return `${years} years, ${months % 12} months`; // Correct months and days
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const calculatedAge = calculateAge(date);
    setAge(calculatedAge);
  };

  return (
    <div className="space-y-2 ">
      <Label className="text-teal-300 hidden" htmlFor="dob">
        <span className="text-teal-300">Date of Birth</span>
      </Label>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker
            label="Select date of birth"
            value={selectedDate}
            onChange={handleDateChange}
            sx={{
              color: "white", // DatePicker text color
              "& .MuiInputBase-root": {
                color: "white", // Input text color
              },
              "& .MuiInputLabel-root": {
                color: "white", // Label text color
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "teal", // Input border color
              },
              "& .MuiSvgIcon-root": {
                color: "teal", // Calendar icon color
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "teal",
              },
            }}
          />
        </DemoContainer>
      </LocalizationProvider>

      {/* Display calculated age */}
      {selectedDate && (
        <div className="text-teal-300">
          <h3>Age: {age}</h3>
        </div>
      )}
    </div>
  );
};

export default DateOfBirthPicker;
