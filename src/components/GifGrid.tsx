import React, { useEffect, useState } from 'react'
import { useFetchGif } from '../hooks/useFetchGif';

import { GifGridItem } from './GifGridItem';
interface Props {
    category:string
}

export const GifGrid = ({category}:Props) => {
/* const [images, setImages] = useState([])
    useEffect(() => {
        
    }, [category]); */
    const {data,loading} = useFetchGif(category);
    


    return (
<>
        <h3>{category}</h3>
        <div className="card-grid">
          {loading && <h3>Cargando....</h3>}
            {         
        data.map((item:any) => 
         (
                <GifGridItem
                key={item.id} 
                {...item}
                />
           
     
            )
            
        )
}
    
        </div>
        </>     
    )
}
