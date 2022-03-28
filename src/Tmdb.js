const API_KEY = 'd2c520c5aaf43f4f73a356f18c19a5b2'
const API_BASE = 'https://api.themoviedb.org/3'

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originais',
                title: 'Originais Netflix',
                items: []
            },

            {
                slug: 'trending',
                title: 'Recomendados para você'
                items: []
            },

            {
                slug: 'toprated',
                title: 'Em Alta',
                items: []
            },

            {
                slug: 'kdramas',
                title: 'K-dramas',
                items: []
            },

            {
                slug: 'suspenseful',
                tittle: 'Suspense',
                items: []
            },

            {
                slug: 'supernatural',
                tittle: 'Sobrenatural',
                items: []
            },

            {
                slug: 'sci-fi',
                tittle: 'Sci-fi',
                items: []
            },

            {
                slug: 'romance',
                tittle: 'Romance',
                items: []
            }
        ]
    }
}