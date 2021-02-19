import React,{useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

interface Props {
    
}

export const GifExpertApp = (props: Props) => {
    
    const [categories, setCategories] = useState(["one punch","DBZ"]);
  /*   const handleAdd = () =>{

        setCategories([...categories,"Goku"]);
    } */
    return (
        <div>
           
            <AddCategory setCategories={setCategories} />
            <ol>
                {categories.map((category,i)=>

                 <GifGrid category={category} key={category}/>
                )}
            </ol>
        </div>
    )
}
