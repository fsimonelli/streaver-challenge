interface SearchProps {
  term: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBar({ term, onSearchChange }: SearchProps) {
  return (
    <div className='mx-aut relative m-4'>
      <input
        className='z-20 block w-full rounded border border-gray-300 border-s-gray-50 bg-gray-800 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500'
        placeholder='Search posts by userId'
        onChange={onSearchChange}
        value={term}
      />
    </div>
  );
}
