import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { persistor, store } from "../app/store";
import { SessionProvider } from "next-auth/react";
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/montserrat/variable.css";
import theme from "../theme";
import {} from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import dynamic from "next/dynamic";

function BuyonicApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ChakraProvider theme={theme}>
            <Component {...pageProps} />
          </ChakraProvider>
        </PersistGate>
      </Provider>
    </SessionProvider>
  );
}

export default dynamic(() => Promise.resolve(BuyonicApp), {
  ssr: false,
});
