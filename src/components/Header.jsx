export default function Header() {
  return (
    <header className="main-header">
      <div className="container header-content">
        <img src="/logo.png" alt="Logo" max-height="190px" />
        <button className="cart-btn">0 <i className="fa-solid fa-cart-shopping"></i></button>
      </div>
    </header>
  );
}