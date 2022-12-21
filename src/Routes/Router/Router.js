import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import AllBooks from "../../Pages/AllBooks/AllBooks";
import BookDetails from "../../Pages/BookDetails/BookDetails";
import Home from "../../Pages/Home/Home/Home";

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
                element: <AllBooks></AllBooks>
            },
        ]
    }
])