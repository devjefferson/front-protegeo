import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';



export async function POST(request: NextRequest) {
  const query = `SELECT * FROM ocorrencias;`;

  
  
  const rows = await sql.query(query)
  

  return NextResponse.json({rows});
}