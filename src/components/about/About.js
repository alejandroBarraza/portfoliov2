import React from 'react';
import { Container, Grid } from '@mui/material';
import { DescriptionInfo } from './Description';
import { Picture } from './Picture';
export const About = () => {
    return (
        <Container maxWidth='md' sx={{ my: 4 }}>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <DescriptionInfo />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Picture />
                </Grid>
            </Grid>
        </Container>
    );
};
