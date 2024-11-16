export const dynamic = "force-dynamic";

import { SlotModel } from "@/models/slot-model";
import { NextResponse } from "next/server";

// api/slots
export async function GET() {
  try {
    const slots = await SlotModel.find({});
    return NextResponse.json(slots, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching slots" },
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
