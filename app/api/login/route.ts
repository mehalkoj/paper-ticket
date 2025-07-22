import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { loadEnvConfig } from '@next/env';
import { fetchLogin } from '@/lib';

const apiURL = process.env.AWS;



// grab formdata


//send form data to api
export async function GET() {
  try {
    const data = await fetchLogin();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
};


// if no response


// await for json


// set JWT in cookies