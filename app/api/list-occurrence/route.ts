import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const query = `SELECT * FROM ocorrencias;`;

  const data = (await sql.query(query));

  return NextResponse.json({
    rows: data.rows,
    ok: true,
  });
}
