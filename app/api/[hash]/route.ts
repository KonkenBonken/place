import { gridToString, hashGen, grid } from '@/app/Grid';

export async function GET(_: Request, { params: { hash: lastHash } }: { params: { hash: string } }) {
  if (lastHash === hashGen(grid))
    return new Response(null, { status: 304 });

  return new Response(gridToString(), { status: 200 });
}
