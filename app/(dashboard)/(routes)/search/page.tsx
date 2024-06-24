import { auth, currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

import { db } from '@/lib/db';
import { SearchInput } from '@/components/search-input';
import { getCourses } from '@/actions/get-courses';
import { CoursesList } from '@/components/courses-list';

import { Categories } from './_components/categories';

interface SearchPageProps {
  searchParams: {
    title: string;
    categoryId: string;
  };
}

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const { userId } = auth();

  const user = await currentUser();

  if (!userId) {
    return redirect('/');
  }
  if (user) {
    localStorage.setItem('user', JSON.stringify(user));
  }
  const categories = await db.category.findMany({
    orderBy: {
      name: 'asc',
    },
  });

  const courses = await getCourses({
    userId,
    ...searchParams,
  });

  function getCategoryFromEmail(email: string): string {
    const categoryName: string = email.split('@')[0]?.split('.')[1];
    const humanReadableCategory: string = categoryName
      ?.split('-')
      ?.map((word) => word?.charAt(0).toUpperCase() + word?.slice(1))
      .join(' ');
    return humanReadableCategory;
  }

  function filterCategoriesByEmail(
    email: string
  ): { id: string; name: string }[] {
    const category: string = getCategoryFromEmail(email);
    const filteredCategories: { id: string; name: string }[] =
      categories?.filter((cat) => cat.name.toLowerCase() === category.toLowerCase());
    return filteredCategories;
  }

  const email: string = user?.emailAddresses[0]?.emailAddress || '';
  const filteredCategory = filterCategoriesByEmail(email);
  

  function filterCoursesByEmail(email: string): any[] {
    const category: string = getCategoryFromEmail(email);
    const filteredCourses: any[] = courses?.filter(
      (course) =>
        course?.category?.name === category ||
        course?.categoryId === filteredCategory[0]?.id
    );
    return filteredCourses;
  }

 
  const filteredCourses = filterCoursesByEmail(email);
  return (
    <>
      <div className='px-6 pt-6 md:hidden md:mb-0 block'>
        <SearchInput />
      </div>
      <div className='p-6 space-y-4'>
        <Categories items={filteredCategory} />
        <CoursesList items={filteredCourses} />
      </div>
    </>
  );
};

export default SearchPage;
