import { createRouter, createWebHistory } from 'vue-router';
import AllPostsView from '../views/AllPostsView.vue';
import LoginView from '../views/LoginView.vue';
import SignupView from '../views/SignupView.vue';
import ProfileView from '../views/ProfileView.vue';
import CreatePostView from '../views/CreatePostView';
import ProfilePostsView from '../views/ProfilePostsView';

const routes = [
  {
    path: '/',
    component: AllPostsView,
  },
  {
    path: '/login',
    component: LoginView,
  },
  {
    path: '/signup',
    component: SignupView,
  },
  {
    path: '/profile',
    component: ProfileView,
    children: [
      { path: 'create', component: CreatePostView },
      { path: '', component: ProfilePostsView },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
