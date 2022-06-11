import Img from '../components/img'
import '../stylesheets/sub.css'

function Plants() {
    return (
        <div>
            <div className='back-sub'></div>
            <div className="cont-sub">
                <h1 className="text text-center back-h1">Plantas</h1>
            </div>
            <div className='d-flex align-items-center justify-content-center plant-sub'>
                <Img
                    name="Violeta"
                    img="planta1.png"
                    description="Para interior"
                    type="Sombra"
                    price="40"
                />
                <Img
                    name="Capa de Rey"
                    img="planta2.png"
                    description="Exterior"
                    type="Sol"
                    price="30"
                />
                <Img
                    name="Ciclamen"
                    img="planta3.png"
                    description="Interior"
                    type="Sombra"
                    price="15"
                />
                <Img
                    name="Suculenta"
                    img="planta4.png"
                    description="Exterior"
                    type="Sol"
                    price="30"
                />
                <Img
                    name="Violeta"
                    img="planta5.png"
                    description="Interior"
                    type="Sombra"
                    price="15"
                />
                <Img
                    name="Suculenta"
                    img="planta6.png"
                    description="Exterior"
                    type="Sol"
                    price="25"
                />
            </div>
        </div>
    )
}

export default Plants;