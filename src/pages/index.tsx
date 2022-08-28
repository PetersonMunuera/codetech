import Head from "next/head"
import { MainBanner } from "../components/MainBanner"
import { Departments } from "../components/Departments"
import { Highlights } from "../components/Highlights"
import { Benefits } from "../components/Benefits"
import { NewProducts } from "../components/NewProducts"

export default function Home() {
  return (
    <>
      <Head>
        <title>Codetech - Início</title>
      </Head>

      <MainBanner />
      <Departments />
      <Highlights />
      <Benefits />
      <NewProducts />
    </>
  )
}
