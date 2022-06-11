import '../stylesheets/home.css'
import Card from '../components/card'
import Img from '../components/img'

function Home() {
    return (
        <div>
            <div className='back'></div>
            <div className="cont">
                <div>
                    <h1 className="text text-center">Compra ya!</h1>
                </div>
                <div>
                    <h1 className="ali text-center">No te pierdas esta gran oportunidad</h1>
                </div>
            </div>
            <div>
                <div className="body">
                    <Card
                        src="productos.png"
                        content="Productos"
                    />
                    <Card
                        src="plants.png"
                        content="Plantas"
                        id="#plants" />
                    <Card
                        src="perfume.png"
                        content="Perfumes"
                    />
                </div>
                <hr className=' hr border-info border border-4 border-bottom-0' />
                <h1 className='text-center titl'>Productos </h1>
                <div className="plantas">
                    <Img
                        name="Rosas"
                        img="planta1.png"
                        description="planta rosada"
                        type="Sombra"
                        price="20"
                    />
                    <Img
                        name="Blusa"
                        img="camisa.jpeg"
                        description="
                        Talla 7/8"
                        type="Hombre"
                        price="15"
                    />
                    <Img
                        name="Rosas"
                        img="perfume.jpeg"
                        description="planta rosada"
                        type="Perfume"
                        price="50"
                    />
                </div>
                <div className="backg">
                    <div>
                        <p className="text-light text-center p mb-0">Contactanos</p>
                        <h1 className="text-light text-center padd">Aproveche los buenos precios con los que contamos</h1>
                    </div>
                    <p className="text-light text-center p">El lugar para comprar plantas, juguetes, prendas de vestir
                        y productos de belleza. Disponemos de una amplia variedad de productos. Si te gustan las plantas, nosotros tenemos variedad de ellas, muy bonitas y económicas para decorar su hogar
                        ¡Disfruta de nuesto catálogo!</p>
                    <div className=" div d-flex flex-column align-items-center text-align-center justify-content-center">
                        <p className="text-light text-center p">¿Que esperas para comprar?, contactanos de inmediato y podrás comprar variedad de productos a muy bun precio</p>
                        <h1 className="text-light padd">Contactanos</h1>
                    </div>
                </div>
                <div className="info">
                    <div className="venta-div">
                        <div className="venta-cont">
                            <div className="venta">
                                <h1 className="text-center text-light venta-text">En venta</h1>
                            </div>
                            <h2 className='venta-text'>producto de calidad</h2>
                        </div>
                        <div className="venta-info d-flex align-items-center flex-column">
                            <p className="venta-p text-center mt-5">Tenemos a la venta diferentes productos de excelente
                                calidad desde pequeñas plantas, hasta perfumes de muy buena calidad, si lo
                                desea comprar, puede comunicarse con nosotros y le daremos la información que necesite, esperamos que encuentre lo que esta buscando.</p>
                            <p className="venta-p text-center mt-5">¿Aprovecharas esta oportunidad? ¿Te perderas estos buenos precios? Te ofrecemos muy buenos precios en todos
                                nuestros productos, deberías de aprovechar y comprar lo que necesitas, si estas interesado en algún producto comuniquese con nosotros y
                                con gusto le atenderemos.</p>
                        </div>
                    </div>
                    <div className="venta-cimg">
                        <img className="venta-img" src={require('../img/plantas.jpg')} alt="planntas" />
                        <img className="venta-img" src={require('../img/plantas1.jpg')} alt="planntas" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;