import Head from "next/head";

export default function WithHead({ prop }: { prop: { title: string } }) {
  return (
    <>
      <Head>
        <title>{prop.title}</title>
      </Head>
    </>
  );
}
