import React from 'react';
import { List, ListItemButton, ListItemText, Collapse, ListItem } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
export const TechList = () => {
    const [open, setOpen] = React.useState(true);
    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List>
            <ListItem>
                <ListItemText primary='Hola' />
            </ListItem>
            <ListItemButton onClick={handleClick}>
                <ListItemText primary='Inbox' />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <ListItemButton onClick={handleClick}>
                <ListItemText primary='Inbox2' />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout='auto' unmountOnExit>
                <List component='div' disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary='Starred' />
                    </ListItemButton>
                </List>
            </Collapse>
        </List>
    );
};
