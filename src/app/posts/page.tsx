'use client';

import useSWR, { SWRConfig } from 'swr';
import CardList from '@/app/ui/CardList';
import fetcher from '@/lib/fetcher';
import { useState } from 'react';
import useDebounce from '@/utils/useDebounce';
import SearchBar from '@/app/ui/SearchBar';

export default function Posts() {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 3000);

  function handleSearchTermChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  const { data, error, isLoading } = useSWR(
    debouncedSearch === '' ? 'all' : debouncedSearch,
    fetcher,
  );

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
        <SearchBar term={search} onSearchChange={handleSearchTermChange} />
        <CardList posts={data} />
      </SWRConfig>
    </div>
  );
}
