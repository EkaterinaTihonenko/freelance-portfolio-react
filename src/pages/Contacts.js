import "./style.css";

const Contacts = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p>Belarus, Gomel</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Telegram / Viber</h2>
            <p>
              <a href="tel:+79051234567">+375 (44) 000-00-00</a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p>
              <a href="mailto:webdev@protonmail.com">
                ekaterinatihonenko8@gmail.com
              </a>
            </p>
          </li>
        </ul>
      </div>
      <div class="air air1"></div>
      <div class="air air2"></div>
      <div class="air air3"></div>
      <div class="air air4"></div>
    </main>
  );
};

export default Contacts;
