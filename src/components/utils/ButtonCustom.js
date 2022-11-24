import { Button, Link } from '@mui/material'

const styles = {
    root: {
        padding: '1rem 2rem',
        color: 'white',
        mb: 16,
    },
}

export const ButtonCustom = ({ children, align }) => {
    return (
        <Button sx={styles.root} variant='outlined'>
            <Link
                sx={{ textDecoration: 'none' }}
                href='mailto:alebaraza1997@gmail.com?Subject=Hello'
            >
                {children}
            </Link>
        </Button>
    )
}
