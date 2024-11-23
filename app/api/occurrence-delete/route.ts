import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const req = await request.json();
  const query = `DELETE FROM ocorrencias WHERE id = $1 AND user_id = $2;`;

const values = [
  req.id,
  req.user_id
  
];
   const rows = await sql.query(query, values)
  return NextResponse.json({
    rows
  });
}
