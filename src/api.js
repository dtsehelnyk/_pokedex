export const getData = async (url, amount = '') => {
  const data = await fetch(`${url}${amount}`);

  return data.json();
}

// export const limit = getData('https://pokeapi.co/api/v2/pokemon/?limit=', '12');
