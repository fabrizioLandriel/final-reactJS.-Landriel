import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.containerNavbar}>
      <img style={{margin: "15px"}} src="https://res.cloudinary.com/daory0de0/image/upload/v1680233783/Screenshot_1_qbmsau.png" alt="Logo de mi empresa: Fabrizio Zapatillas"/>
      
      <h1 style={{textDecoration: "underline", marginLeft: "170px", marginTop: "38px"}}>Fabrizio Zapatillas</h1>

      <ul style={{ display: "flex", gap: "30px" }}>
        <button>Todas</button>
        <button>Promos</button>
        <button>Deportivas</button>
      </ul>
    </div>
  );
};
