import Home from './Routes/Home.svelte'
import Blog from './Routes/Blog.svelte'
import NotFound from './Routes/404.svelte'
import Single from './Routes/Single.svelte'

export default [
	{
		path: '/',
		component: Home
	},
	{
		path: '/blog',
		component: Blog
	},
    {
		path: '/blog/:id',
		component: Single,
	},
	{
		path: '*',
		component: NotFound
	}
]