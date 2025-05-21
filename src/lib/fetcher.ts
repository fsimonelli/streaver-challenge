const url = 'https://jsonplaceholder.typicode.com/posts';

const fetcher = async (userId: string) => {
  let response;
  await new Promise((res) => setTimeout(res, 5000)); //simulating delay
  if (userId == 'all') {
    response = await fetch(url);
  } else {
    const searchURL = `${url}?userId=${userId}`;
    response = await fetch(searchURL);
  }

  if (!response.ok) {
    const error = new Error('An error occurred while fetching the data.');
    error.message = await response.json();
    throw error;
  }

  return response.json();
};

export default fetcher;
