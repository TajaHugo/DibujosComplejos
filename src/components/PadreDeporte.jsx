import { Component } from "react";
import HijoDeporte from "./HijoDeporte";

class PadreDeporte extends Component {

    deporte = ["Fútbol", "Baloncesto","Voleibol"]

    state = {
        favorito:""
    }

    mostrarFavorito = (deporteSeleccionado) =>{
        this.setState({
            favorito: deporteSeleccionado
        })
    }

    render() {
        return (
            <div>
                <h1>Padre deportes</h1>
                <h3>Su deporte favorito es: {this.state.favorito}</h3>
                {
                    this.deporte.map((sport, index) => {
                        return(<HijoDeporte nombre={sport} key={index}
                        mostrarFavorito = {
                            this.mostrarFavorito
                        }
                        />)
                    })
                }
            </div>
        )
    }
}

export default PadreDeporte;