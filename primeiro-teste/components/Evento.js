<<<<<<< HEAD
function Evento({numero}) {

    function meuEvento() {
        console.log(`Opa, fui ativado! ==>${numero}`)
    }
=======
function Evento({numero}){

    function meuEvento(){
        console.log(`Opa, fui ativado! ==> ${numero}`)
    }

>>>>>>> d1c237339e96168cb9ca0e6700c385781e6bf13a
    return(
        <div>
            <p>Clique abaixo no botão</p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}

export default Evento