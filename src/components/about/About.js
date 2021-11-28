import React from 'react';
import { Container, Grid } from '@mui/material';
import { DescriptionInfo } from './Description';
import { Picture } from './Picture';
import { TechList } from './TechList';
export const About = () => {
    return (
        <Container maxWidth='md' sx={{ my: 8 }}>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <DescriptionInfo />
                    <TechList />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Picture />
                </Grid>
            </Grid>
        </Container>
    );
};
// rgb color
// linear-gradient(to right bottom, rgb(0, 127, 255), rgb(0, 89, 178) 120%);
