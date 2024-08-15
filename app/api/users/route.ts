import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET() {
    const users = await prisma.user.findMany();

    return NextResponse.json({
        users
    });
}

export async function POST(req: NextResponse) {
    const data = await req.json();

    const user = await prisma.user.create({
        data
    })

    return NextResponse.json({ user })
}