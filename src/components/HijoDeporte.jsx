import { Component } from "react";

class HijoDeporte extends Component {

    seleccionarFavorito = () => {
        //Cuando deseemos, llamamos al padre mediante su metodo en props
        this.props.mostrarFavorito(this.props.nombre)
    }

    render() {
        return (
            <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:10}}>
                <h3>Deporte: {this.props.nombre}</h3>
                <button onClick={this.seleccionarFavorito}>Favorito</button>

            </div>
        )
    }
}

export default HijoDeporte;