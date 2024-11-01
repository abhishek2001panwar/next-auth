import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import dbConfig from "../../../../config/dbConfig";

// Database connection
dbConfig();

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { name, email, password } = reqBody;

    // Check if user already exists
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json({ message: "User already exists" });
    }

    // Hash the password and create a new user
    const hashedPassword = await bcryptjs.hash(password, 12);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    // Save user to database
    await newUser.save();
    return NextResponse.json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error saving user:", error);
    return NextResponse.json({ message: "Something went wrong", error });
  }
}
