import Head from "next/head";

export default function AppLayout({ children, description, title }: AppLayout) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div>{children}</div>
    </>
  );
}
