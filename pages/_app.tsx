import "../styles/globals.css";
import store from "../redux/store/store";
import { Provider } from "react-redux";
import { Rajdhani } from "@next/font/google";
import type { AppProps } from "next/app";

const font = Rajdhani({ weight: ["400", "500", "700"], subsets: ["latin"] });
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className={font.className}>
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default MyApp;
