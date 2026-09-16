import Image from "next/image";
import styles from "./page.module.css";
import BannerCTA from "@/components/bannerCTA";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default async function Home() {

  return (
    <>
    <Header/>
    <main className="content">
      <div className="head2">
        <div className="mainBox" >
          <h1 className="titulo" >
            Convert More Leads
          </h1>
          <p className="paragrafo">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis numquam qui perferendis quis unde magni quam sed repudiandae odio veritatis, possimus minima laudantium non assumenda, ad quia officia commodi eligendi?
          </p>
        </div>
        <img className="bgImage" src="https://placehold.co/900x850"/>
      </div>
      <BannerCTA/>
    </main>
    <Footer/>
    </>
  );
}
