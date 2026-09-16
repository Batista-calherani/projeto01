import "./cardPostBlog.css";
export default function CardBlog({titulo, descricao, imagem, hora, categoria})
{
    return(
        <div className="card-warp">
                <img src={imagem} alt="" />
                <div className="top">
                    <h2> {titulo} </h2>
                    <p> {descricao} </p>
                    <p> {hora} - {categoria} </p>
                </div>
            </div>
    )
}
