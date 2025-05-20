import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex min-h-screen min-w-full flex-col items-center justify-center'>
      <h1 className='m-4 text-3xl font-bold'>Welcome!</h1>
      <p className='text-lg'>Navigate to the /pages page with this button</p>
      <Link
        href='/posts'
        className='m-4 flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-800 p-3 text-sm font-medium hover:bg-gray-600 hover:text-gray-50 md:flex-none md:justify-start md:p-2 md:px-3'
      >
        <p className='md:block'>Posts</p>
      </Link>
    </main>
  );
}
