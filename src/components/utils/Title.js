import React from 'react';
import { Typography } from '@mui/material';

export const Title = ({ title, variant, sx }) => {
    return (
        <Typography variant={variant}>
            {title} sx={sx}
        </Typography>
    );
};
