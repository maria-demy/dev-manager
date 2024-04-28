import React from 'react';
import { Button, Typography, Paper, Container, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { styled } from '@material-ui/core/styles';


const StyledContainer = styled(Container)({
    marginTop: 50
});

const StyledPaper = styled(Paper)({
    padding: 20,
    backgroundColor: '#f5f5f5'
});

const StyledGrid = styled(Grid)(({ theme }) => ({
    marginTop: theme.spacing(2)
}));

function Home() {
    return (
        <StyledContainer maxWidth="md">
            <StyledPaper>
                <Typography variant="h3" gutterBottom align="center">
                    Welcome to DevManager
                </Typography>
                <Typography variant="h6" gutterBottom>
                    Your one-stop solution for managing personal and professional development projects efficiently.
                </Typography>
                <StyledGrid container spacing={3} justifyContent="center">
                    <Grid item>
                        <Button variant="contained" color="primary" component={Link} to="/projects">
                            View Projects
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="secondary" component={Link} to="/login">
                            Login / Register
                        </Button>
                    </Grid>
                </StyledGrid>
            </StyledPaper>
        </StyledContainer>
    );
}

export default Home;
