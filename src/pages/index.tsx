import { GetStaticProps } from "next";
import { useState } from "react";
import Head from "next/head";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

import styles from "../styles/home.module.scss";

interface IData {
  title: string;
  imgUrl: string;
  thumb: string;
}

interface HomeProps {
  data: IData[];
}

export default function Home({ data }: HomeProps) {
  const [indexImage, setIndexImage] = useState(0);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width" />
        <meta name="description" content="Desafio final do Go Beyond 2021, desenvolvido com Next.js" />
        <title>Go Beyond 2021 - Final Challenge - Corebiz</title>
      </Head>
      <Header />
      <main className={styles.container}>
        <section>
          <h1>{data[indexImage].title}</h1>
          <button>
            <a href="https://www.corebiz.ag/pt/" target="blank">
              veja mais
              <img src="./images/arrow-dropright-circle.svg" alt="ícone" />
            </a>
          </button>
        </section>
        <div>
          <img
            className={indexImage === 0 ? styles.border : undefined}
            src={data[0].thumb}
            alt={data[0].title}
            onClick={() => setIndexImage(0)}
          />
          <img
            className={indexImage === 1 ? styles.border : undefined}
            src={data[1].thumb}
            alt={data[1].title}
            onClick={() => setIndexImage(1)}
          />
          <img
            className={indexImage === 2 ? styles.border : undefined}
            src={data[2].thumb}
            alt={data[2].title}
            onClick={() => setIndexImage(2)}
          />
          <img
            className={indexImage === 3 ? styles.border : undefined}
            src={data[3].thumb}
            alt={data[3].title}
            onClick={() => setIndexImage(3)}
          />
        </div>
        <img src={data[indexImage].imgUrl} alt={data[0].title} />
      </main>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(
    "https://my-json-server.typicode.com/VitorHugoG/api-dados/dados"
  );
  const data = await response.json();

  return {
    props: {
      data,
    },
    revalidate: 60 * 60 * 24 * 7,
  };
};
