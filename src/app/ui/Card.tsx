interface CardProps {
  title: string;
  body: string;
}

export default function Card({ title, body }: CardProps) {
  return (
    <div className='block max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800'>
      <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
        {title}
      </h5>
      <p className='font-normal text-gray-700 dark:text-gray-400'>{body}</p>
    </div>
  );
}
