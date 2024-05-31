import { HistoryLayout, MainLayout, PrintLayout, AdminLayout } from "components";
import { PATH } from "constant/config";
import { Admin, AdminConfig, AdminViewFeedback, AdminPrinter } from "pages";
import { Home, Login, PrintZero, PrintOne, SignUp, User, About, PrintTwo, HistoryPrint, HistoryBuy, LoginRoute } from "pages";
import { RouteObject } from "react-router-dom";

export const router: RouteObject[] = [
    {
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home /> 
            },
            {
                path: PATH.login,
                element: <Login />
            },
            {
                path: PATH.loginRoute,
                element: <LoginRoute />
            },
            {
                path: PATH.signUp,
                element: <SignUp />
            },
            {
                path: PATH.user,
                element: <User />
            },
            {
                path: PATH.about,
                element: <About />
            }
        ]
    },
    {
        element: <PrintLayout />,
        children: [
            {
                path: PATH.printZero,
                element: <PrintZero />
            },
            {
                path: PATH.printOne,
                element: <PrintOne />
            },
            {
                path: PATH.printTwo,
                element: <PrintTwo />
            }
        ]
    },
    {
        element: <AdminLayout />,
        children: [
            {
                path: PATH.admin,
                element: <Admin />
            },
            {
                path: PATH.adminConfig,
                element: <AdminConfig />
            },
            {
                path: PATH.adminViewFeedback,
                element: <AdminViewFeedback />
            },
            {
                path: PATH.adminPrinter,
                element: <AdminPrinter />
            },
        ]
    },
    {
        element: <HistoryLayout />,
        children: [
            {
                path: PATH.historyPrint,
                element: <HistoryPrint />
            },
            {
                path: PATH.historyBuy,
                element: <HistoryBuy />
            },
        ]
    }
];