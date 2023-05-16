import "bootstrap/dist/css/bootstrap.css";
import * as React from "react";
import {Box, Typography} from "@mui/material";
import {Trans, useTranslation} from "react-i18next";

function Faqs(): JSX.Element {
    const {t} = useTranslation();

    return (
        <main className="container">
            <div className="px-4 py-5 my-5 text-center">
                <Typography variant="h3" component="h1" gutterBottom>
                    FAQs
                </Typography>

                <Box sx={{marginTop: 3, textAlign: "left"}}>
                    <Typography variant="body1" component="div" sx={{marginBottom: 3}}>
                        <Typography variant="h5" component="div" sx={{fontWeight: 'bold', marginBottom: 1}}>
                            <Trans i18nKey={"faqs.free_q"}>{t("faqs.free_q")}</Trans>
                        </Typography>
                        <Typography variant="body1" component="div">
                            <Trans i18nKey={"faqs.free_a"}>{t("faqs.free_a")}</Trans>
                        </Typography>
                    </Typography>

                    <Typography variant="body1" component="div" sx={{marginBottom: 3}}>
                        <Typography variant="h5" component="div" sx={{fontWeight: 'bold', marginBottom: 1}}>
                            <Trans i18nKey={"faqs.accessible_q"}>{t("faqs.accessible_q")}</Trans>
                        </Typography>
                        <Typography variant="body1" component="div">
                            <Trans i18nKey={"faqs.accessible_a"}>{t("faqs.accessible_a")}</Trans>
                        </Typography>
                    </Typography>

                    <Typography variant="body1" component="div" sx={{marginBottom: 3}}>
                        <Typography variant="h5" component="div" sx={{fontWeight: 'bold', marginBottom: 1}}>
                            <Trans i18nKey={"faqs.privacy_q"}>{t("faqs.privacy_q")}</Trans>
                        </Typography>
                        <Typography variant="body1" component="div">
                            <Trans i18nKey={"faqs.privacy_a"}>{t("faqs.privacy_a")}</Trans>
                        </Typography>
                    </Typography>

                    <Typography variant="body1" component="div" sx={{marginBottom: 3}}>
                        <Typography variant="h5" component="div" sx={{fontWeight: 'bold', marginBottom: 1}}>
                            <Trans i18nKey={"faqs.gpt_q"}>{t("faqs.gpt_q")}</Trans>
                        </Typography>
                        <Typography variant="body1" component="div">
                            <Trans i18nKey={"faqs.gpt_a"}>{t("faqs.gpt_a")}</Trans>
                        </Typography>
                    </Typography>

                    <Typography variant="body1" component="div" sx={{marginBottom: 3}}>
                        <Typography variant="h5" component="div" sx={{fontWeight: 'bold', marginBottom: 1}}>
                            <Trans i18nKey={"faqs.sunsun_chat_q"}>{t("faqs.sunsun_chat_q")}</Trans>
                        </Typography>
                        <Typography variant="body1" component="div">
                            <Trans i18nKey={"faqs.sunsun_chat_a"}>{t("faqs.sunsun_chat_a")}</Trans>
                        </Typography>
                    </Typography>
                </Box>
            </div>
        </main>
    );
}

export default Faqs;
