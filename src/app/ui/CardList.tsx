import Card from '@/app/ui/Card';
import PostDTO from '@/utils/types';

interface Props {
  posts: PostDTO[];
}

export default function CardList({ posts }: Props) {
  return (
    <div className='grid grid-cols-2 gap-4 md:grid-cols-3'>
      {posts.map((post) => (
        <Card key={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
}
