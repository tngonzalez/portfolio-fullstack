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
  //Permite actualizar el titulo del NavBar según el tamaño de pantalla
  const [navTitle, setNavTitle] = useState("<Tylinn González/>");
  useEffect(() => {
    const updateTitle = () => {
      if (window.innerWidth <= 768) {
        setNavTitle("<TG/>");
      } else {
        setNavTitle("<Tylinn González/>");
      }
    };

    updateTitle();
    window.addEventListener("resize", updateTitle);

    return () => window.removeEventListener("resize", updateTitle);
  }, []);

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  //Mobile Drawer
  const drawer = (
      <div className="nav-link-small" >
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
            className="nav-brand"
            sx={{ fontSize: 20, cursor: "pointer", fontWeight: "bold" }}
          >
            {navTitle}
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

          <div className="nav-link-container" style={{display: window.innerWidth <= 425 ? 'none' : 'flex'}}>
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
            backgroundColor: "#0F2027",
            color: "white", 
            padding: "5px",
          },
        }}>
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navbar;
