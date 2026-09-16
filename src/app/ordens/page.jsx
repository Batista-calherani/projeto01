"use client";

import { useState } from "react";
import "./ordens.css"; // Importando o arquivo CSS

export default function Ordens(){
    const [ordens, setOrdens] = useState([]);

    const [cliente, setCliente] = useState("");
    const [descricao, setDescricao] = useState("");
    const [equipamento, setEquipamento] = useState("");

    const [erro, setErro] = useState("");

    function cadastrarOrdem(event){
        event.preventDefault(); // para a pagina não recarregar quando envia formulário
        //validacões
        if(cliente.trim()==="" || equipamento.trim()==="" || descricao.trim()===""){
            setErro("preencha todos os campos");
            return; // acaba a função
        }

        const novaOrdem ={
            id: Date.now(),
            cliente: cliente.trim(),
            equipamento: equipamento.trim(),
            descricao: descricao.trim(),
            status: "Aberta"
        }

        setOrdens([...ordens, novaOrdem]); // adicionar itens na lista
        console.log(ordens);
        //limpa os campos
        setCliente("");
        setEquipamento("");
        setDescricao("");
        setErro("");
    }

    return(
        <main>
            <h1>Ordens de Serviço</h1>
            <form onSubmit={cadastrarOrdem}>
                <div className="inputs">
                <label htmlFor="cliente">Cliente:</label>
                <input
                    type="text"
                    name="cliente"
                    id="cliente"
                    placeholder="Nome do cliente"
                    value={cliente}
                    onChange={(event) => setCliente(event.target.value)}
                />
                </div>
                <div className="inputs">
                <label htmlFor="equipamento">Equipamento:</label>
                <input
                    type="text"
                    name="equipamento"
                    id="equipamento"
                    placeholder="Ex.:Notebook"
                    value={equipamento}
                    onChange={(event) => setEquipamento(event.target.value)}
                />
                </div><div className="inputs">
                <label htmlFor="descricao">Descrição:</label>
                <textarea
                    type="text"
                    name="descricao"
                    id="descricao"
                    placeholder="Descreva o problema"
                    minLength={15}
                    maxLength={100}
                    value={descricao}
                    onChange={(event) => setDescricao(event.target.value)}
                />
                </div>

                {erro != "" && <p>{erro}</p>}

                <button type="submit">Cadastrar Ordem</button>
            </form>
            <table>
                <tbody>
                    {ordens.map((pedidos) => (
                        <tr key={pedidos.id}>
                            <th>Id: {pedidos.id}</th>
                            <th>Cliente: {pedidos.cliente}</th>
                            <th>Equipamento: {pedidos.equipamento}</th>
                            <th>Descrição: {pedidos.descricao}</th>
                            <th>Status: {pedidos.status}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    )
}