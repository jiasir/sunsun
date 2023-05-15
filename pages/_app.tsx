import React from "react";
import Head from "next/head";
import Header from "../src/header";
import Footer from "../src/footer";
import { useMediaQuery, ThemeProvider, createTheme } from "@mui/material";

// MyApp is a component that is used to initialize pages. You can override it and control the page initialization. This is useful for initializing page-wide providers, for example.
function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  // dark mode settings prefersDarkMode is true if the user prefers dark mode, false otherwise.
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  // dark mode settings theme is an object that contains all the styling information for the app.
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light", // mode is set to dark if the user prefers dark mode, light otherwise.
        },
      }),
    [prefersDarkMode]
  );

  return (
    // ThemeProvider is a component that makes the theme available down the React tree thanks to React context.
    <ThemeProvider theme={theme}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="sunsun" content="The sunsun website" />
        <title>sunsun</title>
      </Head>

      {/* col responsive global settings */}
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
