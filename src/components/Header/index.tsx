import { useState } from "react";
import { LogoCorebiz } from "../LogoCorebiz";

import styles from "./styles.module.scss";

export function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <header className={styles.container}>
      <LogoCorebiz color={"#fff"} />
      <section>
        <div className={menu ? styles.menuOn : undefined}>
          <nav>
            <a href="https://www.corebiz.ag/pt/about/" target="blank">
              a corebiz
            </a>
            <a href="https://www.corebiz.ag/pt/#framework-title" target="blank">
              serviços
            </a>
            <a href="https://www.corebiz.ag/pt/cases/" target="blank">
              cases
            </a>
            <a href="https://www.corebiz.ag/pt/contato/" target="blank">
              contato
            </a>
          </nav>
          <div
            onClick={() => setMenu(!menu)}
            className={menu ? styles.menu : styles.menuToggle}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </section>
    </header>
  );
}
