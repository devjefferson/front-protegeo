import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const req = await request.json();
  const query = `SELECT * FROM users WHERE id = $1`;

  const values = [req.id];

  const rows = await sql.query(query, values);

  console.log(rows)

  return NextResponse.json({
    rows: rows.rows[0],
    ok: true,
  });
}
