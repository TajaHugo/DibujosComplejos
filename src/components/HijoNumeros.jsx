import { Component } from "react";

class HijoNumero extends Component {

    seleccionarNumero = () => {
        this.props.sumaTotal(this.props.numero)
    }


    render() {
        return (
            <div>
                <h3>Número: {this.props.numero}</h3>
                <button onClick={this.seleccionarNumero}>Suma {this.props.numero}</button>

            </div>
        )
    }



}

export default HijoNumero