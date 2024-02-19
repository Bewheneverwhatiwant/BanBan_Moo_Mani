import { createBrowserRouter } from "react-router-dom";
import ForOutlet from "./pages/ForOutlet";
import MainPage from "./pages/MainPage/MainPage";
import CurrentHouseWork from './pages/MainPage/CurrentHouseWork/CurrentHouseWork';
import DivideHouseWork from './pages/MainPage/CurrentHouseWork/DivideHouseWork/DivideHoseWork';
import WriteHouseWork from './pages/MainPage/CurrentHouseWork/WriteHouseWork/WriteHouseWork';
import SignUp from './pages/MainPage/LogIn/SignUp/SignUp';
import LogIn from './pages/MainPage/LogIn/LogIn';
import MyPage from './pages/MainPage/MyPage/MyPage';
import RankPage from './pages/MainPage/RankPage/RankPage';

export default createBrowserRouter([
    {
        path: "/",
        element: <ForOutlet />,
        children: [
            {
                path: "",
                element: <MainPage />
            },
            {
                path: "/currenthousework",
                element: <CurrentHouseWork />
            },
            {
                path: "/dividehousework",
                element: <DivideHouseWork />
            },
            {
                path: "/writehousework",
                element: <WriteHouseWork />
            },
            {
                path: "/login",
                element: <LogIn />
            },
            {
                path: "/signup",
                element: <SignUp />
            },
            {
                path: "/mypage",
                element: <MyPage />
            },
            {
                path: "/rankpage",
                element: <RankPage />
            }

        ]
    }
]);