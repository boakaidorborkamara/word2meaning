export const fetchData = async (url) => {
  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    if (err) {
      console.log(err);
    }
  }
};
