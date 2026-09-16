import CardBlog from "@/components/CardPostBlog";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./blog.css";
export default function Noticias(){

    const listaBlog = [
        {
            id:1,
            titulo: "Terremoto de Magnitude 6,6 Atinge o Peru",
            descricao: "Um forte terremoto de magnitude 6,6 na escala Richter atingiu a região central do Peru, próximo à zona de Ayacucho. O abalo...",
            imagem: "/imagens/terremoto.webp",
            hora: "Há 54 minutos",
            categoria: "Desastre"
        },
        {
            id:2,
            titulo: "Investimentos na Indústria da Defesa",
            descricao: "O presidente Luiz Inácio Lula da Silva voltou a defender publicamente ...",
            imagem: "/imagens/lula.webp",
            hora: "Há 4 dias",
            categoria: "Política"
        },
        {
            id:3,
            titulo: "Aquecimento no Mercado Imobiliário e Nova Linha de Crédito",
            descricao: "O setor de habitação e economia vem registrando forte movimento com a ampliação de programas de financiamento imobiliário e a revisão das taxas de juros para a compra da casa própria...",
            imagem: "/imagens/casas.webp",
            hora: "Há 3 minutos",
            categoria: "Economia"
        },
        {
            id:4,
            titulo: "Panela de Bairro ensina receita de pizza vulcão com puã de caranguejo",
            descricao: "Sucesso Gastronômico no Litoral Norte: A Pizza Vulcão de Puã de Caranguejo Uma criação culinária está movimentando o cenário gastronômico e as redes sociais no Nordeste e no litoral brasileiro: a Pizza Vulcão com Puã de Caranguejo...",
            imagem: "/imagens/culinaria.webp",
            hora: "Há 90 minutos",
            categoria: "Culinária"
        },
        {
            id:5,
            titulo: "Recorde Estrangeiro e Inflação no Futebol Brasileiro",
            descricao: "O Campeonato Brasileiro registrou a maior marca de sua história em relação ao número de atletas estrangeiros atuando na Série A...",
            imagem: "/imagens/futball.webp",
            hora: "Há 54 minutos",
            categoria: "Esportes"
        },
        {
            id:6,
            titulo: "Escalada Comercial Entre Canadá e Estados Unidos",
            descricao: "O cenário geopolítico das Américas registrou um pico de tensão após o Canadá decidir aplicar tarifas de retaliação sobre US$ 20 bilhões em produtos norte-americanos...",
            imagem: "/imagens/eua_canada.webp",
            hora: "Há 4 dias",
            categoria: "Internacional"
        },
        {
            id:7,
            titulo: "Avanço da PEC da Jornada de Trabalho no Congresso",
            descricao: "O Congresso Nacional vive um momento de forte mobilização política em torno da Proposta de Emenda à Constituição (PEC) que propõe a revisão da jornada de trabalho 6x1...",
            imagem: "/imagens/6x1.webp",
            hora: "Há 3 minutos",
            categoria: "Politica"
        },
        {
            id:8,
            titulo: "A Ascensão do Vinagre de Frutas Nativas na Gastronomia de Elite",
            descricao: "O cenário gastronômico brasileiro vem passando por uma revolução silenciosa nos bastidores dos restaurantes de alta gastronomia: a substituição de acidificantes tradicionais...",
            imagem: "/imagens/vinagre.webp",
            hora: "Há 90 minutos",
            categoria: "Culinária"
        },
        {
            id:9,
            titulo: "Definição do Chaveamento das Quartas da Libertadores",
            descricao: "A Copa Libertadores da América encerrou a fase de oitavas de final com a confirmação de todos os oito clubes classificados para as quartas...",
            imagem: "/imagens/libertadores.webp",
            hora: "Há 3 minutos",
            categoria: "Esportes"
        },
        {
            id:10,
            titulo: "Prévia da Inflação Recua em Agosto com Alívio na Conta de Luz",
            descricao: "O Índice Nacional de Preços ao Consumidor Amplo 15 (IPCA-15), considerado a prévia da inflação oficial do país, registrou uma deflação de 0,40% no mês de agosto...",
            imagem: "/imagens/conta_luz.webp",
            hora: "Há 90 minutos",
            categoria: "Economia"
        }
    ];

    return(
        <>
        <Header></Header>
            <h1 className="titulo" >Listagem das Ultimas Noticias</h1>
            <div className="card-conteiner">
                {listaBlog.map(Noticias => {
                    return <CardBlog 
                    key={Noticias.id}
                    imagem={Noticias.imagem}
                    titulo={Noticias.titulo}
                    descricao={Noticias.descricao}
                    hora={Noticias.hora}
                    categoria={Noticias.categoria}
                    />
                })}
            </div>
        <Footer></Footer>
        </>
    )};