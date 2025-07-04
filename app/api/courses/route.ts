import { auth, currentUser } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

import { db } from '@/lib/db';
import { isTeacher } from '@/lib/teacher';

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const user = await currentUser();
    const { title } = await req.json();

   

    if (!userId || !isTeacher(user?.emailAddresses[0].emailAddress, userId)) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const course = await db.course.create({
      data: {
        userId,
        title,
      },
    });

    return NextResponse.json(course);
  } catch (error) {
    return new NextResponse('Internal Error', { status: 500 });
  }
}
