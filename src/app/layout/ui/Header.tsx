/// <reference types="vite-plugin-svgr/client" />
import { useState, useRef, useEffect } from "react";
import Arrow from "../../../assets/svg/Arrow.svg?react";
import Logout from "../../../assets/svg/logout.svg?react";
import "./index.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const targetNode = event.target as Node;
      if (
        isOpen &&
        selectRef.current &&
        !selectRef.current.contains(targetNode)
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  
  return (
    <header className="header">
      <div className="header__logo">ADP</div>
      <div className="header__user">
        <div
          ref={selectRef}
          onClick={() => setIsOpen(!isOpen)}
          className={`header__user-menu ${isOpen ? "active" : ""}`}
        >
          <div className="menu-header__name">Администратор</div>
          <Arrow className="menu-header__arrow" />
          {isOpen && (
            <div className="menu-header">
              <div className="menu-header__item">
                <Logout />
                <span>Выйти</span>
              </div>
            </div>
          )}
        </div>
        <div className="header__user-avatar"></div>
      </div>
    </header>
  );
};

export default Header;
