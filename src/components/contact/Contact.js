import React from 'react';
import { Box, Typography } from '@mui/material';
import { ButtonCustom } from '../utils/ButtonCustom';
import { Title } from '../utils/Title';
export const Contact = () => {
    return (
        <Box sx={{ mt: 16, textAlign: 'center' }}>
            <Typography variant='h3' sx={{ mb: 4, color: 'white', fontWeight: 'bold' }}>
                Get in touch
            </Typography>
            <ButtonCustom>
                <Typography variant='subtitle2'>Contact me</Typography>
            </ButtonCustom>
        </Box>
    );
};
