import { Component } from "react";

class Contador extends Component {

    numero = 1;
    incrementoNumero = () =>{
         this.numero +=1;
         console.log("Numero: " + this.numero)
    
    }

    //ASI SE DECLARA UN STATE
    state = {
        valor:parseInt(this.props.inicio)
        
    }

    incremetarState= () =>{

        //Para cambiar los valores de un state se usa setState({}), dentro de las llaves se pondrían los valores
        //y con : pondríamos el cambio. 
        this.setState({
            valor: this.state.valor + 1,
        })
    }

    render() {
        return (
            <div>
                <h1>Contador JSX: {this.props.inicio}</h1>
                <h2>Valor: {this.state.valor}</h2>
                <button onClick={this.incrementoNumero}>Incrementar</button>
                <button onClick={this.incremetarState}>Incremetar state</button>
            </div>
        )
    }
}

export default Contador;