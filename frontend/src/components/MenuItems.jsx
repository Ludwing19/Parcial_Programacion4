import { NavLink } from "react-router-dom";

export const MenuItems = () => {
  const activeClass = "active";

  return (
    <>
      <li className="nav-item">
        <NavLink
          className={({ isActive }) =>
            isActive ? `nav-link ${activeClass}` : "nav-link"
          }
          to="/planets"
        >
          Planetas
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className={({ isActive }) =>
            isActive ? `nav-link ${activeClass}` : "nav-link"
          }
          to="/constellations"
        >
          Constelaciones
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className={({ isActive }) =>
            isActive ? `nav-link ${activeClass}` : "nav-link"
          }
          to="/stars"
        >
          Estrellas
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className={({ isActive }) =>
            isActive ? `nav-link ${activeClass}` : "nav-link"
          }
          to="/create"
        >
          Crear
        </NavLink>
      </li>
    </>
  );
};
