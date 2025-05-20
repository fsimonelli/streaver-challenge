const url = 'https://jsonplaceholder.typicode.com/posts';

const fetcher = async (userId: string) => {
  let response;
  await new Promise((res) => setTimeout(res, 5000)); //simulating delay
  if (userId == 'all') {
    response = await fetch(url).then((res) => res.json());
  } else {
    const searchURL = `${url}?userId=${userId}`;
    response = await fetch(searchURL).then((res) => res.json());
  }
  return response;
};

export default fetcher;
