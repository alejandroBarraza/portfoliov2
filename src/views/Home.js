import { Container } from '@mui/material';
import React from 'react';
import { DescriptionInfo } from '../components/about/Description';
import { Hero } from '../components/hero/Hero';
import { Navbar } from '../components/navbar/Navbar';

export const Home = () => {
    return (
        <Container>
            <Navbar />
            <Hero />
            <DescriptionInfo />
        </Container>
    );
};
