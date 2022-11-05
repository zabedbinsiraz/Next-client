import "antd/dist/antd.css";
import type { AppProps } from "next/app";
import "../../public/assets/css/bootstrap.min.css";
import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import { wrapper } from "./../app/store";

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

App.getInitialProps = wrapper.getInitialAppProps(
  (store) =>
    async ({ Component, ctx }) => {
      if (!ctx.req) {
        return {
          pageProps: {
            ...(Component.getInitialProps
              ? await Component.getInitialProps({ ...ctx, store })
              : {}),
            pathname: ctx.pathname,
          },
        };
      }

      try {
        return {
          pageProps: {
            ...(Component.getInitialProps
              ? await Component.getInitialProps({ ...ctx, store })
              : {}),
            pathname: ctx.pathname,
          },
        };
      } catch (error) {
        ctx.res.statusCode = 404;
        ctx.res.end("Not found");
        return;
      }
    }
);

export default wrapper.withRedux(App);
