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
                {/*<Trans i18nKey="title">{t("title")}</Trans>*/}
                <div>
                    <Box marginBottom={3}>
                        <Stack direction="row" spacing={1}>
                            <Item>
                                <Trans i18nKey={"free_q"}>{t("free_q")}</Trans>
                            </Item>
                            <Item>
                                <Trans i18nKey={"free_a"}>{t("free_a")}</Trans>
                            </Item>
                        </Stack>
                    </Box>
                    <Box marginBottom={3}>
                        <Stack direction="row" spacing={1}>
                            <Item>
                                <Trans i18nKey={"accessible_q"}>{t("accessible_q")}</Trans>
                            </Item>
                            <Item>
                                <Trans i18nKey={"accessible_a"}>{t("accessible_a")}</Trans>
                            </Item>
                        </Stack>
                    </Box>
                    <Box marginBottom={3}>
                        <Stack direction="row" spacing={1}>
                            <Item>
                                <Trans i18nKey={"privacy_q"}>{t("privacy_q")}</Trans>
                            </Item>
                            <Item>
                                <Trans i18nKey={"privacy_a"}>{t("privacy_a")}</Trans>
                            </Item>
                        </Stack>
                    </Box>
                    <Box marginBottom={3}>
                        <Stack direction="row" spacing={1}>
                            <Item>
                                <Trans i18nKey={"gpt_q"}>{t("gpt_q")}</Trans>
                            </Item>
                            <Item>
                                <Trans i18nKey={"gpt_a"}>{t("gpt_a")}</Trans>
                            </Item>
                        </Stack>
                    </Box>
                    <Box marginBottom={3}>
                        <Stack direction="row" spacing={1}>
                            <Item>
                                <Trans i18nKey={"sunsun_chat_q"}>{t("sunsun_chat_q")}</Trans>
                            </Item>
                            <Item>
                                <Trans i18nKey={"sunsun_chat_a"}>{t("sunsun_chat_a")}</Trans>
                            </Item>
                        </Stack>
                    </Box>
                </div>
            </div>
        </main>
    );
}

export default Faqs;
