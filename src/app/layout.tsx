import { ThemeProvider } from "./theme-provider";

// core styles are required for all packages
import "@mantine/core/styles.css";

// other css files are required only if
// you are using components from the corresponding package
import "@mantine/charts/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/notifications/styles.css";
// import '@mantine/dropzone/styles.css';

// Pull in global styles AFTER Mantine CSS
// This is important to ensure that global styles CAN override Mantine styles
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/*
            Open Graph meta tags enable rich link previews when your site is shared on
            social platforms such as Facebook, LinkedIn, and Slack. These tags control
            how your content is displayed in previews (e.g., title, description, image).

            Documentation: https://ogp.me/
            Helpful generator: https://freecodetools.org/ogp/
        */}
        <meta
          property="og:title"
          content="Statly Sports | Data-Driven Performance Insights for Athletes & Teams"
        />
        <meta property="og:site_name" content="Statly Sports" />
        <meta property="og:url" content="https://statlysports.com/" />
        <meta
          property="og:description"
          content="Level up your game with Statly Sports — powerful performance insights for athletes and teams driven by data."
        />
        <meta property="og:type" content="business.business" />
        <meta
          property="og:image"
          content="https://statlysports.com/preview-background.png"
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
