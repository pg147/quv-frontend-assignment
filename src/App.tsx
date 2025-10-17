// UI Components
import { Footer, Navbar } from "./components";

// Sections
import HeroSection from "./sections/HeroSection.tsx";
import FeaturesSection from "./sections/FeaturesSection.tsx";
import NewsletterSection from "./sections/NewsletterSection.tsx";
import InstructorsProfileSection from "./sections/InstructorsProfileSection.tsx";

export default function App() {
    return(
        <>
            <Navbar />

            <main>
                <HeroSection />
                <FeaturesSection />
                <InstructorsProfileSection />
                <NewsletterSection />
            </main>

            <Footer />
        </>
    );
}