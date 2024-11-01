import jwt from "jsonwebtoken";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import dbConfig from "../../../../config/dbConfig";

// Database connection4
dbConfig();

export async function POST(req: NextRequest) {
  const reqBody = await req.json();
  const { email, password } = reqBody;

  const user = await User.findOne({ email });
  if (!user) {
    return NextResponse.json({ message: "User not found" });
  }

  const isPasswordValid = await bcryptjs.compare(password, user.password);
  if (!isPasswordValid) {
    return NextResponse.json({ message: "Invalid password" });
  }

  const tokenData = {
    id: user._id,
    email: user.email,
  };
  const token = jwt.sign(tokenData, "SECRET", {
    expiresIn: "1h",
  });
  const response = NextResponse.json({ message: "Login successful", token });

  response.cookies.set("token", token, {
    httpOnly: true,
    maxAge: 60 * 60 * 1000,
  });
  return response;
}
