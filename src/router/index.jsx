import * as React from 'react'

const Catalog = React.lazy(() => import("@/views/Catalog"))
const Checkout = React.lazy(() => import("@/views/Checkout"))

const routes = [
	{
		index: true,
		element: <Catalog/>,
		path: '/',
	},
	{
		element: <Checkout/>,
		path: '/checkout',
	},
	{
		element: <h1>Not found</h1>,
		path: '*',
	},
]

export default routes