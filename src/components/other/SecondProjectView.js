import { Grid } from '@mui/material';
import React from 'react';
import { SecondaryProjects } from './SecondaryProjects';

export const SecondProjectView = () => {
    return (
        <Grid container spacing={2} alignItems='stretch'>
            <Grid item xs={12} md={4} sx={{ display: 'flex' }}>
                <SecondaryProjects
                    title='Neumorphism Timer'
                    description='A Neumorphism Vanilla JS Timer, built in OOP paradigm and SVG animation .'
                    tech={['JavaScript', 'CSS']}
                    githubLink='https://github.com/alejandroBarraza/timer'
                    externalLink='https://laughing-leavitt-d26ec1.netlify.app/'
                />
            </Grid>
            <Grid item xs={12} md={4} sx={{ display: 'flex' }}>
                <SecondaryProjects
                    title='Interactive Cmd APP'
                    description='A beautiful and intertactive console App built in Nodejs using inquire package.'
                    tech={['NodeJs', 'Inquirer', 'colors']}
                    githubLink='https://github.com/alejandroBarraza/todoList-consoleApp'
                    externalLink={''}
                />
            </Grid>
            <Grid item xs={12} md={4} sx={{ display: 'flex' }}>
                <SecondaryProjects
                    title='Warehouse Management System'
                    description='A Management sysmtem app. Connect 2 python console app (RR.HH and Warehouse) with main wab page built in .net 5 using RabbitMQ as Router Message queue.'
                    tech={['.NET', 'Python', 'RabbitMQ', 'SQLSERVER']}
                    githubLink='https://github.com/alejandroBarraza/maintenance'
                    externalLink={''}
                />
            </Grid>
        </Grid>
    );
};
