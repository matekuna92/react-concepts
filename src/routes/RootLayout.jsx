import { Outlet } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import { AuthContextProvider } from "../context/AuthContext.jsx";

const RootLayout = () => {
    // nested routes render their content in Outlet
    return (
        <>
            <AuthContextProvider>
                <MainHeader/>
                <Outlet/>
            </AuthContextProvider>
        </>
    );
};

export default RootLayout;
