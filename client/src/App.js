import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import csvicon from './images/csv-icon.png';

const App = () => {
    return (
        <Container maxWidth="lg">
            <AppBar position="static" color="inherit">
                <Typography varian="h2" align="center">Memories</Typography>
                <img src={csvicon} alt="csv" height="60" width="60"></img>
            </AppBar>
        </Container>
    );
}

export default App;