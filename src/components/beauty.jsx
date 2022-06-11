import Img from '../components/img'
import '../stylesheets/sub.css'

function Beauty() {
    return (
        <div>
            <div className='back-sub'></div>
            <div className="cont-sub">
                <h1 className="text text-center back-h1">Belleza</h1>
            </div>
            <div className='d-flex align-items-center justify-content-center plant-sub'>
                <Img
                    name="Perfume Apolo"
                    img="perfume.jpeg"
                    description="Marca Scentia"
                    type="Para mujer"
                    price="40"
                />
                <Img
                    name="Perfume Avon"
                    img="belleza.jpeg"
                    description="Marca Fantasy"
                    type="Sombra"
                    price="55"
                />
                <Img
                    name="Loción"
                    img="belleza1.jpeg"
                    description="Marca Soft Musk"
                    type="Loción de vainilla"
                    price="55"
                />
                <Img
                    name="Colonia"
                    img="belleza2.jpeg"
                    description="Marca Avon"
                    type="Colonia de niña"
                    price="20"
                />
                <Img
                    name="Loción"
                    img="belleza3.jpeg"
                    description="Marca Soft Musk"
                    type="Loción Avon "
                    price="55"
                />
                <Img
                    name="Shampoo 2 en 1"
                    img="belleza4.jpeg"
                    description="Super Food"
                    type="Acondicionador concentrado"
                    price="35"
                />
            </div>
        </div>
    )
}

export default Beauty;