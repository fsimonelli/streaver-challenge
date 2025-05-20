interface SearchProps {
  term: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBar({ term, onSearchChange }: SearchProps) {
  return (
    <form className='m-4 mx-auto max-w-lg'>
      <div className='relative w-full'>
        <input
          className='z-20 block w-full rounded border border-gray-300 border-s-gray-50 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:border-s-gray-700 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500'
          placeholder='Search posts by userId'
          onChange={onSearchChange}
          value={term}
        />
      </div>
    </form>
  );
}
