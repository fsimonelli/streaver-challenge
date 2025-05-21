'use client';

import useSWR, { SWRConfig } from 'swr';
import CardList from '@/app/ui/CardList';
import fetcher from '@/lib/fetcher';
import { useState } from 'react';
import useDebounce from '@/utils/useDebounce';
import SearchBar from '@/app/ui/SearchBar';
import { toast, ToastContainer } from 'react-toastify';
import { PulseLoader } from 'react-spinners';

export default function Posts() {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 3000);

  function handleSearchTermChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  const dismiss = () => toast.dismiss();

  const { data, error, isLoading } = useSWR(
    debouncedSearch === '' ? 'all' : debouncedSearch,
    fetcher,
    {
      loadingTimeout: 3000,
      onLoadingSlow: () => {
        toast('Loading is taking longer than expected...', {
          position: 'top-right',
          theme: 'dark',
          hideProgressBar: true,
        });
      },
      onSuccess: dismiss,
    },
  );

  return (
    <div className='flex flex-col items-center justify-center'>
      <SWRConfig
        value={{
          revalidateOnReconnect: true,
          fetcher: fetcher,
        }}
      >
        <SearchBar term={search} onSearchChange={handleSearchTermChange} />

        {isLoading && (
          <div className='flex min-h-screen min-w-full flex-col items-center justify-center'>
            <PulseLoader
              color='purple'
              size={30}
              loading={true}
              speedMultiplier={0.5}
            />
          </div>
        )}
        {error && <div>Failed to load</div>}

        {data && <CardList posts={data} />}
      </SWRConfig>
      <ToastContainer />
    </div>
  );
}
