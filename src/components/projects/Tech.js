import React from 'react';
import { List, ListItem, Typography } from '@mui/material';
import { styled } from '@mui/material';
const styles = {
    container: {
        display: 'flex',
    },
    textContainer: {
        pt: 'auto',
        display: 'flex',
        color: '#8892b0',
    },
};

const ListItemNoPadding = styled(ListItem)(`
  padding: 0;
  padding-left: 8px;
  padding-top: 8px;
  
`);

export const Tech = ({ tech, justify }) => {
    justify
        ? (styles.textContainer.justifyContent = justify)
        : (styles.textContainer.justifyContent = 'flex-end');
    return (
        <List sx={styles.container}>
            {tech.map((item, index) => (
                <ListItemNoPadding sx={styles.textContainer} key={index}>
                    <Typography variant='overline'>{item}</Typography>
                </ListItemNoPadding>
            ))}
        </List>
    );
};

Tech.defaultProps = {
    textContainer: {
        ...styles.textContainer,
        justifyContent: 'flex-end',
    },
};
