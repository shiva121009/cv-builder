import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/navbar/navbar";
import Main  from "./components/main/main"
import Feature from "./components/features";



export default function Home() {
  return (
    <>
    <Navbar func="Login"/>
    <Main/>
    <Feature/>
    </>
  );
}
