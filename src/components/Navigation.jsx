import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navigation() {
  const [ propertyOpen, setPropertyOpen ] = useState(false);
  const items = [
    { label: "HOME", path: "/"},
    { label: "ACCOUNT BOOSTER", path: "/account-booster"},
    { label: "VIP", path: "/vip"},
    { label: "BOOST PAKETI", path: "/boost-paketi"},
    { label: "IMOVINA", path: "/imovina", dropdown: true},
    { label: "CHARACTER PAKETI", path: "/character-paketi"},
    { label: "ORGANIZACIJE", path: "/organizacije"},
    { label: "VOZILA", path: "/vozila"},
    { label: "LV COINS", path: "/lv-coins"},
    { label: "ADMIN", path: "/admin"},
    { label: "CUSTOM PAKETI", path: "/custom-paketi"},
    { label: "POMOC", path: "/help"}
  ];

  return (
    <nav className="main-nav">
      <ul className="container">
        {items.map(i => {
          if(i.dropdown) {
            return (
              <li 
                key={i.path} 
                className="nav-dropdown" 
                onMouseEnter={() => setPropertyOpen(true)}
                onMouseLeave={() => setPropertyOpen(false)}
              >
                <span>
                  {i.label} <i className="fa-solid fa-angle-down"></i>
                </span>

                {propertyOpen && (
                  <ul className="dropdown-menu">
                    <li><Link to="/category/imovina">Imovina</Link></li>
                    <li><Link to="/category/kuce">Kuce</Link></li>
                    <li><Link to="/category/stanovi">Stanovi</Link></li>
                    <li><Link to="/category/vikendice">Vikendice</Link></li>
                    <li><Link to="/category/firma">Firma</Link></li>
                    <li><Link to="/category/poslovi">Poslovi</Link></li>
                    <li><Link to="/category/gun-shop">Gun Shop</Link></li>
                    <li><Link to="/category/marketi">Marketi</Link></li>
                    <li><Link to="/category/pay-n-spray">Pay 'n' Spray</Link></li>
                  </ul>
                )}
              </li>
            );
          }
            return (
              <li key={i.path}>
                <Link to={i.path}>{i.label}</Link>
              </li>
            );
        })}
      </ul>
    </nav>
  );
}