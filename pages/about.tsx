import React from "react";
import {Box, Button, Container, Typography} from "@mui/material";

function About(): JSX.Element {
    return (
        <main>
            <Box sx={{py: 5, textAlign: "left"}}>
                <Container maxWidth="md">
                    <Typography variant="h4" component="h1" sx={{mb: 4}}>
                        About
                    </Typography>
                    <Typography variant="body1" sx={{mb: 4}}>
                        Quickly design and customize responsive mobile-first sites with MUI,
                        a powerful UI component library that follows Material Design principles.
                        It provides a wide range of prebuilt components and utilities to help
                        you build beautiful and functional user interfaces efficiently.
                    </Typography>
                    <Box sx={{display: "flex", justifyContent: "center"}}>
                        <Button variant="contained" color="primary" sx={{mr: 2}}>
                            Primary Button
                        </Button>
                        <Button variant="outlined" color="secondary">
                            Secondary Button
                        </Button>
                    </Box>
                </Container>
            </Box>
        </main>
    );
}

export default About;
