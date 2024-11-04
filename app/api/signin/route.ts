import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {

const req = await request.json();
const query = `SELECT * FROM users WHERE email = $1`;

const values = [
  req.email,          
];

   const rows = await sql.query(query, values)
   
   if(rows.rows[0].password !== req.password){
      return NextResponse.json({
        error: 'Senha incorreta'
      });
   }

  return NextResponse.json({
    rows: rows.rows[0],
    ok: true
  });
}
