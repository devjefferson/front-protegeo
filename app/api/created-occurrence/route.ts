import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const req = await request.json();

  const query = `
  INSERT INTO ocorrencias (
      street,
      lat,
      lng,
      title,
      description,
      user_id,
      hour,
      visit_count,
      likes
  ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);
`;

const values = [
  req.street,           
  req.lat,        
  req.lng,            
  req.title,          
  req.description,          
  req.user_id,      
  req.hour,       
  req.visit_count,        
  req.likes,        
];


   const rows = await sql.query(query, values)
  return NextResponse.json({
    rows
  });
}
