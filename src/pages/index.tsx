import Head from "next/head"
import { MainBanner } from "../components/MainBanner"
import { Departments } from "../components/Departments"

export default function Home() {
  return (
    <>
      <Head>
        <title>Codetech - Início</title>
      </Head>

      <MainBanner />
      <Departments />
    </>
  )
}
