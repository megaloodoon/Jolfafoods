import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const brandId = searchParams.get("brandId");

    const dbPath = path.join(process.cwd(), "data", "db.json");
    const fileContents = fs.readFileSync(dbPath, "utf8");
    const data = JSON.parse(fileContents);

    if (!brandId) {
      return NextResponse.json(data.products || []);
    }

    const products = (data.products || []).filter(
      (product) => product.brandId === brandId
    );

    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
