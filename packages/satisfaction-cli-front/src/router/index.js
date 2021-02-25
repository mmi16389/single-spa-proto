
import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Container from "@/views/Container.vue";

const routes = [
    {
        path: "/satisfaction-cli-front",
        component: Container ,
        children:[
            {
                path: "about",
                component: About,
            },
            {
                path: "home",
                name: 'home',
                component: Home,
            }
        ]
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

/*router.beforeEach((from) => {
    if (from.params.id === 'satisfaction-cli-front') {
        return true;
    }
    else {
        return false;
    }
});*/
export default router;