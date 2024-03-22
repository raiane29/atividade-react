import './form.css'

const Form = ()=>{

    
    return(
         <form action="" className='meuForm'>
            <label htmlFor="email">Email: </label>
            <input type="emeil" name='email'/>
            <label htmlFor="senha">Senha: </label>
            <input type="password" name="senha" id="" />
            <input type="submit" name="" id="" value="Enviar" />
         </form>
    )
}
export default Form