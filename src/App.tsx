import "./App.css";

import ImageRicard from "./assets/ricard.svg";
import ImageNoyade from "./assets/noyade.png";

function App() {
  return (
    <>
      <header className="header">
        <img className="image" src={ImageRicard} alt="logo" />
      </header>
      <main className="main">
        <section className="section color1">
          <label className="label">noyade</label>
          <img className="image__noyade" src={ImageNoyade} alt="noyade" />
        </section>
        <section className="section color2">
          <label className="label">risque de noyade</label>
        </section>
        <section className="section color3">
          <label className="label">nickel</label>
        </section>
        <section className="section color4">
          <label className="label">flamby</label>
        </section>
      </main>
      <footer className="footer">nuancier</footer>
    </>
  );
}

export default App;
