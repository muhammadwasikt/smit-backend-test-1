import albumsRoutes from "./albumsRoute.js";
import commentsRoutes from "./commentsRoute.js";
import photosRoutes from "./photosRoute.js";
import postRoutes from "./postRoute.js";
import todosRoutes from "./todosRoute.js";
import usersRoutes from "./usersRoute.js";

const routes = [
    {
        path: '/albums',
        element: albumsRoutes,
        status: 200
    },
    {
        path: '/comments',
        element: commentsRoutes,
        status: 200
    },
    {
        path: '/post',
        element: postRoutes,
        status: 200
    },
    {
        path: '/todos',
        element: todosRoutes,
        status: 200
    },
    {
        path: '/users',
        element: usersRoutes,
        status: 200
    },
    {
        path: '/photos',
        element: photosRoutes,
        status: 200
    },
]


export default routes;