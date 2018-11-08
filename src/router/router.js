import Index from "@/views/Index.vue";

// meta中
// title为当前页面标题
// requireAuth为是否需要鉴权
// keepAlive为是否需要缓存

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
      requireAuth: false,
      keepAlive: true
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
