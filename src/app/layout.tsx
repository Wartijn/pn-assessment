import type { Metadata } from "next";
import CategoryMenu from "@/components/category-menu";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import theme from "@/utils/theme";
import { ThemeProvider } from "@mui/material/styles";
import { roboto } from "@/utils/fonts";
import { Box, Container, CssBaseline } from "@mui/material";

export const metadata: Metadata = {
  title: "Pikakasino game lobby interface",
  description:
    "Thousands of slots, table games and live casino are waiting at fast and safe Pikakasino! Play free or with real money and withdrawal your winnings in minutes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Box sx={{ display: "flex" }}>
              <CssBaseline />
              <CategoryMenu />
              {children}
            </Box>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
