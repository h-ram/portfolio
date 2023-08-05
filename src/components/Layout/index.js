import "./style.scss";
import SideBar from "../SideBar"
import { Outlet } from "react-router-dom";
function Layout(){
    return (
    <>
        <SideBar/>
        <div className="page">
            <span className="tags top-tags">&lt;body&gt;</span>
            <Outlet/>
            <span className="tags bottom-tags">&lt;/body&gt;</span>
        </div>
    </>)
}

export default Layout