export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">

        {/* Lijevo – logo */}
        <div className="footer-left">
          <img src="/logo.png" alt="Las Vegas Logo" height="40" />
          <span>Las Vegas</span>
        </div>

        <div className="footer-center">
          <p>
            &copy; 2026 Las Vegas. All right reserved .
          </p>
        </div>

        {/* Desno – linkovi */}
        <div className="footer-right">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Contact</a>
        </div>

      </div>
    </footer>
  );
}