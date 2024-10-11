import Header from "../../Header";
import { Outlet } from "react-router-dom";

const MainLayout = ()=>{
    return(
        <div className="main_layout-container">
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    )
    }

    export default MainLayout;