import "bootstrap/dist/css/bootstrap.css";
import * as React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import {styled} from "@mui/material/styles";
import {Box} from "@mui/material";
import {Trans, useTranslation} from "react-i18next";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary,
}));

function Faqs(): JSX.Element {
    const {t} = useTranslation();

    return (
        <main className="container">
            <div className="px-4 py-5 my-5 text-center">
                <h1 className="display-5 fw-bold text-body-emphasis mx-auto mb-4">
                    FAQs
                </h1>
                <Trans i18nKey="title">{t("title")}</Trans>
                <div>
                    <Box marginBottom={3}>
                        <Stack direction="row" spacing={1}>
                            <Item>Place Holder</Item>
                            <Item>
                                Place Holder Place Holder Place Holder Place Holder Place Holder
                                Place Holder Place Holder Place Holder Place Holder Place Holder
                            </Item>
                        </Stack>
                    </Box>
                    <Box marginBottom={3}>
                        <Stack direction="row" spacing={1}>
                            <Item>Place Holder</Item>
                            <Item>
                                Place Holder Place Holder Place Holder Place Holder Place Holder
                                Place Holder Place Holder Place Holder Place Holder Place Holder
                            </Item>
                        </Stack>
                    </Box>
                </div>
            </div>
        </main>
    );
}

export default Faqs;
