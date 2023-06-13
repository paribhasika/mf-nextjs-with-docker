import { revalidate } from '@module-federation/nextjs-mf/utils';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);

    // can be any lifecycle or implementation you want
    if (
      process.env.NODE_ENV === 'development' &&
      !ctx.req?.url?.includes('_next')
    ) {
      await revalidate().then((shouldReload) => {
        if (shouldReload) {
          ctx.res?.writeHead(302, { Location: ctx.req?.url });
          ctx.res?.end();
        }
      });
    } else {
      ctx.res?.on('finish', () => {
        revalidate();
      });
    }

    return initialProps;
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
