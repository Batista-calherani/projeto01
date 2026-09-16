import "./Header.css";
import Link from "next/link";
export default function Header(){
    return(
        <>
            <header>
                <div className="head2" >
                    <div className="head">
                    <Link href={"/"}> <img src="/imagens/favicon.png" width={100} height={100}/> </Link>
                    <ul>
                        <li className="lista" > <Link className="Link" href={"/product"} > Product↓</Link></li>
                        <li className="lista" > <Link className="Link" href={"/product/solution"}>Solution↓</Link></li>
                        <li className="lista" > <Link className="Link" href={"/Blog"}>Blog</Link></li>
                        <li className="lista" >Pricing</li>
                        <li className="lista" >Learn↓</li>
                        <li className="lista" >Contact</li>
                    </ul>
                    </div>
                    <div className="head">
                    <img src="/imagens/lupa.webp" height={25} width={25} />
                    <div className="Minibox"> <Link className="Link" href={"/login"} > <b>Log in</b></Link></div>
                    <div className="Bigbox">Start My Free Trail</div>
                    </div>
                </div>
            </header>
            <div className="invisBox" ></div>
        </>
    )
}