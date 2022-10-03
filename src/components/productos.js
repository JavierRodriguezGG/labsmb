import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import Asadero from '../assets/Asadero.jpeg'
import Panela from '../assets/Panela.jpeg'
import Adobera from '../assets/Adobera.jpeg'
import Añejo from '../assets/Añejo.jpeg'
import Ranchero from '../assets/Ranchero.jpeg'
import Requeson from '../assets/Requeson.jpeg'
import YFresa from '../assets/YFresa.jpeg'
import YNanche from '../assets/YNanche.jpeg'
import YNuez from '../assets/YNuez.jpeg'
import Chongos from '../assets/Chongos.jpeg'
import Crema from '../assets/Crema.jpeg'



export const Productos = () => {
    const [state, setstate] = useState({
        data:{
            quesos:[
                {
                    title:"Queso Asadero",
                    price:"160",
                    description:"El elegido para las quesadillas",
                    img:Asadero
                },
                {
                    title:"Queso Panela",
                    price:"160",
                    description:"El especial para la dieta!",
                    img:Panela
                },
                {
                    title:"Queso Adobera",
                    price:"160",
                    description:"El Ideal para la carnita asada!",
                    img:Adobera
                },
                {
                    title:"Queso Añejo",
                    price:"300",
                    description:"Un Clasico con gran sabor!",
                    img:Añejo               
                },
                {
                    title:"Queso Ranchero",
                    price:"70",
                    description:"El bueno pa' todo!",
                    img:Ranchero   
                },
                {
                    title:"Queso Requeson",
                    price:"70",
                    description:"El sabroso en taquitos dorados!",
                    img:Requeson   
                },
            ],
            yogurt:[
                {
                    title:"Yogurt de Fresa",
                    price:"40",
                    description:"El Favorito",
                    img:YFresa  
                },
                {
                    title:"Yogurt de Nuez",
                    price:"40",
                    description:"El especial!",
                    img:YNuez 
                },
                {
                    title:"Yogurt de Nanche",
                    price:"40",
                    description:"El diferente",
                    img:YNanche  
                },
            ],
            otros:[
                {
                    title:"Crema",
                    price:"80",
                    description:"Queda perfecta para un elote!",
                    img:Crema 
                },
                {
                    title:"Chongos",
                    price:"80",
                    description:"Los originales",
                    img:Chongos 
                },
            ],

        },
        showOrden:false,
        orden:null
    })

    const getInfo = (item) =>{
        setstate({...state, showOrden:true, orden:item})
        console.log(item)

    }
  return (
    <main >

        <aside className=''>
            <img width={'200px'} src={Logo} className="banner" with="10%" alt="Lacteos Aydee"/>
        </aside>

        {state.showOrden ?
                <div>
                     <div className="pie">
                        <img src={state.orden.img} alt="Asadero"/>
                        <div className="columns">
                            <div className="title">{state.orden.title}</div>
                            <div className="price">${state.orden.price}</div>
                        </div>
                        <p className="desc">{state.orden.description}</p>
                    </div>
                    <form action="http://localhost:7071/api/post" method="POST">
                        <input type="hidden" id="product-order" name="product-order"/>
                        <input type="hidden" id="location" name="location"/>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">Nombre</span>
                            <input type="text" class="form-control" placeholder="Nombre" aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">Apellido</span>
                            <input type="text" class="form-control" placeholder="Apellido" aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">Direccion</span>
                            <input type="text" class="form-control" placeholder="Direccion" aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">C.P</span>
                            <input type="text" class="form-control" placeholder="C.P" aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>
                        <div class="input-group">
                            <span class="input-group-text">Comentarios</span>
                            <textarea class="form-control" aria-label="With textarea"></textarea>
                        </div>
                        <input type="reset" value="Reset"/>
                        <input type="submit" value="Order"/>
                    </form>
                </div>
            :
            <article>

                <h1>Quesos</h1>
                <section className="columns-desktop">
                    {state.data.quesos.map((item,i)=>{
                        return(
                            <div className="pie" key={i}>
                                <img src={item.img} alt="Asadero"/>
                                <div className="columns">
                                    <div className="title">{item.title}</div>
                                    <div className="price">${item.price}</div>
                                </div>
                                <p className="desc">{item.description}</p>
                                <button onClick={()=>{
                                    getInfo(item)
                                }}>Orden</button>
                            </div>
                        )
                    })}
                </section>
                <h1>Yogurt</h1>
                <section className="columns-desktop">
                    {state.data.yogurt.map((item,i)=>{
                            return(
                                <div className="pie" key={i}>
                                    <img src={item.img} alt="Asadero"/>
                                    <div className="columns">
                                        <div className="title">{item.title}</div>
                                        <div className="price">${item.price}</div>
                                    </div>
                                    <p className="desc">{item.description}</p>
                                    <button onClick={()=>{
                                        getInfo(item)
                                    }}>Orden</button>
                                </div>
                            )
                        })}
                </section>
                <h1>Otros</h1>
                <section className="columns-desktop">

                {state.data.otros.map((item,i)=>{
                        return(
                            <div className="pie" key={i}>
                                <img src={item.img} alt="Asadero"/>
                                <div className="columns">
                                    <div className="title">{item.title}</div>
                                    <div className="price">${item.price}</div>
                                </div>
                                <p className="desc">{item.description}</p>
                                <button onClick={()=>{
                                    getInfo(item)
                                }}>Orden</button>
                            </div>
                        )
                    })}
                    {/* <div className="pie">
                        <img src={Chongos} alt="Chongos"/>
                        <div className="columns">
                            <div className="title">Chongos </div>
                            <div className="price">$80</div>
                        </div>
                        <p className="desc">Los originales</p>
                        <button data-order="Chongos">Orden</button>
                    </div>
                    <div className="pie">
                        <img src={Crema}alt="Crema"/>
                        <div className="columns">
                            <div className="title">Crema</div>
                            <div className="price">$40</div>
                        </div>
                        <p className="desc">Queda perfecta para un elote!</p>
                        <button data-order="Crema">Orden</button>
                    </div> */}
                </section>
            </article>
        }
    </main>
  )
}


