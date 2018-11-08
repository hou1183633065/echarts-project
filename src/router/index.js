import Vue from "vue";
import Router from "vue-router";
import routes from "./router";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  // console.log(to)
  // 通过title动态添加浏览器title
  if (to.meta.title) {
    document.title = to.meta.title;
    next();
  }
  // 判断是否需要登录权限
  if (to.matched.some(res => res.meta.requireAuth)) {
    alert("打开此页面需要鉴权");
    // 回到当前页
    next("/");
    // 跳转其他页面
    // next("/Charts");
    //     if (localStorage.getItem('uuid') != 'null' && localStorage.getItem('uuid') != '') {// 判断是否存在uuid或是uuid是否为空
    //         next()
    //     } else {// 没uuid则跳转到注册登录界面
    // next({
    //     path: '/',
    //     query: { redirect: to.fullPath }
    // })
    //     }
  } else {
    next();
  }
});

export default router;
