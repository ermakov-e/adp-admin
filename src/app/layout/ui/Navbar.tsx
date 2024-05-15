import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li>
          <Link to="/" className="navbar__list-item">
            Загрузка Excel
          </Link>
        </li>
        <li>
          <Link to="/inspectorTask" className="navbar__list-item">
            Активные задачи
          </Link>
        </li>
        <li>
          <Link to="/operatorTask" className="navbar__list-item">
            Задачи для оператора
          </Link>
        </li>
        <li>
          <Link to="/settings" className="navbar__list-item">
            Настройки
          </Link>
        </li>
        <li>
          <Link to="/archive" className="navbar__list-item">
            Архив
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
