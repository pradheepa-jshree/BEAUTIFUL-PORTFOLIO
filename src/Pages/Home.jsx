import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import {StarBackground} from "@/components/StarBackground";

export const Home = () => {
    return <div className="min-h-screen ">
        {/*theme toggle*/}
        <ThemeToggle />

        {/*background effects*/}
        <StarBackground/>

        {/*navbar */}
        <Navbar />

        {/* main content*/}

        {/* footer */}
    </div>;
};