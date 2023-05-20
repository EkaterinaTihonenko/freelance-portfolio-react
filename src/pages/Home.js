import Header from "./../components/header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>
                Html, css, sass, less, bootstrap, javascript, lodash, npm, jest,
                eslint, babel, git, github, prettier, webpack
              </p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
