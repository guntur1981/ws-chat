const routes = [
  {
    path: "/",
    component: () => import("layouts/LayoutMain.vue"),
    children: [
      { path: "", component: () => import("pages/PageIndex.vue") },
      { path: "/join", component: () => import("pages/PageJoin.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
