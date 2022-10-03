import React from 'react'
import GoogleMapReact from 'google-map-react';
import Logo from '../assets/lgchico.png'

const AnyReactComponent = ({ text }) => <div className='bg-dark'>
  <img src={Logo}/>
</div>;

export const Mapa = () => {
  const defaultProps = {
    center: {
      lat: 19.671257,
      lng: -101.202433
    },
    zoom: 18
  };
  return (
    <main>
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "******************************" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={19.671257}
          lng={-101.202433}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
    <div className="container">
    
      {/* <button onclick="gmapController.addUserLocation()">
        Donde te encuentras?
      </button>
 
      <label>Direccion: </label>
      <input id="address" type="text" value="Av. Fuentes de Morelia #666" />
      <button onclick="gmapController.getDirections()">
        Como llegar...
      </button>
      <button onclick="gmapController.setMarkerOnAddress()">
        Buscar Direccion
      </button>
      <div id="directionsArea">
      </div>
      <div id="errorArea" class="alert d-none">
      </div> */}
    </div>
    
  </main>
  )
}
