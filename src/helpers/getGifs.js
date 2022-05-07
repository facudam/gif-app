

export const  getGifs =  async( category ) => {//aca abajo como la categoria puede tener espacios y otras cosas que es mejor que no estén para la petición, por ello usamos encodeURI
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=sV45dXl6JDspy6rcpl2xdAH6iGyvi6mG`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })

    return gifs;

  }