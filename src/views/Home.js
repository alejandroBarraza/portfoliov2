import { Container } from '@mui/material'
import React from 'react'
import { About } from '../components/about/About'
import { Contact } from '../components/contact/Contact'
import { Hero } from '../components/hero/Hero'
import { Navbar } from '../components/navbar/Navbar'
import { SecondProjectView } from '../components/other/SecondProjectView'
import { ProjectsView } from '../components/projects/ProjectsView'
import { Title } from '../components/utils/Title'

export const Home = () => {
    return (
        <Container>
            <Navbar />
            <Hero />
            <Container maxWidth='md' id='aboutMe'>
                <Title number='01.' title='About Me' />
                <About />
            </Container>
            <Container maxWidth='md' id='projects'>
                <Title number='02.' title='Some Things I’ve Built' />
                <ProjectsView
                    url={'/headlessCms.png'}
                    titleProject={'Aun te espero'}
                    description='A minimal SPA App. Built with Headless CMS Strapi, React, PostgreSQL and Graphql for a non profit company Mutual.'
                    githubLink='https://github.com/alejandroBarraza/mutual-frontend/tree/main/src'
                    tech={['React', 'ApolloClient', 'Mui', 'Strapi', 'Graphql', 'PostgreSQL']}
                />
                <ProjectsView
                    url={
                        'https://res.cloudinary.com/dzq3t5xj3/image/upload/c_scale,h_1080,w_1920/v1669041400/Screen_Shot_2022-11-21_at_23.36.07_kyddqa.png'
                    }
                    titleProject={'AuthService'}
                    description='App for registering with authentication using JWT. It also allows users to log in using
OAuth2.0 to access Google’s authentication API. Additionally, it allows the reset of passwords making use of the
Node-mailer service by attaching a link in the email provided.'
                    githubLink='https://github.com/alejandroBarraza/login-backend'
                    externalLink='https://login-client-react.herokuapp.com/login'
                    tech={['React', 'ApolloClient', 'Mui', 'Strapi', 'Graphql', 'PostgreSQL']}
                />
                <ProjectsView
                    url={
                        'https://res.cloudinary.com/dzq3t5xj3/image/upload/c_scale,h_1080,w_1920/v1669042559/Screen_Shot_2022-11-21_at_23.55.10_fpladh.png'
                    }
                    titleProject={'Chat App'}
                    description='Aplication that allows one to group people who have the same objectives and affinities, create
study rooms, ask questions, and follow people with the same affinity. It also allows you to create your own profile
and customize it.'
                    githubLink='https://github.com/alejandroBarraza/chatApp'
                    externalLink='https://django-chat-kana.herokuapp.com/'
                    tech={['Django', 'DjangoRest', 'Cloudinary', 'PostgreSQL']}
                />
            </Container>
            <Container maxWidth='md'>
                <Title
                    title='Some Other Projects'
                    custom={{ justifyContent: 'center', padding: '0 0 2rem 0 ' }}
                />
                <SecondProjectView />
            </Container>
            <Container maxWidth='md' id='contact'>
                <Contact />
            </Container>
        </Container>
    )
}
