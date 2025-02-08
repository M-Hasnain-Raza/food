import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function GET() {
    try {
        const data = await client.fetch(`*[_type == "food"]{name, price, originalPrice, "image" : image.asset -> url, _type, _id, category}`);
        return NextResponse.json(data);
    } catch(err) {
        console.log(err);
    }
}