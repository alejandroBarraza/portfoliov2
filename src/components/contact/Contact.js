import React from 'react';
import { Box, Typography } from '@mui/material';
import { ButtonCustom } from '../utils/ButtonCustom';
export const Contact = () => {
    return (
        <Box
            sx={{
                mt: 16,
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Typography variant='h3' sx={{ mb: 2, color: 'white', fontWeight: 'bold' }}>
                Get in touch
            </Typography>
            <Box
                component='img'
                sx={{ height: '120px', width: '120px' }}
                alt='profile-pic'
                src='/profile.png'
            />
            <ButtonCustom>
                <Typography variant='subtitle2'>Contact me</Typography>
            </ButtonCustom>
        </Box>
    );
};
