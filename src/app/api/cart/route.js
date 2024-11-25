import prisma from '@/app/lib/prisma';

export async function POST(request) {
  try {
    // 1. 요청에서 필요한 데이터 추출
    const { userId, productId } = await request.json(); // 사용자 ID와 제품 ID를 받아옵니다.

    // 2. 장바구니가 존재하지 않으면 생성
    const cart = await prisma.cart.findFirst({
      where: {
        userId: userId,
      },
    });

    if (!cart) {
      // 장바구니가 없다면 새로 생성
      cart = await prisma.cart.create({
        data: {
          userId: userId,
        },
      });
    }

    // 3. 장바구니 아이템 추가
    const existingItem = await prisma.cartItem.findFirst({
      where: {
        cartId: cart.id,
        productId: productId,
      },
    });

    if (existingItem) {
      // 이미 장바구니에 해당 제품이 있으면 수량만 증가시킴
      const updatedItem = await prisma.cartItem.update({
        where: { id: existingItem.id },
        data: {
          quantity: { increment: 1 },
        },
      });
      return new Response(JSON.stringify(updatedItem), { status: 200 });
    } else {
      // 장바구니에 해당 제품이 없다면 새로 추가
      const newCartItem = await prisma.cartItem.create({
        data: {
          cartId: cart.id,
          productId: productId,
        },
      });
      return new Response(JSON.stringify(newCartItem), { status: 201 });
    }
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
