import "@/assets/css/layout.css"
import HeaderLayout from "./HeaderLayout";
import SidebarLayout from "./SidebarLayout";
import MainLayout from "./MainLayout";

export default function AppLayout({ children }) {
    return (
        <>
            <div className="app">
                <HeaderLayout/>
                <SidebarLayout/>
                <MainLayout>
                    {children}
                </MainLayout>
            </div>
        </>
    );
}