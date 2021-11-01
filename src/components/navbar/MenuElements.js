import React from 'react';
import Menu from '@mui/material/Menu';
import { MenuItem, Typography } from '@mui/material';
import { cyan } from '@mui/material/colors';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const styles = {
    menuColor: {
        '& .MuiPaper-root': {
            backgroundColor: 'var(--blue-color-secondary)',

            '& li': {
                color: 'common.white',
                transition: 'color 0.3s ease-in-out',

                '&:hover': {
                    color: cyan[500],
                },
            },
        },
        '& .MuiListItemText-primary': {
            color: cyan[500],
        },
    },

    icon: {
        position: 'absolute',
        top: 0,
        right: 0,
    },
};

export const MenuElements = ({ handleClose, anchorEl }) => {
    return (
        <div>
            <Menu
                sx={styles.menuColor}
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
                <MenuItem onClick={handleClose}>
                    <CloseRoundedIcon sx={{ ml: 'auto' }} />
                </MenuItem>

                <MenuItem onClick={handleClose}>
                    <Typography sx={{ pr: 1, color: cyan[500] }}>01.</Typography>
                    <Typography> About</Typography>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Typography sx={{ pr: 1, color: cyan[500] }}>02.</Typography>
                    <Typography>Experience</Typography>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Typography sx={{ pr: 1, color: cyan[500] }}>03.</Typography>
                    <Typography>Projects</Typography>
                </MenuItem>
            </Menu>
        </div>
    );
};
