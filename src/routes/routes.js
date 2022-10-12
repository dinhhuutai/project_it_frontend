import config from '~/config';

import Home from '~/pages/Home';
import Shop from '~/pages/Shop';
import Features from '~/pages/Features';
import Blog from '~/pages/Blog';
import About from '~/pages/About';
import Contact from '~/pages/Contact';


const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.shop,
        component: Shop,
    },
    {
        path: config.routes.features,
        component: Features,
    },
    {
        path: config.routes.blog,
        component: Blog,
    },
    {
        path: config.routes.about,
        component: About,
    },
    {
        path: config.routes.contact,
        component: Contact,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };