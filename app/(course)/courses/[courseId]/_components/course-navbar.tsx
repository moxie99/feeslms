import { Chapter, Course, UserProgress } from '@prisma/client';

import { NavbarRoutes } from '@/components/navbar-routes';

import { CourseMobileSidebar } from './course-mobile-sidebar';
import { currentUser } from '@clerk/nextjs';

interface CourseNavbarProps {
  course: Course & {
    chapters: (Chapter & {
      userProgress: UserProgress[] | null;
    })[];
  };
  progressCount: number;
}

export const CourseNavbar = async ({
  course,
  progressCount,
}: CourseNavbarProps) => {
  const user = await currentUser();
  return (
    <div className='p-4 border-b h-full flex items-center bg-white shadow-sm'>
      <CourseMobileSidebar course={course} progressCount={progressCount} />
      <NavbarRoutes email={user?.emailAddresses[0].emailAddress} />
    </div>
  );
};
