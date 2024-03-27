import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/index.vue'
import Mainview from '@/views/mainview.vue'
import Lightcontrol from '@/views/lightcontrol.vue'
import Electric from '@/views/electricHistroy.vue'
import Temp from '@/views/tempHistory.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'index',
		// redirect: '/mainview',
		component: Index
	},
	{
		path: '/index',
		component: Index,
		children: [{
				path: '/mainview',
				component: Mainview,
			},
			{
				path: '/lightcontrol',
				component: Lightcontrol
			},
			{
				path:'/electricHistroy',
				component:Electric
			},
			{
				path:'/tempHistory',
				component:Temp
			}
		]
	}
]

const router = new VueRouter({
  routes
})

export default router
