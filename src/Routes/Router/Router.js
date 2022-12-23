import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import AllBooks from "../../Pages/AllBooks/AllBooks";
import BookDetails from "../../Pages/BookDetails/BookDetails";
import Categories from "../../Pages/Categories/Categories";
import Category from "../../Pages/Category/Category";
import Home from "../../Pages/Home/Home/Home";
import Error from "../../Pages/Shared/Error/Error";

export const Router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/bookdetails/:id',
                element: <BookDetails></BookDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/book/${params.id}`)
            },
            {
                path: '/allbooks',
                element: <AllBooks></AllBooks>,
                loader: () => fetch('http://localhost:5000/books')
            },
            {
                path: '/categories',
                element: <Categories></Categories>,
                loader: () => fetch('http://localhost:5000/categories')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '*',
                element: <Error></Error>
            }
        ]
    }
])