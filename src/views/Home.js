import { Container } from '@mui/material';
import React from 'react';
import { About } from '../components/about/About';
import { Hero } from '../components/hero/Hero';
import { Navbar } from '../components/navbar/Navbar';
import { CardProjectDekstop } from '../components/projects/CardProjectDekstop';
// import { CardProjectMobile } from '../components/projects/CardProjectMobile';

export const Home = () => {
    return (
        <Container>
            <Navbar />
            <Hero />
            <About />
            {/* <CardProjectMobile /> */}
            <CardProjectDekstop />
        </Container>
    );
};
