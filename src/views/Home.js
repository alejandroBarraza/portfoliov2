import { Container } from '@mui/material';
import React from 'react';
import { About } from '../components/about/About';
import { Hero } from '../components/hero/Hero';
import { Navbar } from '../components/navbar/Navbar';
import { SecondProjectView } from '../components/other/SecondProjectView';
import { ProjectsView } from '../components/projects/ProjectsView';
import { Title } from '../components/utils/Title';

export const Home = () => {
    return (
        <Container>
            <Navbar />
            <Hero />
            <Container maxWidth='md'>
                <Title number='01.' title='About Me' />
                <About />
            </Container>
            <Container maxWidth='md'>
                <Title number='02.' title='Some Things I’ve Built' />
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
                <ProjectsView
                    url={
                        'http://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2019/06/Data-Scientist-Projects-V2.png'
                    }
                    titleProject={'Project 2'}
                    description='A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm,
                and more. Available on Visual Studio Marketplace, Package Control,
                Atom Package Manager, and npm'
                    githubLink='https://github.com/'
                    externalLink='https://www.google.com/'
                />
                <ProjectsView
                    url={'https://blog.hotmart.com/blog/2018/04/BLOG_data-science-670x419-1.png'}
                    titleProject={'Project 3'}
                    description='A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm,
                and more. Available on Visual Studio Marketplace, Package Control,
                Atom Package Manager, and npm'
                    githubLink='https://github.com/'
                    externalLink='https://www.google.com/'
                />
            </Container>
            <Container maxWidth='md'>
                <Title title='Some Other Projects' justify={'center'} padding={'0 0 4rem 0 '} />
                <SecondProjectView />
            </Container>
        </Container>
    );
};
