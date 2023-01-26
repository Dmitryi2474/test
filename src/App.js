import classes from "./App.module.scss";

function App() {
  const navigation = [
    { link: "À la carte" },
    { link: "Wijnkaart" },
    { link: "Lunchmenu" },
    { link: "Contact" },
  ];

  const social = [
    { link: "Fb" },
    { link: "Ig" },
    { link: "Tw" },
    { link: "Yt" },
  ];

  const menu = [
    {
      name: "Woensdag 12/01",
      description: "Salade met Serrano",
      subDisctiotion: "Steak Tartaar",
    },
    {
      name: "Donderdag 13/01",
      description: "Toast Roquefort",
      subDisctiotion: "Penne met Kip en Prei",
    },
    {
      name: "Vrijdag 14/01",
      description: "Verrassing van de Chef",
      subDisctiotion: "Penne met Kip en Prei",
    },
    {
      name: "Vrijdag 15/01",
      description: "Verrassing van de Chef",
      subDisctiotion: "Penne met Kip en Prei",
    },
    {
      name: "Vrijdag 16/01",
      description: "Verrassing van de Chef",
      subDisctiotion: "Penne met Kip en Prei",
    },
  ];

  return (
    <>
      <div className={classes.App}>
        <section className={classes.Header}>
          <img src="../img/logo.png" alt=""></img>
          <ul className={classes.list}>
            {navigation.map((value, id) => (
              <li key={id} className={classes.item}>
                <a href="/">{value.link}</a>
              </li>
            ))}
          </ul>
          <a className={classes.phone} href="tel:+32 9 282 57 25">
            <img src="../img/phone.png" />
            +32 9 282 57 25
          </a>
        </section>
        <section className={classes.Hero}>
          <div>
            <span className={classes.hours}>OPEN EVERYDAY 6AM - 9PM</span>
            <h1 className={classes.title}>
              A bad day with lunch is better than a good day without it.
            </h1>
          </div>
          <div className={classes.connection}>
            <button className={classes.button}>Reserve a table</button>
            <ul className={classes.list}>
              {social.map((value, id) => (
                <li key={id} className={classes.item}>
                  <a>{value.link}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className={classes.Menu}>
          <ul className={classes.list}>
            {menu.map((value, id) => (
              <li key={id} className={classes.item}>
                <span className={classes.name}>{value.name}</span>
                <div className={classes.wrapper}>
                  <span className={classes.description}>
                    {value.description}
                  </span>
                  <span className={classes.dot}></span>
                  <sapn className={classes.dot}></sapn>
                  <span className={classes.dot}></span>
                  <span className={classes.description}>
                    {value.subDisctiotion}
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <div className={classes.imgBlock}>
            <img className={classes.img1} src="../img/menu1.png" alt=""></img>
            <img className={classes.img2} src="../img/menu2.png" alt=""></img>
          </div>
        </section>
      </div>
      <section className={classes.Reviews}>
        <div className={classes.wrapper}>
          <img src="../img/quote.png" alt=""></img>
          <h2 className={classes.title}>
            Goede service, lekker eten, toffe ambiance
          </h2>
          <span className={classes.text}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren.
          </span>

          <h3 className={classes.name}>ALAIN HEYNDRICKX</h3>
        </div>
      </section>
    </>
  );
}

export default App;
