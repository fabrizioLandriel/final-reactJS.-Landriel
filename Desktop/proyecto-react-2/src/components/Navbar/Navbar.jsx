import { Button, imageListClasses } from "@mui/material";
import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";
import { Outlet, Link, useNavigate, NavLink } from "react-router-dom";
import { Padding } from "@mui/icons-material";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className={styles.containerNavbar}>
        <Link to="/" style={{textDecoration: "underline", color: "black", fontFamily: "Calibri", fontSize: "2rem"}}>Zapatillas Fabrizio</Link>
        <ul style={{ display: "flex", gap: "30px" }}>
          <NavLink
            to="/"
            style={{color: "blue"}}
          >
            Todas
          </NavLink>
          <NavLink
            to="/category/urbanas"
            style={{color: "blue"}}
          >
            Genericas/Deportivas
          </NavLink>
          <NavLink
            style={{color: "blue"}}
            to="/category/deportivas"
          >
            Para salir
          </NavLink>
        </ul>
        <CartWidget />
      </div>

      <Outlet />
    </div>
  );
};
