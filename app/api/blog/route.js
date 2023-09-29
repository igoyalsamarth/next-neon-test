import { NextResponse } from 'next/server';
import db from '@/lib/db'
 
export async function GET() {
  let tags;
  try {
    tags = await db.unsafe(`SELECT * FROM blogs`);
  } catch (error) {
    return new NextResponse.json({ error });
  }
  return new NextResponse(JSON.stringify(tags));
}