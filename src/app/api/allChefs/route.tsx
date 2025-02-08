import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function GET() {
    try {
        const data = await client.fetch(`*[_type == "chef"]{specialty, _createdAt, _type, name, description, _id, position, "image" : image.asset -> url, experience, available, _updatedAt, _rev}`);
        return NextResponse.json(data);
    } catch(err) {
        console.log(err);

    }
}
