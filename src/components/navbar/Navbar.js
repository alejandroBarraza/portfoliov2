import React from 'react';

import { AppBar, Box, Toolbar, useMediaQuery } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import CodeIcon from '@mui/icons-material/Code';
import { useTheme } from '@mui/material/styles';
import { MenuElements } from './MenuElements';
import { MenuDesktop } from './MenuDesktop';
import { Link as LinkScroll } from 'react-scroll';
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
        <Box sx={{ flexGrow: 1, position: 'sticky', top: 0, zIndex: 3 }}>
            <AppBar
                position='static'
                sx={{ backgroundColor: 'var(--blue-color)', boxShadow: 'none', display: 'flex' }}
            >
                <Toolbar>
                    <LinkScroll
                        activeClass='active'
                        to='home'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <CodeIcon sx={{ cursor: 'pointer' }} />
                    </LinkScroll>
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
