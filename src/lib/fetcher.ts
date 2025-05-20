const url = 'https://jsonplaceholder.typicode.com/posts';

const fetcher = () => fetch(url).then((res) => res.json());

export default fetcher;
