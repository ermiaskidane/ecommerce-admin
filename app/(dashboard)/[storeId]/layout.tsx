import { redirect } from 'next/navigation';
// import { auth } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server'

// import Navbar from '@/components/navbar'
import prismadb from '@/lib/prismadb';
import Navbar from '@/components/navbar';

export default async function DashboardLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { storeId: string }
}) {
  const { userId } = auth();

  if (!userId) {
    // redirect('/sign-in');
    return auth().redirectToSignIn();
  }

  const store = await prismadb.store.findFirst({ 
    where: {
      id: params.storeId,
      userId,
    }
   });

  if (!store) {
    redirect('/');
  };

  return (
    <>
      <Navbar/>
      {children}
    </>
  );
};