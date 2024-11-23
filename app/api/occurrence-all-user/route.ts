import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const req = await request.json();
  const query = `SELECT * FROM ocorrencias WHERE user_id = $1;`;


  const values = [
    req.user_id
  ];
  
     const rows = await sql.query(query, values)
  

  return NextResponse.json({rows});
}
