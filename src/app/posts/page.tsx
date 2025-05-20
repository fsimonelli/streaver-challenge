'use client';

import useSWR from 'swr';
import CardList from '@/app/ui/CardList';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Posts() {
  const { data, error, isLoading } = useSWR(
    'https://jsonplaceholder.typicode.com/posts',
    fetcher,
  );

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className='flex flex-col items-center justify-center'>
      <CardList posts={data} />
    </div>
  );
}
