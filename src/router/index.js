import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/app/customer/all",
    name: "Home",
    component: () => import("../views/customers/Home.vue"),
  },
  {
    path: "/app/invoices/all",
    name: "Invoices",
    component: () => import("../views/invoices/Invoices.vue"),
  },
  {
    path: "/app/customer/all/:id",
    name: "CustomerDetails",
    component: () => import("../views/customers/CustomerDetails.vue"),
    props: true,
  },
  {
    path: "/app/invoices/all/:id",
    name: "InvoiceDetails",
    component: () => import("../views/invoices/InvoiceDetails.vue"),
    props: true,
  },
  {
    path: "/app/profile/",
    name: "Profile",
    component: () => import("../views/Profile.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
