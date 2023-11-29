import { Outlet } from "react-router-dom";
import MainHeader from "./MainHeader";


const RootLayout = () => {

    // nested routes render their content in Outlet
    return (
        <>
            <MainHeader />
            <Outlet />
        </>
    );
 }
 
 export default RootLayout;