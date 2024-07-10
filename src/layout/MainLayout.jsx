import Brand from "../components/Brand";
import Drawer from "../components/Drawer";
import Socials from "../components/Socials";


function MainLayout({children}) {

    return (
        <div className="min-h-screen bg-slate-800">
            <Brand />
            <Drawer />
            <Socials />
            {children}
        </div>
    );
}
export default MainLayout;