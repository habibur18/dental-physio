// export const dynamic = "force-dynamic";

import { SlotModel } from "@/models/slot-model";
import { NextResponse } from "next/server";

const Demoslots = [
  {
    _id: "670a53e7763bc91ff1dd242b",
    date: "2024-11-15",
    time: "09:00 AM",
    doctor: "Dr. Smith",
    gender: "Male",
  },
  {
    _id: "670a53e7763bc91ff1dd242c",
    date: "2024-11-15",
    time: "10:00 AM",
    doctor: "Dr. Smitha",
    gender: "Female",
  },
  {
    _id: "670a53e7763bc91ff1dd242d",
    date: "2024-11-17",
    time: "11:00 AM",
    doctor: "Dr. Johnson",
    gender: "Female",
  },
  {
    _id: "670a53e7763bc91ff1dd242e",
    date: "2024-12-16",
    time: "01:00 PM",
    doctor: "Dr. Johnson",
    gender: "Male",
  },
  {
    _id: "670a53e7763bc91ff1dd242f",
    date: "2025-01-17",
    time: "02:00 PM",
    doctor: "Dr. Lee",
    gender: "Female",
  },
  {
    _id: "670a53e7763bc91ff1dd2430",
    date: "2025-02-17",
    time: "03:00 PM",
    doctor: "Dr. Lee",
    gender: "Male",
  },
  {
    _id: "670a53e7763bc91ff1dd2431",
    date: "2025-01-08",
    time: "04:00 PM",
    doctor: "Dr. Brown",
    gender: "Female",
  },
  {
    _id: "670a53e7763bc91ff1dd2432",
    date: "2025-01-14",
    time: "05:00 PM",
    doctor: "Dr. Brown",
    gender: "Male",
  },
  {
    _id: "670a564c763bc91ff1dd2434",
    date: "2025-01-12",
    time: "11:00 AM",
    doctor: "Dr. Habibur Rahman",
    gender: "Male",
  },
  {
    _id: "670a5cb7763bc91ff1dd2436",
    date: "2025-02-25",
    time: "09:00 AM",
    doctor: "Dr. Abir",
    gender: "Male",
  },
  {
    _id: "670a5e79763bc91ff1dd2438",
    date: "2024-12-19",
    time: "10:00 AM",
    doctor: "Dr. Sushila",
    gender: "Female",
  },
  {
    _id: "672f7fe5a20c1e01d275d5b3",
    date: "2024-11-15",
    time: "10:00 PM",
    doctor: "Dr. Jessica",
    gender: "Female",
  },
  {
    _id: "672f800ba20c1e01d275d5b4",
    date: "2024-11-15",
    time: "11:00 AM",
    doctor: "Dr. Alex",
    gender: "Male",
  },
  {
    _id: "672f8035a20c1e01d275d5b5",
    date: "2024-11-15",
    time: "08:00 AM",
    doctor: "Dr. Debra",
    gender: "Female",
  },
  {
    _id: "672f809fa20c1e01d275d5b6",
    date: "2024-11-15",
    time: "11:30 PM",
    doctor: "Dr. Jhon",
    gender: "Male",
  },
  {
    _id: "672f80d7a20c1e01d275d5b7",
    date: "2024-11-15",
    time: "10:30 PM",
    doctor: "Dr. Angela",
    gender: "Female",
  },
];

// api/slots
export async function GET() {
  try {
    const slots = await SlotModel.find({});
    return NextResponse.json(slots, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching slots" + error },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const { date, time, doctor, gender } = await request.json();
    const newSlot = new SlotModel({ date, time, doctor, gender });
    await newSlot.save();
    return NextResponse.json(newSlot, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Error creating slot" }, { status: 500 });
  }
}
