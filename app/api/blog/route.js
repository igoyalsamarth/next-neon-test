import { NextResponse } from 'next/server';
import db from '@/lib/db'
 
export const revalidate = 30;

export async function GET(request, {params}) {
  let blogs;
  try {
    blogs = await db.unsafe(`SELECT * FROM blogs`)
  } catch (error) {
    return new NextResponse.json({ error });
  }
  return new NextResponse(JSON.stringify(blogs));
}