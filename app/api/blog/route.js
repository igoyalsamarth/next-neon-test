import { NextResponse } from 'next/server';
import db from '@/lib/db'
 
export async function GET() {
  let blogs;
  try {
    blogs = await db.unsafe(`SELECT * FROM blogs`);
  } catch (error) {
    return NextResponse.json({ error });
  }
  return NextResponse.json({ data: blogs });
}