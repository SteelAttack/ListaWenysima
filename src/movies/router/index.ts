import type { RouteRecordRaw } from 'vue-router';

import MovieLayout from '@/movies/layout/MovieLayout.vue';
import MovieId from '@/movies/pages/movieId.vue';
import MovieList from '../pages/movieList.vue';
import MovieSearch from '../pages/movieSearch.vue';

const ROUTE_NAME = 'movies';

export const movieRoute: RouteRecordRaw = {
    path: `/${ ROUTE_NAME }`,
    redirect: `/${ ROUTE_NAME }/list`,
    component: MovieLayout,
    children: [
        { 
            path: 'by/:id',
            name: 'movie-id', 
            props: { title: 'Por Id', visible: false, },
            component: MovieId,
        },
        { 
            path: `/${ ROUTE_NAME }/list`,
            name: 'movie-list', 
            props: { title: 'Lista', visible: true, },
            component: MovieList,
        },
        { 
            path: `/${ ROUTE_NAME }/search`,
            name: 'movie-search', 
            props: { title: 'Búsqueda', visible: true, },
            component: MovieSearch,
        },
    ]
}


