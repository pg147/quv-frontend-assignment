// Mantine Carousel Component
import { Carousel } from '@mantine/carousel';

// Custom Components
import ProfileCard from "./ProfileCard.tsx";

// Type definitions
import type { ProfileCardData } from "../../types/componentTypes.ts";

export default function ProfileCarousel({ slides }: { slides: ProfileCardData[] }) {
    return (
        <Carousel
            py={36}
            slideSize={{ base: '100%', sm: '50%', md: '33.333%', lg: '25%' }}
            slideGap={{ base: 20, lg: 28 }}
            controlsOffset="xs"
            controlSize={50}
            withControls
            withIndicators={false}
        >
            {slides.map((slide: ProfileCardData, index: number) => (
                <Carousel.Slide pb={20} key={index}>
                    <ProfileCard slideData={slide} />
                </Carousel.Slide>
            ))}
        </Carousel>
    );
}
