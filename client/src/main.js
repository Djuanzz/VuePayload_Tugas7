import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";

import Signin from "./components/Signin.vue";
import Signup from "./components/Signup.vue";
import Dashboard from "./components/Dashboard.vue";

const routes = [
  { path: "/", component: Signin },
  { path: "/signup", component: Signup },
  { path: "/dashboard", component: Dashboard },
];

const router = createRouter({ history: createWebHistory(), routes });

createApp(App).use(router).mount("#app");
