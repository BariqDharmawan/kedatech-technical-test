import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
	const res = await axios.get('/dummy-package.json');
	return NextResponse.json({ product: await res.data });
}
