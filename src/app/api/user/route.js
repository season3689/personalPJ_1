import prisma from '@/app/lib/prisma';
import * as bcrypt from 'bcrypt';

export async function POST(request) {
  const body = await request.json();

  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      // 비번을 해쉬로 변환
      password: await bcrypt.hash(body.password, 10),
    },
  });

  const { password, ...result } = user;
  return new Response(JSON.stringify(result));
}
