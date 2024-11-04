import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const req = await request.json();

  const query = `
  INSERT INTO users (
      name,
      surname,
      cpf,
      phone,
      email,
      birthdate,
      password,
      zip_code,
      gender,
      street,
      complement,
      number,
      state,
      city,
      district,
      accept_terms_privacy_policy,
      accept_media_consent
  ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17);
`;

const values = [
  req.name,           
  req.surname,        
  req.cpf,            
  req.phone,          
  req.email,          
  req.birthdate,      
  req.password,       
  req.zipCode,        
  req.gender,         
  req.street,         
  req.complement,     
  req.number,         
  req.state,          
  req.city,           
  req.district,       
  req.acceptTermsPrivacyPolicy,
  req.acceptMediaConsent
];


   const rows = await sql.query(query, values)
  return NextResponse.json({
    rows
  });
}
