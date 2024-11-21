import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const req = await request.json();

  const query = `
  UPDATE users
  SET
      name = $1,
      surname = $2,
      cpf = $3,
      phone = $4,
      email = $5,
      birthdate = $6,
      password = $7,
      zip_code = $8,
      gender = $9,
      street = $10,
      complement = $11,
      number = $12,
      state = $13,
      city = $14,
      district = $15,
      accept_terms_privacy_policy = $16,
      accept_media_consent = $17
  WHERE id = $18;
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
  req.acceptMediaConsent,
  req.id
];

   const rows = await sql.query(query, values)

   console.log(rows)
  return NextResponse.json({
    rows
  });
}
