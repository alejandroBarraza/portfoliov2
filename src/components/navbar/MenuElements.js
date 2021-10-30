import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { blue } from '@mui/material/colors';
export const MenuElements = ({ handleClose, anchorEl }) => {
    return (
        <div>
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
        </div>
    );
};
