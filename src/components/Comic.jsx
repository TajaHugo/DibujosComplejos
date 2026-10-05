import { Component } from "react";

export default class Comic extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.comic.titulo}</h1>
                <img style={{width: "60px", height:"80px"}} src={this.props.comic.imagen} alt="" />
                <p>{this.props.comic.descripcion}</p>

                <button onClick={() => this.props.seleccionarComic(this.props.comic)}>
                    Seleccionar favorito
                </button>
        
                <button onClick={() => this.props.deleteComic(this.props.index)}>
                    Borrar comic
                </button>


            </div>
        )
    }
}