const url = 'https://jsonplaceholder.typicode.com/posts';

const fetcher = async (id: string) => {
  let response;
  if (id == 'all') {
    response = await fetch(url).then((res) => res.json());
  } else {
    const searchURL = `${url}?userId=${id}`;
    response = await fetch(searchURL).then((res) => res.json());
  }
  return response;
};

export default fetcher;
