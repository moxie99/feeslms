import { isTeacher } from '@/lib/teacher';
import { auth, currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

const TeacherLayout = async ({ children }: { children: React.ReactNode }) => {
  const { userId } = auth();
  const user = await currentUser();

  if (!isTeacher(user?.emailAddresses[0].emailAddress, userId)) {
    return redirect('/');
  }

  return <>{children}</>;
};

export default TeacherLayout;
