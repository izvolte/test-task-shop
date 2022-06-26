import * as React from 'react'

import MainLayout from "@/layouts/MainLayout";

const Catalog = React.lazy(() => import("@/views/Catalog"))
const Cart = React.lazy(() => import("@/views/Cart"))

const routes = [
	{
		element: <MainLayout />,
		path: '/test-task-shop/',
		children: [
			{
				index: true,
				element: <Catalog/>,
			},
			{
				element: <Cart/>,
				path: '/test-task-shop/cart',
			},
		]
	},
	{
		element: <h1>Not found</h1>,
		path: '*',
	},
]

export default routes