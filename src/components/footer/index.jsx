import "./footer.css";
import Link from "next/link";
export default function Footer(){
    return(
        <>
        <footer>
          <div className="box">
            <img src="/imagens/favicon.png" alt="" />
            <h3><Link className="Link" href={"/"}>Home</Link></h3>
          </div>
          <div className="redes">
            <p>© Copyright 2026-2026 Jorgias Comunicação e Produtos S.A.</p>
            <ul>
              <li>Instagram</li>
              <li>Facebook</li>
            </ul>
          </div>
        </footer>
        </>
    )
}