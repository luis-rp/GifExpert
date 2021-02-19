import React from 'react'
interface  Props{
    id:string,
    title:string,
    url:string
}
export const GifGridItem = ({id,title,url}:Props) => {
    return (
        <div className="card">
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}
