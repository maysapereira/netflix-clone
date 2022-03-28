const API_KEY = 'd2c520c5aaf43f4f73a356f18c19a5b2'
const API_BASE = 'https://api.themoviedb.org/3'
const language = 'language=pt-BR'

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`)
    const json = await req.json()
    return json
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originais',
                tittle: 'Originais Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&${language}&api_key=${API_KEY}`)
            },

            {
                slug: 'trending',
                tittle: 'Recomendados para você',
                items: await basicFetch(`/trending/all/week?${language}&api_key=${API_KEY}`)
            },

            {
                slug: 'top-rated',
                tittle: 'Em Alta',
                items: await basicFetch(`/tv/top_rated?${language}&api_key=${API_KEY}`)
            },

            {
                slug: 'crime',
                tittle: 'Criminal',
                items: await basicFetch(`/discover/tv?with_genres=&80${language}&api_key=${API_KEY}`)
            },

            {
                slug: 'mystery',
                tittle: 'Mistério',
                items: await basicFetch(`/discover/tv?with_genres=&9648${language}&api_key=${API_KEY}`)
            },

            {
                slug: 'horror',
                tittle: 'Terror',
                items: await basicFetch(`/discover/tv?with_genres=&27${language}&api_key=${API_KEY}`)
            },

            {
                slug: 'sci-fi',
                tittle: 'Sci-fi',
                items: await basicFetch(`/discover/tv?with_genres=&878${language}&api_key=${API_KEY}`)
            },

            {
                slug: 'animation',
                tittle: 'Animação',
                items: await basicFetch(`/discover/tv?with_genres=&16${language}&api_key=${API_KEY}`)
            }
        ]
    }
}