import "./login.css";
export default function Login() {
    return (
        <>
        <div className="middle" >
            <img src="/imagens/favicon.png" height={150} />
            <div className="middleBox" >
                <h1>Login</h1>
                <p>Esta é a página de Login.</p>
                <form action={"/"} id="loginForm">
                    <label>Usuário:</label>
                    <input type="text" id="user" required />
                    <br/>
                    <label>Senha:</label>
                    <input type="password" id="pass" required />
                    <br/>
                    <button type="submit"> Enviar </button>
                </form>
            </div>
        </div>
        </>
    );
}
