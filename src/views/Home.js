import { Container } from '@mui/material';
import React from 'react';
import { About } from '../components/about/About';
import { Hero } from '../components/hero/Hero';
import { Navbar } from '../components/navbar/Navbar';
import { ProjectsView } from '../components/projects/ProjectsView';

export const Home = () => {
    return (
        <Container>
            <Navbar />
            <Hero />
            <About />
            <ProjectsView
                url={
                    'https://www.analyticssteps.com/backend/media/thumbnail/854054/9976175_1625576836_Top-10%20data%20science%20projects%20for%20beginnersArtboard%201.jpg'
                }
                titleProject={'Project 1'}
                description='A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm,
                and more. Available on Visual Studio Marketplace, Package Control,
                Atom Package Manager, and npm'
                githubLink='https://github.com/'
                externalLink='https://www.google.com/'
            />
        </Container>
    );
};
