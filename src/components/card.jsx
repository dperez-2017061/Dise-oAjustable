import '../stylesheets/card.css'

function Card(props) {
    return (
        <div id={props.id} className='color'>
            <img src={require(`../img/${props.src}`)} alt="Productos" className="product"/>
            <div>
                <h1 className="text-light col1">{props.content}</h1>
                <a className="text-light col">Mas información</a>
            </div>
        </div>
    )
}

export default Card;