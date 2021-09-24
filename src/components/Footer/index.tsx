import { LogoCorebiz } from "../LogoCorebiz";

import styles from "./styles.module.scss";

export function Footer() {
  return (
    <footer className={styles.container}>
      <section>
        <div>
          <div>
            <LogoCorebiz color={"#000"} />
            <p>direitos reservados, Corebiz 2021</p>
          </div>
          <div>
            <a href="">
              <img src="images/facebook.svg" alt="facebook" />
            </a>
            <a href="">
              <img src="images/instagran.svg" alt="instagram" />
            </a>
            <a href="">
              <img src="images/linkedin.svg" alt="linkedin" />
            </a>
          </div>
        </div>
        <ul>
          <li>
            <a href="https://www.corebiz.ag/pt/about/" target="blank">
              a corebiz
            </a>
          </li>
          <li>
            <a href="https://www.corebiz.ag/pt/#framework-title" target="blank">
              serviços
            </a>
          </li>
          <li>
            <a href="https://www.corebiz.ag/pt/cases/" target="blank">
              cases
            </a>
          </li>
          <li>
            <a href="https://www.corebiz.ag/pt/contato/" target="blank">
              contato
            </a>
          </li>
        </ul>
      </section>
      <section>
        <div>
          <h2>.Brasil</h2>
          <p>Avenida Andrômeda, 2000. Bloco 6 e 8 Alphaville SP</p>
          <p>R. Ifigenia Maria de Oliveira, 3793 Jr. Piratininga Franca SP</p>
        </div>
        <div>
          <h2>.Argentina</h2>
          <p>Soler 5518, 3 Piso C1425BYF Palermo Hollywood CABA</p>
        </div>
        <div>
          <h2>.México</h2>
          <p>
            Blvd. Miguel de Cervantes Saavedra 169, Granada, Miguel Hidalgo,
            11520 Ciudad de México, CDMX
          </p>
        </div>
        <div>
          <h2>.Chile</h2>
          <p>Roberto del Río 1137, Providencia.</p>
        </div>
      </section>
    </footer>
  );
}
