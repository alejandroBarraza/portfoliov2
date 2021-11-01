import React from 'react';
import { Box, Container, Typography, Divider } from '@mui/material';
import { cyan, grey } from '@mui/material/colors';

const styles = {
    containerDescription: {
        display: 'flex',
        alignItems: 'center',
        py: 2,
    },
};

export const DescriptionInfo = () => {
    return (
        <Container maxWidth='md' sx={{ my: 4 }}>
            <Box sx={styles.containerDescription}>
                <Typography variant='subtitle1' sx={{ color: cyan[500], pr: 1 }}>
                    01.
                </Typography>

                <Typography sx={{ fontWeight: 'bold', color: 'common.white' }} variant='h5'>
                    About Me
                </Typography>
            </Box>
            <Box>
                <Typography variant='p' sx={{ color: grey[400] }}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim repellendus
                    libero est, nihil voluptates error placeat obcaecati fugit praesentium minus
                    impedit iste cum, quasi ab eaque et quis tempore? Ab tempora aperiam enim
                    temporibus recusandae maxime soluta sequi, cum repellat cumque sit fugit id
                    incidunt nulla at molestias praesentium quidem. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Nobis, voluptate.
                </Typography>
            </Box>
        </Container>
    );
};
