import Head from "next/head"
import { MainBanner } from "../components/MainBanner"

export default function Home() {
  return (
    <>
      <Head>
        <title>Codetech - Início</title>
      </Head>

      <MainBanner />
    </>
  )
}
