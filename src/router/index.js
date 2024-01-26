import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView
		},
		{
			path: '/projects',
			name: 'projects',
			component: () => import('../views/ProjectsView.vue')
		},
		{
			path: '/projects/:project',
			name: 'details',
			component: () => import('../views/DetailsView.vue')
		}
	]
});

export default router;
