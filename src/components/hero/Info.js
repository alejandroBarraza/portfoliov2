import { Typography, Box, Container } from '@mui/material';
import React from 'react';
import { cyan, grey } from '@mui/material/colors';
import { Social } from '../social/Social';

const styles = {
    boxContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '90vh',
    },
};
export const Info = ({ name }) => {
    return (
        <div>
            <Container>
                <Box sx={styles.boxContainer}>
                    <Typography sx={{ my: 1 }} color='common.white' variant='h6'>
                        Hi , my name is
                    </Typography>
                    <Typography variant='h1' sx={{ color: cyan[500], fontWeight: 'bold' }}>
                        {name}.
                    </Typography>
                    <Typography variant='h2' color='common.white'>
                        I just build things.
                    </Typography>
                    <Typography variant='subtitle1' sx={{ mt: 1, color: grey[400] }}>
                        I'm a software engineer who enjoys building ideas with beautifuls UI 💅.
                    </Typography>
                    <Social sx={{ alignItems: 'flex-end' }} />
                </Box>
            </Container>
        </div>
    );
};
