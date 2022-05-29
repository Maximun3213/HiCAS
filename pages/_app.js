import DefaultLayout from "../src/components/Layouts/DefaultLayout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
}

export default MyApp;
