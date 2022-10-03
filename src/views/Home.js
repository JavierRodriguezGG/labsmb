import Logo from '../assets/logo.png'

const Home = () => (

  <main>
    <aside>
        <img src={Logo} className="banner"  width="20%" alt="Lacteos Aydee"/>
    </aside>
    <article>
        <h1>Bienvenidos a Lacteos Aydee</h1>
        <p className="sub-tittle">
          <b>Queso y mas que eso!!</b> , Lacteos Aydee es una empresa mexicana con mas de 15 años en el mercado, ofreciendo 
            <a href="products.html">nuestros productos </a>
            <b>100% de leche y artesanales</b>, con el sazon de la abuela, en el 2007 cuando iniciamos este proyecto pensamos 
            en la salud de nuestros clientes y en el sabor natural de nuestros productos, por tal motivo no usamos ningun tipo 
            de conservador asi que puede estar seguro de lo que se lleva es completamente original. 
        </p>
    </article>
 </main>
);

export default Home;
