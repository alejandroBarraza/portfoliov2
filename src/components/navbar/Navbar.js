import React from 'react';

import { AppBar, Box, Toolbar, useMediaQuery } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import CodeIcon from '@mui/icons-material/Code';
import { useTheme } from '@mui/material/styles';
import { MenuElements } from './MenuElements';
import { MenuDesktop } from './MenuDesktop';

// const styles = {
//     popUpItem: {
//         '& .css-6hp17o-MuiList-root-MuiMenu-list': {
//             // backgroundColor: 'var(--blue-color-secondary)',
//             color: cyan[500],
//         },
//     },
//     navbarElements: {
//         '& h6': {
//             '&::before': {
//                 content: '"0" counter(item) "."',
//                 marginRight: '5px',
//                 color: cyan[500],
//                 textAling: 'right',
//             },
//         },
//     },
// };

export const Navbar = () => {
    const theme = useTheme();
    const screeSize = useMediaQuery(theme.breakpoints.up('md'));
    // functions

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position='static'
                sx={{ backgroundColor: 'var(--blue-color)', boxShadow: 'none', display: 'flex' }}>
                <Toolbar>
                    <CodeIcon />
                    {screeSize ? (
                        <MenuDesktop />
                    ) : (
                        <MenuIcon sx={{ marginLeft: 'auto' }} onClick={handleMenu} />
                    )}

                    <MenuElements handleClose={handleClose} anchorEl={anchorEl} />
                </Toolbar>
            </AppBar>
        </Box>
    );
};
