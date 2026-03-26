export default function MainLayout({ children }) {
  return (
    <main className="container content">
      <div className="main-box">
        {children}
      </div>

      <aside className="sidebar">
        <h4>Informacije</h4>
        <div className="social-content">
          <p><strong>Socijalne mreže</strong></p>
          <div className="separator-gradient"></div>
          <ul className="social-links">
            <li>
              <a href="https://www.facebook.com/lasvegassamp" target="_blank"><i className="fa-brands fa-facebook facebook-icon"></i>
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a href="ts3://lasvegas" target="_blank"><i className="fa-brands fa-teamspeak teamspeak-icon"></i>
                <span>Teamspeak</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="customer-content">
          <h4>Top Customer</h4>
          <p>No recent top purchaser to display.</p>
        </div>
        <div className="recent-payments">
          <h4>Nedavne Uplate</h4>
          <div className="payments-users">
            <img src="/skin.png" width="32px" height="32px"></img>
              <div className="user-info">
                <h5>Reksoni</h5>
                <div className="payment-time">Today 19:08</div>
              </div>
          </div>
          <div className="payments-users">
            <img src="/skin.png" width="32px" height="32px"></img>
            <div className="user-info">
                <h5>Marian</h5>
                <div className="payment-time">Today 19:08</div>
            </div>
          </div>
          <div className="payments-users">
            <img src="/skin.png" width="32px" height="32px"></img>
            <div className="user-info">
                <h5>Spanac</h5>
                <div className="payment-time">Today 19:08</div>
            </div>
          </div>
          <div className="payments-users">
            <img src="/skin.png" width="32px" height="32px"></img>
            <div className="user-info">
                <h5>Capone</h5>
                <div className="payment-time">Today 19:08</div>
            </div>
          </div>
          <div className="payments-users">
            <img src="/skin.png" width="32px" height="32px"></img>
            <div className="user-info">
                <h5>Toni</h5>
                <div className="payment-time">Today 19:08</div>
            </div>
          </div>
        </div>
      </aside>
    </main>
  );
}