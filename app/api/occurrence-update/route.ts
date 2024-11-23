import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const req = await request.json();
  const query = `
   UPDATE ocorrencias
  SET
      visit_count = $1
  WHERE id = $2 AND user_id = $3;
`;

const values = [      
  req.visit_count,           
  req.id,
  req.user_id
];

   const rows = await sql.query(query, values)


  
  return NextResponse.json({
    rows
  });
}
