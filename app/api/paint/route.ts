import { cookies } from 'next/headers';

import { paint } from '@/app/Grid';

export async function POST(request: Request) {
  const { x, y, id } = await request.json();

  if (typeof x !== 'number' || typeof y !== 'number' || typeof id !== 'string')
    return new Response(null, { status: 400 });

  const cookieStore = cookies();

  if (cookieStore.has('hasPainted'))
    return new Response(null, { status: 401 });

  const success = paint(x, y, id);

  cookieStore.set({ name: 'hasPainted', value: '', maxAge: 5 * 60 });

  return new Response(null, {
    status: success ? 200 : 400
  });
}
