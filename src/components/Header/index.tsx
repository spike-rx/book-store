import Grid from '@mui/material/Grid';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

export default function Header() {

    return (
        <Grid container spacing={2} sx={{ height: '10%', width: '100%', padding: '2vh 5vw'}} columns={14}>
            <Grid item xs={2} sx={{display: 'flex', justifyContent: 'flex-end'}}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link
                        variant="h4"
                        underline="none"
                        sx={{display: 'flex', alignItems: 'center', fontSize:'1.5rem'}}
                        color="#5CB85C"
                        href="/"
                    >
                        conduit
                    </Link>
                </Breadcrumbs>
            </Grid>
            <Grid item xs={12} sx={{display: 'flex', justifyContent: 'flex-end'}}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link
                        variant="h4"
                        underline="hover"
                        sx={{display: 'flex', alignItems: 'center', fontSize:'1.5rem'}}
                        color="inherit"
                        href="/"
                    >
                        Sign in
                    </Link>
                    <Link
                        variant="h4"
                        underline="hover"
                        sx={{display: 'flex', alignItems: 'center', fontSize:'1.5rem'}}
                        color="inherit"
                        href="/material-ui/getting-started/installation/"
                    >
                        Sign up
                    </Link>
                </Breadcrumbs>
            </Grid>
        </Grid>
    )
}
