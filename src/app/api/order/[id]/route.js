import prisma from '@/app/lib/prisma';

export async function GET(request, { params }) {
  const id = Number(params.id);

  const order = await prisma.order.findUnique({
    where: {
      id: id,
    },
  });

  if (!order) {
    return new Response(JSON.stringify({ error: '주문을 찾을 수 없음' }), {
      status: 404,
    });
  }

  return new Response(JSON.stringify(order), {
    status: 200,
  });
}
