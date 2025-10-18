// Mantine Carousel Component
import { Carousel } from '@mantine/carousel';

// Custom Components
import ProfileCard from "./ProfileCard.tsx";

// Type definitions
import type { ProfileCardData } from "../../types/dataTypes.ts";

interface ProfileCarouselProps {
    slides: ProfileCardData[];
}

export default function ProfileCarousel({ slides }: ProfileCarouselProps) {
    return (
        <Carousel
            py={36}
            slideSize={{ base: '100%', sm: '50%', md: '33.333%', lg: '25%' }}
            slideGap={{ base: 20, lg: 28 }}
            controlsOffset="xs"
            controlSize={50}
            withControls
            withIndicators={false}
            aria-label="Instructor profiles carousel"
            aria-roledescription="carousel"
        >
            {slides.map((slide: ProfileCardData, index: number) => (
                <Carousel.Slide
                    pb={20}
                    key={slide.name}
                    aria-label={`Slide ${index + 1} of ${slides.length}: ${slide.name}, ${slide.profession}`}
                >
                    <ProfileCard slideData={slide} />
                </Carousel.Slide>
            ))}
        </Carousel>
    );
}
