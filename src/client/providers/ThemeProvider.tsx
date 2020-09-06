import React, { createContext, useState, FC } from 'react';

type ThemeMode = 'light' | 'dark';
type ThemeProps = '--bg' | '--bg-alt' | '--text' | '--accent';
type Theme = {
    [k in ThemeProps]: string;
};

export const ThemeContext = createContext<{
    themeMode: ThemeMode;
    setThemeMode: React.Dispatch<React.SetStateAction<ThemeMode>>;
}>(null);

export const themeModes: { [k in ThemeMode]: Theme } = {
    dark: {
        '--bg': '#0f0e0e',
        '--bg-alt': '#161414',
        '--text': '#fff',
        '--accent': '#3188df',
    },
    light: {
        '--bg': '#f1f1f1',
        '--bg-alt': '#e0e0e0',
        '--text': '#0f0e0e',
        '--accent': '#3188df',
    },
};

interface Props {
    children: React.ReactNode;
}

export const ThemeProvider: FC<Props> = ({ children }: Props) => {
    const [themeMode, setThemeMode] = useState<ThemeMode>('dark');

    return <ThemeContext.Provider value={{ themeMode, setThemeMode }}>{children}</ThemeContext.Provider>;
};
