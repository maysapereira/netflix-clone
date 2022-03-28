import React, { useEffect, useState } from 'react'
import './App.css'
import Tmdb from '../api/Tmdb.js'
import TVRow from '../components/lists/TVRow.js'
import FeaturedTV from '../components/featured/FeaturedTV.js'
import Header from '../components/header/Header.js'

export default () => {

    const [tvList, setTVList] = useState([])

    const [featuredData, setFeaturedData] = useState(null)

    const [blackHeader, setBlackHeader] = useState(false)

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

    useEffect(() => {
        const scrollListener = () => {
            if(window.scrollY > 10){
                setBlackHeader(true)
            } else {
                setBlackHeader(false)
            }
        }

        window.addEventListener('scroll', scrollListener)

        return () => {
            window.removeEventListener('scroll', scrollListener)
        }

    }, [])

    return (

        <div className='page'>

        <Header black={blackHeader} />

        {featuredData &&
            <FeaturedTV item={featuredData} />
        }

            <section className='lists'>
                {tvList.map((item, key) => (
                   <TVRow key={key} title={item.title} items={item.items} />
                ))}
            </section>

            <footer>
                Feito por Maysa Pereira<br/>
                Direitos de imagem para Netflix<br/>
                Dados do site TheMovieDB.org
            </footer>

        </div>
    )
}