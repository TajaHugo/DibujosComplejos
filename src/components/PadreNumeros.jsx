import { Component } from "react";
import HijoNumero from "./HijoNumeros";

class PadreNumeros extends Component {
    

    state = {
        numeros: [],
        suma : 0
    };

    generarNumero = () => {
        const aleatorio = Math.floor(Math.random() * 120) + 1;
        this.state.numeros.push(aleatorio)
        this.setState({
            numeros: this.state.numeros,
        });
        
    };



    calcularSuma = (valor) => {
        this.setState({
            suma: this.state.suma + parseInt(valor)
        })
    };

    render() {
        return (
            <div>
                <h1>Padre Números</h1>

                <h2 style={{ backgroundColor: "yellow" }}>
                    La suma es: {this.state.suma}
                </h2>

                <button onClick={this.generarNumero}>Generar Número</button>
                {this.state.numeros.map((number, index) => {
                    return <HijoNumero numero={number} key={index} sumaTotal={this.calcularSuma}/>;
                })}

            </div>
        );
    }
}

export default PadreNumeros;