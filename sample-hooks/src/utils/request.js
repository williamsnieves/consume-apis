const makeRequest = async (url) => {
  const result = await fetch(url);

  return result.json();
};

export { makeRequest };
