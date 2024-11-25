import prisma from '@/app/lib/prisma';

export async function GET(request, { params }) {
  const id = Number(params.id);

  const product = await prisma.product.findFirst({
    where: {
      id: id,
    },
  });

  if (!product) {
    return new Response(JSON.stringify({ error: '제품을 찾을 수 없음' }), {
      status: 404,
    });
  }

  return new Response(JSON.stringify(product), {
    status: 200,
  });
}
