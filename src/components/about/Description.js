import React from 'react';
import { Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

export const DescriptionInfo = () => {
    return (
        <Box>
            <Typography variant='p' sx={{ color: grey[500], lineHeight: '1.5rem' }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim repellendus libero
                est, nihil voluptates error placeat obcaecati fugit praesentium minus impedit iste
                cum, quasi ab eaque et quis tempore? Ab tempora aperiam enim temporibus recusandae
                maxime soluta sequi, cum repellat cumque sit fugit id incidunt nulla at molestias
                praesentium quidem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis,
                voluptate.
            </Typography>
        </Box>
    );
};
