import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import AddBook from "../../Pages/AddBook/AddBook";
import AllAuthor from "../../Pages/AllAuthor/AllAuthor";
import AllBooks from "../../Pages/AllBooks/AllBooks";
import Author from "../../Pages/Author/Author";
import BookDetails from "../../Pages/BookDetails/BookDetails";
import Cart from "../../Pages/Cart/Cart";
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
                loader: ({ params }) => fetch(`https://chetona-server-raihan512.vercel.app/book/${params.id}`)
            },
            {
                path: '/allbooks',
                element: <AllBooks></AllBooks>,
                loader: () => fetch('https://chetona-server-raihan512.vercel.app/books')
            },
            {
                path: '/addbook',
                element: <AddBook></AddBook>
            },
            {
                path: '/categories',
                element: <Categories></Categories>,
                loader: () => fetch('https://chetona-server-raihan512.vercel.app/categories')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://chetona-server-raihan512.vercel.app/category/${params.id}`)
            },
            {
                path: "/authors",
                element: <AllAuthor></AllAuthor>,
                loader: () => fetch("https://chetona-server-raihan512.vercel.app/authors")
            },
            {
                path: "/author/:id",
                element: <Author></Author>,
                loader: ({ params }) => fetch(`https://chetona-server-raihan512.vercel.app/author/${params.id}`)
            },
            {
                path: '/cart',
                element: <Cart></Cart>
            },
            {
                path: '*',
                element: <Error></Error>
            }
        ]
    }
])