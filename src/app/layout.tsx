import React, { ReactNode } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Home</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Box my={4}>{children}</Box>
      </Container>
      <Box
        component="footer"
        sx={{ textAlign: "center", py: 3, mt: 4, backgroundColor: "#f5f5f5" }}
      >
        <Typography variant="subtitle1">
          Power by{" "}
          <Link
            href="https://newsapi.org/"
            sx={{
              textDecoration: "none",
              color: "#1976D2",
              "&:hover": { color: "red" },
            }}
          >
            newsAPI.org
          </Link>
        </Typography>
      </Box>
    </>
  );
};

export default Layout;
