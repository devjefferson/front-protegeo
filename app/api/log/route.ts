import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const req = await request.json();

  const query = `
  INSERT INTO user_logs (
     user_id, email, event_type
     
  ) VALUES ($1, $2, $3);
`;

const values = [
  req.user_id,           
  req.email,        
  req.event_type,            
];

   const rows = await sql.query(query, values)
  return NextResponse.json({
    rows
  });
}
