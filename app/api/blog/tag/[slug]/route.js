import { NextResponse } from 'next/server';
import db from '@/lib/db'
 
export async function GET(request, {params}) {
  let tags;
  try {
    tags = await db.unsafe(`SELECT * FROM blogs WHERE tag_one ILIKE '${params.slug.replace(/-/g, ' ').toLowerCase()}' OR tag_two ILIKE '${params.slug.replace(/-/g, ' ').toLowerCase()}' OR tag_three ILIKE '${params.slug.replace(/-/g, ' ').toLowerCase()}'`);
  } catch (error) {
    return NextResponse.json({ error });
  }
  return NextResponse.json({ data: tags });
}