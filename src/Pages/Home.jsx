import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import {StarBackground} from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";


export const Home = () => {
    return <div className="min-h-screen ">
        {/*theme toggle*/}
        <ThemeToggle />

        {/*background effects*/}
        <StarBackground/>

        {/*navbar */}
        <Navbar />

        {/* main content*/}
        <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
        </main>

        {/* footer */}
    </div>;
};