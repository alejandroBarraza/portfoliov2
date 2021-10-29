import React from 'react';

import { AppBar, Box, Toolbar, Typography } from '@mui/material';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CodeIcon from '@mui/icons-material/Code';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { cyan, blue } from '@mui/material/colors';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const styles = {
    // popUpItem: {
    //     '& .css-6hp17o-MuiList-root-MuiMenu-list': {
    //         // backgroundColor: 'var(--blue-color-secondary)',
    //         color: cyan[500],
    //     },
    // },
    // navbarElements: {
    //     '& h6': {
    //         '&::before': {
    //             content: '"0" counter(item) "."',
    //             marginRight: '5px',
    //             color: cyan[500],
    //             textAling: 'right',
    //         },
    //     },
    // },
};

export const Navbar = () => {
    // functions
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
        console.log(event.currentTarget);
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
                    <IconButton
                        size='large'
                        edge='end'
                        color='inherit'
                        aria-label='menu'
                        sx={{ marginLeft: 'auto', display: { md: 'none' } }}>
                        <MenuIcon onClick={handleMenu} />
                    </IconButton>

                    <Box sx={{ marginLeft: 'auto', display: { xs: 'none', md: 'flex' } }}>
                        <Box sx={{ display: 'flex' }}>
                            <Typography sx={{ mr: 0.8 }} variant='caption'>
                                0.1
                            </Typography>
                            <Typography variant='caption'>About</Typography>
                        </Box>
                        <Box sx={{ ml: 2, display: 'flex', textAlign: 'center' }}>
                            <Typography sx={{ mr: 0.8 }} variant='caption'>
                                0.2
                            </Typography>
                            <Typography variant='caption'>about</Typography>
                        </Box>
                        <Box sx={{ ml: 2, display: 'flex', textAlign: 'center' }}>
                            <Typography sx={{ mr: 0.8 }} variant='caption'>
                                0.3
                            </Typography>
                            <Typography variant='caption'>About</Typography>
                        </Box>
                    </Box>
                    <Menu
                        color={blue[900]}
                        id='menu-appbar'
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}>
                        <MenuItem onClick={handleClose}>about me</MenuItem>
                        <MenuItem onClick={handleClose}>iconos</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
