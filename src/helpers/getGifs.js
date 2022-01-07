export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=bz397328lDUAczICUDBzO2Nzt2eNwOSN`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  //Esta data nos devuelve un arreglo con muchos datos que no necesitamos.

  //Aca hacemos un map al arreglo de la data que traemos del fetch, y creamos un objeto con la data que necesitamos, id, title, url
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });

  return gifs;
};

//Como es una funcion async retorna una promesa, es necesario usarla con el then
