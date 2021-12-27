import { Grid } from '@mui/material';
import React from 'react';
import { SecondaryProjects } from './SecondaryProjects';

export const SecondProjectView = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
                <SecondaryProjects
                    title='Neumorphism Timer'
                    description='A Neumorphism Vanilla JS Timer, built in OOP paradigm and SVG animation .'
                    tech={['JavaScript', 'CSS']}
                    githubLink='https://github.com/alejandroBarraza/timer'
                    externalLink='https://laughing-leavitt-d26ec1.netlify.app/'
                />
            </Grid>
            <Grid item xs={12} md={4}>
                <SecondaryProjects
                    title='Neumorphism Timer'
                    description='A Neumorphism Vanilla JS Timer, built in OOP paradigm and SVG animation .'
                    tech={['React', 'Strapi', 'pene']}
                    githubLink=''
                />
            </Grid>
            <Grid item xs={12} md={4}>
                <SecondaryProjects
                    title='Neumorphism Timer'
                    description='A Neumorphism Vanilla JS Timer, built in OOP paradigm and SVG animation .'
                    tech={['React', 'Strapi', 'pene']}
                    githubLink=''
                />
            </Grid>
        </Grid>
    );
};
