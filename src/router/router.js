import Index from "@/views/Index.vue";

const routes = [
  {
    path: "/",
    name: "Index",
    meta: {
      title: "首页"
    },
    component: Index
  },
  {
    path: "/home",
    name: "home",
    meta: {
      title: "Home",
      requireAuth: true
    },
    component: () => import("@/views/Home.vue")
  },
  {
    path: "/charts",
    name: "charts",
    meta: {
      title: "Charts",
      requireAuth: false
    },
    component: () => import("@/views/Charts.vue")
  },
  {
    path: "/about",
    name: "About",
    meta: {
      title: "About",
      requireAuth: true
    },
    component: () => import("@/views/About.vue")
  }
];

export default routes;
