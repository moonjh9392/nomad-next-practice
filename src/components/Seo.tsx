import Head from 'next/head';

type props = {
  title: string;
};

export default function Seo({ title }: props) {
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
}
