import * as React from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import SettingsIcon from "@mui/icons-material/Settings";
import SupportIcon from "@mui/icons-material/Support";
import LogoutIcon from "@mui/icons-material/Logout";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";

export const metadata = {
  title: "satellitesage",
  description: "Amigos Next.js frontend app for NASA Space Challenge 2023",
};

const DRAWER_WIDTH = 240;

const LINKS = [
  { text: "/home", href: "/" },
  { text: "/about-us", href: "/starred" },
  { text: "/how-it-works", href: "/how-it-works" },
];

const PLACEHOLDER_LINKS = [
  { text: "Settings", icon: SettingsIcon },
  { text: "Support", icon: SupportIcon },
  { text: "Logout", icon: LogoutIcon },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <AppBar position="fixed" sx={{ zIndex: 2000 }} component="nav">
            <Toolbar sx={{ backgroundColor: "background.paper" }}>
              <Box
                component="img"
                sx={{
                  height: 40,
                  width: 40,
                }}
                src="/images/logo.png"
              />
              <Typography variant="h6" noWrap component="div">
                <span style={{ color: "#ccd6f6" }}>satellite</span>
                <span style={{ color: "#64ffda" }}>sage</span>
              </Typography>
              <List
                sx={{
                  color: "#64ffda",
                  flexDirection: "row",
                  display: "flex",
                  alignItems: "center",
                  whiteSpace: "nowrap",
                }}
              >
                {LINKS.map(({ text, href }) => (
                  <ListItem key={href} disablePadding>
                    <ListItemButton component={Link} href={href}>
                      <ListItemText sx={{ fontWeight: "700" }} primary={text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <Divider sx={{ mt: "auto" }} />
            </Toolbar>
          </AppBar>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              mt: ["48px", "56px", "64px"],
            }}
          >
            {children}
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
