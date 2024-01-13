
export const getImagen = async() => {
  try{ 
    
      const apiKey = 'CcIF7cX14t1aHi47V2BuGAAiaHFsrEBa';
      const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
      const { data }  = await resp.json();

      const { url } = data.images.original;

      return url;

  }catch(error){
      console.warn(error); 
      return 'No se encontro la imagen'; 
  }

}

