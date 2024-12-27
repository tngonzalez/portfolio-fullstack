import "./Navbar.css";
import Link from "./Link";
import { useState } from "react";
import { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";

const Navbar = () => {
  //Menú móvil
  const [mobileOpen, setMobileOpen] = useState(false);
  //Controlar la visibilidad del menú de escritorio
  const [isDesktopMenuVisible, setIsDesktopMenuVisible] = useState(true);

  useEffect(() => {
    const updateTitle = () => {
      if (window.innerWidth <= 460) {
        setIsDesktopMenuVisible(false);
      } else {
        setIsDesktopMenuVisible(true);
      }
    };

    updateTitle();
    window.addEventListener("resize", updateTitle);

    return () => window.removeEventListener("resize", updateTitle);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  //Mobile Drawer
  const drawer = (
    <div className="nav-link-small">
      <div className="nav-link">
        <Link page="home" label="home" />
      </div>
      <div className="nav-link">
        <Link page="about" label="about" />
      </div>
      <div className="nav-link">
        <Link page="projects" label="projects" />
      </div>
      <div className="nav-link">
        <Link page="contact" label="contact" />
      </div>
    </div>
  );

  return (
    <Box>
      <CssBaseline />
      <AppBar className="nav">
        <Toolbar className="nav-container">
          <Typography
            sx={{ fontSize: 25, cursor: "pointer", fontFamily: "monospace",  fontWeight: "bolder"}}
          >
            <Link page={"home"} label={"<TG/>"}/>
          </Typography>

          {/* Icon Menu Responsivo */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: "none" } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          {/* Desktop Menu */}
          {
            isDesktopMenuVisible && (
              <div
              className="nav-link-container"
              >
              <div className="nav-link">
                <Link page="home" label="home" />
              </div>
              <div className="nav-link">
                <Link page="about" label="about" />
              </div>
              <div className="nav-link">
                <Link page="projects" label="projects" />
              </div>
              <div className="nav-link">
                <Link page="contact" label="contact" />
              </div>
            </div>
            )}
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            "& .MuiDrawer-paper": {
              width: 200,
              backgroundColor: "#1a1e24",
              background:"#1a1e24 !important",
              color: "white",
              padding: "10px",
              
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default Navbar;
