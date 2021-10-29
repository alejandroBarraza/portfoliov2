import React from 'react';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import './App.css';
import { AppRouter } from './routers/AppRouter';

let theme = createTheme({
    typography: {
        fontFamily: 'Public Sans',
    },
});

//automatically change font size
theme = responsiveFontSizes(theme);

export const App = () => {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <AppRouter />
            </ThemeProvider>
        </div>
    );
};
