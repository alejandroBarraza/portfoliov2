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
            <ProjectsView />
            <ProjectsView />
            <ProjectsView />
        </Container>
    );
};
