import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const query = `SELECT * FROM ocorrencias LIMIT 10;`;



  const rows = (await sql.query(query)).rows;


  
  return NextResponse.json({
    rows: rows,
    ok: true,
  });
}