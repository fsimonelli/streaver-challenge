'use client';

import useSWR, { SWRConfig } from 'swr';
import CardList from '@/app/ui/CardList';
import fetcher from '@/lib/fetcher';

export default function Posts() {
  const { data, error, isLoading } = useSWR(' ', fetcher);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className='flex flex-col items-center justify-center'>
      <SWRConfig
        value={{
          revalidateOnReconnect: true,
          fetcher: fetcher,
        }}
      >
        <CardList posts={data} />
      </SWRConfig>
    </div>
  );
}
