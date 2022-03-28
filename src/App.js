import React, { useEffect, useState } from 'react'
import Tmdb from './Tmdb.js'
import TVRow from './components/TVRow.js'

export default () => {

    const [tvList, setTVList] = useState([])

    useEffect(() =>{
        const loadAll = async () => {
            let list = await Tmdb.getHomeList()
            setTVList(list)
        }

        loadAll()
    }, [])

    return (
        <div className='page'>
            <section className='lists'>
                {tvList.map((item, key) => (
                   <TVRow key={key} title={item.title} items={item.items} />
                ))}
            </section>
        </div>
    )
}

