import { NextResponse } from 'next/server';
import db from '@/lib/db'
 
export const revalidate = 1;

export async function GET(request) {
  let tags;
  try {
    tags = await db.unsafe(`SELECT * FROM blogs`);
  } catch (error) {
    return new NextResponse.json({ error });
  }
  return new NextResponse(JSON.stringify(tags));
}