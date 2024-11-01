
import { NextResponse } from "next/server";

export async function GET(){

    try {
        const response  = NextResponse.json({ message: "User logged out successfully" });
        response.cookies.set("token", "", {
            httpOnly: true,
            maxAge: 0,
        });
        return response;
    } catch (error) {
        console.error("Error logging out user:", error);
        return NextResponse.json({ message: "Something went wrong", error });
        
    }
}