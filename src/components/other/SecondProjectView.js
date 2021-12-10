import { Grid } from '@mui/material';
import React from 'react';
import { SecondaryProjects } from './SecondaryProjects';

export const SecondProjectView = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
                <SecondaryProjects />
            </Grid>
            <Grid item xs={12} md={4}>
                <SecondaryProjects />
            </Grid>
            <Grid item xs={12} md={4}>
                <SecondaryProjects />
            </Grid>
        </Grid>
    );
};
