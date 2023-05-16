import React from "react";
import {Box, Container, Typography} from "@mui/material";
import {Trans, useTranslation} from "react-i18next";

function About(): JSX.Element {
    const {t} = useTranslation();

    return (
        <main>
            <Box sx={{py: 5, textAlign: "left"}}>
                <Container maxWidth="md">
                    <Typography variant="h4" component="h1" sx={{mb: 4}}>
                        About
                    </Typography>
                    <Typography variant="body1" sx={{mb: 4}} dangerouslySetInnerHTML={{__html: t("about.content").replace(/\n/g, "<br>")}} />
                </Container>
            </Box>
        </main>
    );
}

export default About;
