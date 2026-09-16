import CardProduto from "@/components/CardProduto";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./product.css";
export default function Produtos(){

    const listaProdutos = [
        {
            id:1,
            titulo: "Notebook ideapad gaming",
            descricao: "Um notebook gamer para seus melhores jogos",
            imagem: "/imagens/notebook.webp",
            preco: 3999.00
        },
        {
            id:2,
            titulo: "Monitor",
            descricao: "Acompanha HDR e IPS",
            imagem: "/imagens/monitor.webp",
            preco: 987.20
        },
        {
            id:3,
            titulo: "Mouse MX Logitech",
            descricao: "o melhor que a tecnologia pode oferecer",
            imagem: "/imagens/Mouse.webp",
            preco: 678.83
        },
        {
            id:4,
            titulo: "HeadSet Muito Pika",
            descricao: "o melhor Som que pode se ouvir",
            imagem: "/imagens/Headset.webp",
            preco: 678.83
        }
    ];

    return(
        <>
        <Header></Header>
            <h1>Listagem de produtos</h1>
            <div className="card-conteiner">
                {listaProdutos.map(produto => {
                    return <CardProduto 
                    key={produto.id}
                    titulo={produto.titulo}
                    descricao={produto.descricao}
                    imagem={produto.imagem}
                    preco={produto.preco} />
                })}
            </div>
        <Footer></Footer>
        </>
    )};