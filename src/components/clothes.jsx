import Img from '../components/img'
import '../stylesheets/sub.css'

function Clothes() {
    return (
        <div>
            <div className='back-sub'></div>
            <div className="cont-sub">
                <h1 className="text text-center back-h1">Ropa</h1>
            </div>
            <div className='d-flex align-items-center justify-content-center plant-sub'>
                <Img
                    name="Blusa"
                    img="camisa.jpeg"
                    description="Talla 7/8"
                    type="Blusa unicornio"
                    price="10"
                />
                <Img
                    name="Blusa"
                    img="ropa.jpeg"
                    description="Talla S"
                    type="Blusa besh"
                    price="20"
                />
                <Img
                    name="Blusa"
                    img="ropa1.jpeg"
                    description="Talla L"
                    type="Blusa roja"
                    price="15"
                />
                <Img
                    name="Blusa"
                    img="ropa2.png"
                    description="Talla L"
                    type="Blusa de flores"
                    price="25"
                />
                <Img
                    name="Blusa"
                    img="ropa3.jpeg"
                    description="Talla 6"
                    type="Blusa Fucsia"
                    price="10"
                />
                <Img
                    name="Blusa"
                    img="ropa4.jpeg"
                    description="Talla 14"
                    type="Blusa formal"
                    price="25"
                />
            </div>
        </div>
    )
}

export default Clothes;