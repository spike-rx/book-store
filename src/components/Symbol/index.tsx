import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
export default function Symbol() {
    return (
        <Box sx={{width: '100%', height: '20%', backgroundColor: '#5CB85C'}}>
            <Typography variant="h1" component='h1' gutterBottom color='#fff' sx={{fontSize: '3.5rem', paddingTop:'2vh'}}>
                conduit
            </Typography>
            <Typography variant='body1' color='#fff' sx={{fontSize: '1.5rem'}}>
                A place to share your knowledge.
            </Typography>
        </Box>
    )
}
