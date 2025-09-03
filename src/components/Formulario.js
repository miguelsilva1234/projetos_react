import { useState } from "react"

function Formulario(){

    function cadastrar(e){
        e.preventDefault()
<<<<<<< HEAD
        //console.log(nome)
        //console.log('Cadastrou um usuário')
        console.log(`Usuario ${nome} cadastrado com a senha: ${senha}`)
    }

    const [nome, setNome] = useState('Miguel')
    const [senha, setSenha] = useState('')

=======
         console.log(nome)
         console.log('Cadastrou um usuário')
        // console.log(`Usuário ${nome} cadastrado com a senha: ${senha}`)
    }

    const [nome, setNome] = useState('')
    // const [senha, setSenha] = useState()
>>>>>>> 783a1d5bf9d78d3b8adf0e273062ee3e774742a7
    return(
        <div>
            <h1>Cadastro</h1>
            <form onSubmit={cadastrar}>
                <div>
                    <label htmlFor="nome">Nome:</label>
<<<<<<< HEAD
                    <input 
                        type="text"
                        id="nome"
                        name="nome"
                        placeholder="Digite seu nome" 
                        value={nome}
                        onChange={(e)=> setNome(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="senha">Senha:</label>
                    <input 
                        type="password"
                        id="senha"
                        name="senha"
                        placeholder="Digite sua senha" 
                        onChange={(e)=> setSenha(e.target.value)}
=======
                    <input type="text" placeholder="Digite seu nome"
                    type="text"
                    id="nome"
                    name="nome"
                    placeholder="Digite seu nome"
                    value={nome}
                    onChange= { (e)=> setNome(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="Senha">Senha:</label>
                    <input type="password" placeholder="Digite sua senha" 
                    // onChange= { (e)=> setSenha(e.target.value)}
>>>>>>> 783a1d5bf9d78d3b8adf0e273062ee3e774742a7
                    />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Formulario