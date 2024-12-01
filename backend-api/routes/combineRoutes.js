import albumsRoutes from "./albumsRoute.js";
import commentsRoutes from "./commentsRoute.js";
import photosRoutes from "./photosRoute.js";
import postRoutes from "./postRoute.js";
import todosRoutes from "./todosRoute.js";
import usersRoutes from "./usersRoute.js";

const routes = [
    {
        path: '/albums',
        element: albumsRoutes
    },
    {
        path: '/comments',
        element: commentsRoutes
    },
    {
        path: '/post',
        element: postRoutes
    },
    {
        path: '/todos',
        element: todosRoutes
    },
    {
        path: '/users',
        element: usersRoutes
    },
    {
        path: '/photos',
        element: photosRoutes
    },
]


export default routes;