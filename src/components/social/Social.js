import React from 'react';
import { SpeedDial, SpeedDialIcon, SpeedDialAction, IconButton } from '@mui/material';
import { cyan } from '@mui/material/colors';
import { LinkedIn } from '@mui/icons-material';
import { Instagram } from '@mui/icons-material';
import GitHub from '@mui/icons-material/GitHub';

const actions = [
    {
        icon: (
            <IconButton target='_blank' rel='noreferrer' href='https://github.com/alejandroBarraza'>
                <GitHub />
            </IconButton>
        ),
        name: 'GitHub',
    },
    {
        icon: (
            <IconButton
                target='_blank'
                rel='noreferrer'
                href='https://www.linkedin.com/in/alejandro-barraza-5849a716a/'
            >
                <LinkedIn />
            </IconButton>
        ),
        name: 'Linkedin',
    },
    {
        icon: (
            <IconButton
                target='_blank'
                rel='noreferrer'
                href='https://www.instagram.com/alejnbarrazaa/?hl=es'
            >
                <Instagram />
            </IconButton>
        ),
        name: 'Instagram',
    },
];
export const Social = () => {
    return (
        <SpeedDial
            FabProps={{
                size: 'small',
                style: { backgroundColor: cyan[500] },
            }}
            ariaLabel='SpeedDial basic example'
            icon={<SpeedDialIcon />}
        >
            {actions.map((action) => (
                <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    sx={{ margin: '0 0 8px 0' }}
                />
            ))}
        </SpeedDial>
    );
};
