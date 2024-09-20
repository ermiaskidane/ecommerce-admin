import { redirect } from 'next/navigation';
// import { auth } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server'

import prismadb from '@/lib/prismadb';

export default async function SetupLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { userId } = auth();


  if (!userId) {
    // redirect('/sign-in');
    return auth().redirectToSignIn();
  }

  const store = await prismadb.store.findFirst({
    where: {
      userId,
    }
  });

  if (store) {
    redirect(`/${store.id}`);
  };

  return (
    <>
      {children}
    </>
  );
};