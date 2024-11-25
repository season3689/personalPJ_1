import prisma from '@/app/lib/prisma';

export async function GET(request) {
  const product = await prisma.product.findMany();

  if (!product) {
    return new Response(JSON.stringify({ error: '물건을 찾을 수 없음' }), {
      status: 404,
    });
  }

  return new Response(JSON.stringify(product), {
    status: 200,
  });
}
