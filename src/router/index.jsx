import * as React from 'react'

import MainLayout from "@/layouts/MainLayout";

const Catalog = React.lazy(() => import("@/views/Catalog"))
const Cart = React.lazy(() => import("@/views/Cart"))

const routes = [
	{
		element: <MainLayout />,
		index: true,
		path: '/',
		children: [
			{
				index: true,
				element: <Catalog/>,
			},
			{
				element: <Cart/>,
				path: '/cart',
			},
		]
	}
]

export default routes