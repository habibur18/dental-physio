import { useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

function PhoneNumberInput() {
  const [phone, setPhone] = useState("");

  // Function to format the phone number as (XXX) XXX-XXXX
  const formatPhoneNumber = (value) => {
    const phoneNumber = value.replace(/[^\d]/g, ""); // Remove non-numeric characters
    if (phoneNumber.length <= 3) {
      return `(${phoneNumber}`;
    } else if (phoneNumber.length <= 6) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    } else {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
        3,
        6
      )}-${phoneNumber.slice(6, 10)}`;
    }
  };

  // Handle the input change
  const handleChange = (e) => {
    const formattedPhone = formatPhoneNumber(e.target.value);
    setPhone(formattedPhone);
  };

  return (
    <div className="space-y-2">
      <Label className="text-teal-300" htmlFor="phone">
        Phone
      </Label>
      <Input
        id="phone"
        type="tel"
        value={phone}
        onChange={handleChange}
        placeholder="+1 (555) 000-0000"
        className="!bg-teal/30 border-teal-500/30 focus:border-teal-400 text-white"
      />
    </div>
  );
}

export default PhoneNumberInput;
