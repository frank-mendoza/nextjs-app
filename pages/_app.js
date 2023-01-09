import MainLayout from "../src/components/mainLayout";
import "../styles/general.sass";
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
