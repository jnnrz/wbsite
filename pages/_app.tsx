import { AppProps } from "next/app";
import { Head } from "@components/index";

import "@assets/scss/main.scss";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head />
      <Component {...pageProps} />
    </>
  );
};

export default App;
