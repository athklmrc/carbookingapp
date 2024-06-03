// template

export async function fetchCarList() {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const options = {
    methode: 'GET',
    headers: {
      //accept: 'application/json',
      //Authorization: '',
    },
  }
  const response = await fetch(url, options);

  if (!response.ok) {throw new Error('Failed to fetch car lists')}

  const json = await response.json();

  return json.results;
}