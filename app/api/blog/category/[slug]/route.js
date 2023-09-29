import { NextResponse } from 'next/server';
import db from '@/lib/db'
 
export async function GET(request, {params}) {
  let tags;
  try {
    tags = await db.unsafe(`SELECT * FROM blogs WHERE topic_tag ILIKE '${params.slug.replace(/-/g, ' ').toLowerCase()}'`);
  } catch (error) {
    return new NextResponse.json({ error });
  }
  return new NextResponse(JSON.stringify(tags));
}