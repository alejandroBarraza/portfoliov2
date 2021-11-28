import React from 'react';
import { Box, Divider, Typography } from '@mui/material';
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
        <Box>
            <Box sx={styles.containerDescription}>
                <Typography variant='subtitle1' sx={{ color: cyan[500], pr: 1 }}>
                    01.
                </Typography>

                <Typography sx={{ fontWeight: 'bold', color: 'common.white' }} variant='h5'>
                    About Me
                </Typography>
                <Divider sx={{ backgroundColor: grey[500] }} />
            </Box>
            <Box>
                <Typography variant='p' sx={{ color: grey[500], lineHeight: '1.5rem' }}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim repellendus
                    libero est, nihil voluptates error placeat obcaecati fugit praesentium minus
                    impedit iste cum, quasi ab eaque et quis tempore? Ab tempora aperiam enim
                    temporibus recusandae maxime soluta sequi, cum repellat cumque sit fugit id
                    incidunt nulla at molestias praesentium quidem. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Nobis, voluptate.
                </Typography>
            </Box>
        </Box>
    );
};
