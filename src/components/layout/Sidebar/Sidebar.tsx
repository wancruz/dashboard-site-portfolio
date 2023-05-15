import React from "react";

import { NavLink } from "react-router-dom";

import styles from "./Sidebar.module.css";
import { useAuth } from "../../../contexts/AuthContext";

const Sidebar = () => {
  const {logout} = useAuth();

  return (

    <div className={styles.sidebar}>

      <nav className={styles.navigation}>
        <ul>
          <li>
            <NavLink to="/" > <h3>Home</h3>
            </NavLink>
          </li>
        </ul>

        <h3>Sobre</h3>
        <ul>
          <li>
            <NavLink to="/about/cadastrar" > Cadastrar Sobre
            </NavLink>
          </li>
        </ul>

        <h3>Habilidades</h3>
        <ul>
          <li>
            <NavLink to="/skill/cadastrar" > Cadastrar Habilidades
            </NavLink>
          </li>
          <li>
            <NavLink to="/skill/lista" > Lista de Habilidades
            </NavLink>
          </li>
        </ul>

        <h3>Projetos</h3>
        <ul>
          <li>
            <NavLink to="/projects/cadastrar" > Cadastrar Projetos
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects/listagem" > Listagem de Projetos
            </NavLink>
          </li>
        </ul>

        <ul>
          <li>
            <NavLink   onClick={logout} to="/login" > <h3>Logout</h3>
            </NavLink>
          </li>
        </ul>

      </nav>
    </div>
  );
};

export default Sidebar;
