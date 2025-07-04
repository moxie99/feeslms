'use client';

import { UserButton, currentUser, useAuth } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import { LogOut } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { isTeacher } from '@/lib/teacher';

import { SearchInput } from './search-input';

interface NavbarRoutesProps {
  email: string | null | undefined;
}

export const NavbarRoutes = ({ email }: NavbarRoutesProps) => {
  const { userId } = useAuth();

  const pathname = usePathname();

  
  const isTeacherPage = pathname?.startsWith('/teacher');
  const isCoursePage = pathname?.includes('/courses');
  const isSearchPage = pathname === '/search';

  return (
    <>
      {isSearchPage && (
        <div className='hidden md:block'>
          <SearchInput />
        </div>
      )}
      <div className='flex gap-x-2 ml-auto'>
        {isTeacherPage || isCoursePage ? (
          <Link href='/'>
            <Button size='sm' variant='ghost'>
              <LogOut className='h-4 w-4 mr-2' />
              Back
            </Button>
          </Link>
        ) : isTeacher(email, userId) ? (
          <Link href='/teacher/courses'>
            <Button>Create Course(s)</Button>
          </Link>
        ) : null}
        <UserButton afterSignOutUrl='/' />
      </div>
    </>
  );
};
