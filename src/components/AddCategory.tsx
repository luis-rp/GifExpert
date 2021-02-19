import React ,{ChangeEvent, FormEvent, useState} from 'react'
interface Props {
    setCategories:Function
}
export const AddCategory = ({setCategories}:Props) => {
    
    const [inputValue, setinputValue] = useState("")
    const handleInputChange = (e:ChangeEvent<
        HTMLInputElement> ):void =>{
      
            
            setinputValue(e.target.value);
    }
    const handleSubmit =(e:FormEvent) =>{
        e.preventDefault();
       // console.log(setCategories);
        
        setCategories((cats:Array<string>)=>  [inputValue,...cats]);
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2 >Add Category</h2>
            <input 
            
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            />
        </form>
    )
}
