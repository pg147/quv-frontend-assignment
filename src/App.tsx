// UI Components
import { Footer } from "./components";

// Sections
import HeroSection from "./sections/HeroSection.tsx";
import FeaturesSection from "./sections/FeaturesSection.tsx";

export default function App() {
    return(
        <>
            <main>
                <HeroSection />
                <FeaturesSection />
            </main>

            <Footer />
        </>
    );
}