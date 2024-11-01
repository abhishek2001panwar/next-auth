


import { NextResponse , NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export default async function getDataFromToken(request:NextRequest) {
  try {

    const token = request.cookies.get("token")?.value || "";
    interface DecodedToken {
        id: string;
    }

    const decodedToken = jwt.verify(token, "SECRET") as DecodedToken;
    return decodedToken.id;
    }
    catch (error) {
        console.error("Error decoding token:", error);
        return NextResponse.json({ message: "Invalid token", error });
    }
}