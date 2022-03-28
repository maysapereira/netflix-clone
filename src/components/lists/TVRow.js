import React from 'react'
import './TVRow.css'

export default ({title, items}) => {
    return (
        <div className='tvRow'>
            <h2>{title}</h2>
            <div className='tvRow--listarea'>

                <div className='tvRow--list'>

                {items.results.length > 0 && items.results.map((item, key) => (

                    <div key={key} className='tvRow--item'>

                        <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} 
                        alt={item.original_title}/>

                    </div>
                ))}

                </div>

            </div>
        </div>
    )
}