import type { ReactNode } from "react";
import { createTheme, MantineProvider } from '@mantine/core';
import { generateColors } from "@mantine/colors-generator";

const theme = createTheme({
    colors: {
        cremeAccent: generateColors('#FDF3F1'),
        ochreAccent: generateColors('#FEBC94'),
        navyAccent: generateColors('#252B42'),
        redAccent: generateColors('#A01A10'),
        greenAccent: generateColors('#96BA7B'),
        greyAccent: generateColors('#737373')
    },

    fontFamily: 'DM Sans, sans-serif'
});

export default function ThemeProvider({ children }: { children: ReactNode }) {
    return (
        <MantineProvider theme={theme}>
            {children}
        </MantineProvider>
    );
}