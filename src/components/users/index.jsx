import "./usuarios.css";
import { useEffect, useState } from "react";
export default function Users(){
        const [listaUsers, setListaUsers] = useState([]);
        const [msgError, setMsgError] = useState("");
        const [linkAPI, setLinkAPI] = useState("https://dummyjson.com/users")
        useEffect( () => {
            fetch(linkAPI)
            .then(res => res.json()) // happy path (dar certo)
            .then(data => {
                console.log(data);
                setListaUsers(data.users);
                setMsgError("");
            })
            .catch(erro => setMsgError(erro.message)) //sad path (dar errado)
        }, [] );
        return(
            <main>
                {msgError != "" && <p>Erro: {msgError}</p>}

            {listaUsers.length > 0 ?
            // div somente aparece se tiver usuarios
            <div className="card-conteiner">
                {listaUsers.map((user) =>{
                    return(
                        <div key={user.id} className="users" >
                            <h3>{user.firstName}{'  '}{user.lastName}{' | '}{user.country}{' , '}{user.address.state}{'  '}{user.address.city}</h3>
                            <br></br>
                            <img src={user.image} alt="" />
                            <br/>
                            <p>E-mail: <b>{user.email}</b></p>
                        </div>
                    )
                })}
            </div> : 
            //se não tiver usuario mostra essa div
            <div>
            <p>Sem usuários por enquanto! Tente novamente mais tarde</p>
            </div>
            }
            </main>)
}