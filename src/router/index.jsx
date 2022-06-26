import * as React from 'react'
import {Navigate} from 'react-router-dom';

import MainLayout from "@/layouts/MainLayout";

const Catalog = React.lazy(() => import("@/views/Catalog"))
const Cart = React.lazy(() => import("@/views/Cart"))

const routes = [
	{
		path: '/',
		element: <Navigate to={'/test-task-shop/'} replace/>,
	},
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