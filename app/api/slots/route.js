// api/slots
// export const dynamic = "force-dynamic";

import connectMongo from "@/lib/connectMongo";
import { SlotModel } from "@/models/slot-model";
import { NextResponse } from "next/server";

// export async function GET() {
//   try {
//     await connectMongo();
//     const slots = await SlotModel.find({});
//     return NextResponse.json(slots, { status: 200 });
//   } catch (error) {
//     return NextResponse.json(
//       { error: "Error fetching slots" + error },
//       { status: 500 }
//     );
//   }
// }

export async function GET() {
  try {
    await connectMongo();

    // Get the current date and time
    const currentDate = new Date();

    // Update expired reservations by removing their reservation data
    await SlotModel.updateMany(
      { revervation: { $lt: currentDate } }, // Find slots with expired reservations
      { $unset: { revervation: "" } } // Remove reservation data
    );

    // Fetch slots with no reservation data
    const withoutReservations = await SlotModel.find({
      revervation: { $exists: false },
    });
    // and only send future slots only
    // const futureSlots = withoutReservations.filter((slot) => {
    const slots = withoutReservations.filter((slot) => {
      const slotDate = new Date(slot.date);
      return slotDate > currentDate;
    });

    return NextResponse.json(slots, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching slots: " + error.message },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await connectMongo();
    const { date, time, doctor, gender } = await request.json();
    const newSlot = new SlotModel({ date, time, doctor, gender });
    await newSlot.save();
    return NextResponse.json(newSlot, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Error creating slot" }, { status: 500 });
  }
}
