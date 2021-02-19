export const getGif = async (category:string) => {
    
    const url = `https://api.giphy.com/v1/stickers/search?q=${encodeURI(category)}&api_key=Oq3AJsEu4y1R7kz49w9cJ8nd9Wc6A5Oo`;
    const resp = await fetch (url);
    const {data} = await resp.json();
    
    
    const gifs = data.map((item:any)=>{
        
         return {
            id:item.id,
            title:item.title,
            url:item.images.downsized_medium.url
        } 

    }) 
 return gifs;
}
