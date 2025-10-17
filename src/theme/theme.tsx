// React types
import type { ReactNode } from "react";

// Mantine essentials
import { createTheme, MantineProvider } from '@mantine/core';

// Custom theme configuration
const theme = createTheme({
    colors: {
        // [0] the first index is the required color accent
        primaryColor: [
            "#96ba7b", "#f0fae9", "#e4f0dc", "#caddbc", "#aeca98", "#86b067", "#7eab5c", "#6b954c", "#5e8541", "#4e7333"
        ],
        secondaryColor: [
            "#fdf3f1", "#f3ddd9", "#ebb7ac", "#e58f7d", "#df6d55", "#dc583b", "#db4c2e", "#c23e22", "#ae361d", "#982b16"
        ],
        titleColor: [
            "#252b42", "#f2f3f8", "#e2e3e9", "#c2c5d3", "#9fa5bf", "#828aad", "#6f79a2", "#65709e", "#555f8b", "#4b547d",
        ],
        dangerColor: [
            "#a01a10", "#fdeeec", "#f5d8d6", "#efada8", "#ea8077", "#e65a4d", "#e44333", "#e43725", "#ca2a1a", "#b42416",
        ],
        descriptionColor: [
            "#737373", "#fef2f5", "#eae6e7", "#cdcdcd", "#b2b2b2", "#9a9a9a", "#8b8b8b", "#848484", "#676465", "#5e5457"
        ],

        // OTHER
        ochreAccent: [
            "#febc94", "#fff1e4", "#ffe1ce", "#fd9f67", "#fc833a", "#fc711e", "#fc670e", "#e15602", "#c94b00", "#af3f00"
        ],
    },

    fontFamily: 'DM Sans, sans-serif'
});

// Wrapper Provider component to wrap the entire app with the theme
export default function ThemeProvider({ children }: { children: ReactNode }) {
    return (
        <MantineProvider theme={theme} withGlobalClasses>
            {children}
        </MantineProvider>
    );
}