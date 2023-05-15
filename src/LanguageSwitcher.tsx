import React from "react";
import { useTranslation } from "react-i18next";
import { Button, Menu, MenuItem } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";

export default function LanguageSwitcher() {
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedLanguage, setSelectedLanguage] = React.useState(i18n.language);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    setSelectedLanguage(language);
    handleClose();
  };

  return (
    <div>
      <Button
        color="inherit"
        aria-controls="language-menu"
        aria-haspopup="true"
        onClick={handleClick}
        startIcon={<LanguageIcon />}
      >
        {t(selectedLanguage)}
      </Button>
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => changeLanguage("en")}>{t("English")}</MenuItem>
        <MenuItem onClick={() => changeLanguage("zh")}>{t("Chinese")}</MenuItem>
        <MenuItem onClick={() => changeLanguage("ja")}>
          {t("Japanese")}
        </MenuItem>
      </Menu>
    </div>
  );
}
