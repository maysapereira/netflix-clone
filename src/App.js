import React, { useEffect, useState } from 'react'
import './App.css'
import Tmdb from './Tmdb.js'
import TVRow from './components/TVRow.js'
import FeaturedTV from './components/FeaturedTV.js'

export default () => {

    const [tvList, setTVList] = useState([])

    const [featuredData, setFeaturedData] = useState(null)

    useEffect(() =>{
        const loadAll = async () => {
            let list = await Tmdb.getHomeList()
            setTVList(list)

            let originals = list.filter(i=>i.slug === 'originals')
            let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1))
            let chosen = originals[0].items.results[randomChosen]
            let chosenInfo = await Tmdb.getTVInfo(chosen.id, 'tv')

            setFeaturedData(chosenInfo)

        }

        loadAll()
    }, [])

    return (

        <div className='page'>

        {FeaturedData &&
            <FeaturedTV item={featuredData} />
        }

            <section className='lists'>
                {tvList.map((item, key) => (
                   <TVRow key={key} title={item.title} items={item.items} />
                ))}
            </section>
        </div>
    )
}