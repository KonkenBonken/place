import { paint, gridToString } from '@/app/Grid';

export async function POST(request: Request) {
  const { x, y, id } = await request.json();

  if (typeof x !== 'number' || typeof y !== 'number' || typeof id !== 'string')
    return new Response(null, { status: 400 });

  const success = paint(x, y, id);

  return new Response(null, { status: success ? 200 : 400 });
}

export async function GET() {
  return new Response(gridToString(), { status: 200 });
}
