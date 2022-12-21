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
                path: '/bookdetails',
                element: <BookDetails></BookDetails>
            },
            {
                path: '/allbooks',
                element: <AllBooks></AllBooks>
            }
        ]
    }
])