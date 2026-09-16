import "./bannerCTA.css"

export default function BannerCTA(){
    return(
        <>
            <section className="banner-conteiner-fluid">
                <button type="button" className="buttonCTA" >
                    Comprar produtos
                </button>
                <p className="textoCTA" >Adiquira e seja sua melhor versão</p>
                <img src="/imagens/hamburguer-mexicano.jpg" alt="" />
            </section>
        </>
    )
}