import Layout from '../components/layout/layout';

import '../styles/globals.css';

// Component is the page component for each page
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
