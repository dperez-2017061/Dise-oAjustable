import '../stylesheets/img.css'

function Img(props){
    return(
            <div className="cards">
                <img src={require(`../img/${props.img}`)} alt="Planta" className="cards-img"/>
                <h1 className="cardsh1">{props.name}</h1>
                <h2 className="cardsh2">{props.description}</h2>
                <div className="ground">
                    <h2 className='barra mb-0'>{props.type}</h2>
                    <div className="yellow bg-warning">
                        <h2 className="yellowh2 text-light mb-0">Q{props.price}</h2>
                    </div>
                </div>
            </div>
    )
}

export default Img;