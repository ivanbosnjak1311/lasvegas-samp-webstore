import { useState } from "react";

export default function TopBar() {
  const [currency, setCurrency] = useState("EUR");
  const [isOpen, setIsOpen] = useState(false);

  const currencies = ["AUD", "BRL", "CAD", "DKK", "EUR", "NOK", "NZD", "PLN", "GBP", "SEK", "USD"];

  return (
    <div className="top-bar">
      <div className="container top-bar-content">
        <a href="/login">Login</a>
        <div className="currency-dropdown" onClick={() => setIsOpen(!isOpen)}>
          {currency} <i className="fa-solid fa-angle-down"></i>

          {isOpen && (
            <ul className="currency-menu">
              {currencies.map(c => (
                <li key={c} onClick={() => {
                  setCurrency(c);
                  setIsOpen(false);
                }}>
                  {c}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}