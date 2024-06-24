import { NavbarRoutes } from '@/components/navbar-routes';

import { MobileSidebar } from './mobile-sidebar';
import { currentUser } from '@clerk/nextjs';

export const Navbar = async () => {
  const user = await currentUser();

  return (
    <div className='p-4 border-b h-full flex items-center bg-white shadow-sm'>
      <MobileSidebar />
      <NavbarRoutes email={user?.emailAddresses[0].emailAddress} />
    </div>
  );
};
