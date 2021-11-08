import { Container } from '@mui/material';
import React from 'react';
import { About } from '../components/about/About';
import { Hero } from '../components/hero/Hero';
import { Navbar } from '../components/navbar/Navbar';

export const Home = () => {
    return (
        <Container>
            <Navbar />
            <Hero />
            <About />
        </Container>
    );
};
