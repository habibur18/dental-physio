// "use client";
// import { Clock } from "lucide-react";
// import { useEffect, useState } from "react";
// import { Button } from "./ui/button";

// export default function StickyTimer({ reservation, slotId }) {
//   // State to store the remaining time in seconds
//   const [timeLeft, setTimeLeft] = useState(0);

//   useEffect(() => {
//     // Parse the reservation time inside the useEffect to prevent it from being a dependency
//     const reservationDate = new Date(reservation);

//     // Function to calculate time difference in seconds
//     const calculateTimeLeft = () => {
//       const now = new Date();
//       const diffInSeconds = Math.floor((reservationDate - now) / 1000); // Time difference in seconds
//       return diffInSeconds > 0 ? diffInSeconds : 0;
//     };

//     // Set initial time left
//     setTimeLeft(calculateTimeLeft());

//     // Start the interval to count down every second
//     const timer = setInterval(() => {
//       setTimeLeft((prevTime) => {
//         const newTime = prevTime > 0 ? prevTime - 1 : 0;
//         return newTime;
//       });
//     }, 1000);

//     // Cleanup the interval on component unmount
//     return () => clearInterval(timer);
//   }, [reservation]); // Only run this effect when `reservation` changes

//   // Format time as MM:SS
//   const formatTime = (time) => {
//     const minutes = Math.floor(time / 60);
//     const seconds = time % 60;
//     return `${minutes.toString().padStart(2, "0")}:${seconds
//       .toString()
//       .padStart(2, "0")}`;
//   };

//   const addExtraTime = async () => {
//     try {
//       // Fetch the current slot data
//       const res = await fetch(
//         `${process.env.NEXT_PUBLIC_BASE_URL}/api/slots/${slotId}`
//       );

//       // Check if the response is OK
//       if (!res.ok) {
//         throw new Error("Failed to fetch slot data");
//       }

//       const data = await res.json();
//       console.log("Fetched slot data:", data);

//       // Send a PATCH request to extend the reservation time by 5 minutes
//       const patchRes = await fetch(
//         `${process.env.NEXT_PUBLIC_BASE_URL}/api/slots/${slotId}`,
//         {
//           method: "PATCH",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             // Optionally, you can include extra data in the body, depending on your API
//             // For this example, no additional body content is needed
//           }),
//         }
//       );

//       if (!patchRes.ok) {
//         throw new Error("Failed to update slot with extra time");
//       }

//       const updatedSlot = await patchRes.json();
//       console.log("Updated slot data:", updatedSlot);

//       // Now update the local state with the new time left
//       // Assuming updatedSlot.revervation is the new reservation time (in ISO string format)
//       const newTimeLeft =
//         new Date(updatedSlot.revervation).getTime() - Date.now();

//       // Convert time left to seconds and update the local state (assuming you have a state like timeLeft)
//       setTimeLeft(Math.floor(newTimeLeft / 1000)); // Convert milliseconds to seconds
//     } catch (error) {
//       console.error("Failed to add extra time:", error);
//     }
//   };

//   return (
//     <header className="sticky top-0 z-50 bg-black/30 backdrop-blur-md border-b border-teal-500/20 shadow-lg">
//       <div className="container mx-auto p-4">
//         <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//           <h1 className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-teal-200 bg-clip-text text-transparent">
//             Complete Your Reservation
//           </h1>
//           <div className="flex items-center gap-3 bg-black/40 px-6 py-3 rounded-full border border-teal-500/30">
//             <Clock className="h-5 w-5 text-teal-400 animate-pulse" />
//             <div className="text-sm font-medium text-teal-100">
//               Time Remaining
//             </div>
//             <div className="text-2xl font-bold tabular-nums text-teal-400">
//               {formatTime(timeLeft)}
//             </div>
//           </div>
//           <div>
//             <div className={`${timeLeft <= 300 ? "block" : "hidden"}`}>
//               <Button
//                 onClick={addExtraTime}
//                 className="bg-teal-600 hover:bg-teal-700"
//               >
//                 Add 5 Minutes Extra Time
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

"use client";
import { Clock } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function StickyTimer({ reservation, slotId, onTimeExpired }) {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const reservationDate = new Date(reservation);

    const calculateTimeLeft = () => {
      const now = new Date();
      const diffInSeconds = Math.floor((reservationDate - now) / 1000);
      return diffInSeconds > 0 ? diffInSeconds : 0;
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          if (onTimeExpired) onTimeExpired(); // Notify parent when time expires
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [reservation, onTimeExpired]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const addExtraTime = async () => {
    try {
      const patchRes = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/slots/${slotId}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!patchRes.ok) throw new Error("Failed to update slot");

      const updatedSlot = await patchRes.json();
      const newTimeLeft = Math.floor(
        (new Date(updatedSlot.revervation).getTime() - Date.now()) / 1000
      );

      setTimeLeft(newTimeLeft);
    } catch (error) {
      console.error("Failed to add extra time:", error);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-black/30 backdrop-blur-md border-b border-teal-500/20 shadow-lg">
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-teal-200 bg-clip-text text-transparent">
            Complete Your Reservation
          </h1>
          <div className="flex items-center gap-3 bg-black/40 px-6 py-3 rounded-full border border-teal-500/30">
            <Clock className="h-5 w-5 text-teal-400 animate-pulse" />
            <div className="text-sm font-medium text-teal-100">
              Time Remaining
            </div>
            <div className="text-2xl font-bold tabular-nums text-teal-400">
              {formatTime(timeLeft)}
            </div>
          </div>
          <div>
            <Button
              onClick={addExtraTime}
              className={`bg-teal-600 hover:bg-teal-700 ${
                timeLeft <= 300 ? "block" : "hidden"
              }`}
            >
              Add 5 Minutes Extra Time
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
