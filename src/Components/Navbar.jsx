import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link, useHistory, useLocation } from "react-router-dom";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const history = useHistory();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar position="static" style={{ backgroundColor: "#283593" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link
              to="/landing"
              style={{ color: "white", textDecoration: "none" }}
            >
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
              >
                Find My Post Man
              </Typography>
            </Link>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {localStorage.getItem("isLogin") == "true" ? (
                  <>
                    <Link
                      to="/home"
                      style={{ color: "black", textDecoration: "none" }}
                    >
                      <MenuItem>
                        <Typography textAlign="center">
                          Search by Pin
                        </Typography>
                      </MenuItem>
                    </Link>
                    <Link
                      to="/branch"
                      style={{ color: "black", textDecoration: "none" }}
                    >
                      <MenuItem>
                        <Typography textAlign="center">
                          Search by Branch
                        </Typography>
                      </MenuItem>
                    </Link>
                  </>
                ) : (
                  ""
                )}

                <Link
                  to="/about"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <MenuItem>
                    <Typography textAlign="center">About</Typography>
                  </MenuItem>
                </Link>
              </Menu>
            </Box>
            <Link
              to="/landing"
              style={{ color: "white", textDecoration: "none" }}
            >
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
              >
                Find My Post Man
              </Typography>
            </Link>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {localStorage.getItem("isLogin") == "true" ? (
                <>
                  <Link to="/home" style={{ textDecoration: "none" }}>
                    <Button sx={{ my: 2, color: "white", display: "block" }}>
                      Search by pin
                    </Button>
                  </Link>
                  <Link to="/branch" style={{ textDecoration: "none" }}>
                    <Button sx={{ my: 2, color: "white", display: "block" }}>
                      Search by Branch
                    </Button>
                  </Link>
                </>
              ) : (
                ""
              )}

              <Link to="/about" style={{ textDecoration: "none" }}>
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  About
                </Button>
              </Link>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              {localStorage.getItem("isLogin") == "true" ? (
                <MenuItem
                  variant="contained"
                  onClick={() => {
                    localStorage.removeItem("isLogin");
                    history.push("/");
                  }}
                >
                  <i class="fa fa-sign-out"></i>
                </MenuItem>
              ) : (
                ""
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default Navbar;
