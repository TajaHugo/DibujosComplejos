import { Component } from "react";

class DibujosComplejosRender extends Component {
    //Necesitamos un array em state para ir generando nuevos elementos al pulstar un boton
    state = {
        nombres: ["Diana", "Antonia", "Adrián", "Lucia"]
    }

    generarNombre = () => {
        //PODEMOS UTILIZAR EL METODO DEL ARRAY PUSH
        //SI ES UN OBJETO SIMPLE(string,int) NO PODEMOS ASIGNAR

        this.state.nombres.push("Nuevo nombre")
        //SI NO ASIGNAMOS EL VALOR POR setState, NO LO VEREMOS
        this.setState({
            nombres: this.state.nombres
        })
    }

    render() {
        return (
            <div>
                <h1>Dibujos complejos Render</h1>
                <button onClick={this.generarNombre}>Generar nombre</button>
                {
                    this.state.nombres.map((nombre, index) => {
                        //ESTE CODIGO NECESITA UN RETURN PARA EL RENDER 
                        return (<h4 style={{ color: "blue" }} key={index}>
                            {nombre}
                        </h4>)
                    })
                }
            </div>
        )
    }
}
export default DibujosComplejosRender;