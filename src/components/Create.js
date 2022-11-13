import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebaseConfig/credenciales'
const Create = () => {
const [ NombredelProducto, setNombredelProducto ] = useState( '' )
const [ FechadeVenta, setFechadeVenta ] = useState( '' )
const [ CuantoseGano, setCuantoseGano ] = useState()
const [ CuantosePerdio, setCuantosePerdio ] = useState()
const [ PreciodelProducto, setPreciodelProducto ] = useState()
  const navigate = useNavigate()
  const gananciasCollection = collection(db, "ganancias")

  const store = async (e) => {
    e.preventDefault()
    await addDoc( gananciasCollection, { NombredelProducto: NombredelProducto, FechadeVenta: FechadeVenta, CuantoseGano: CuantoseGano, CuantosePerdio: CuantosePerdio, PreciodelProducto: PreciodelProducto } )
    navigate('/')
    //console.log(e.target[0].value)
  }

  return(
    <div className='row'>
    <div className='col'>
        <h1>Create Product</h1>
         <form onSubmit={store}>
            <div className='mb-3'>
                <label className='form-label'>Nombre del Producto</label>
                <input
                    value={NombredelProducto}
                    onChange={ (e) => setNombredelProducto(e.target.value)} 
                    type="text"
                    className='form-control'
                />
            </div>  
            <div className='mb-3'>
                <label className='form-label'>Fecha de Venta</label>
                <input
                    value={FechadeVenta}
                    onChange={ (e) => setFechadeVenta(e.target.value)} 
                    type="text"
                    className='form-control'
                />
            </div>  
            <div className='mb-3'>
                <label className='form-label'>Cuanto se Gano</label>
                <input
                    value={CuantoseGano}
                    onChange={ (e)=> setCuantoseGano(e.target.value)} 
                    type="number"
                    className='form-control'
                />                 
            </div>  
            <div className='mb-3'>
                <label className='form-label'>Cuanto se Perdio</label>
                <input
                    value={CuantosePerdio}
                    onChange={ (e)=> setCuantosePerdio(e.target.value)} 
                    type="number"
                    className='form-control'
                />                 
            </div>  
            <div className='mb-3'>
                <label className='form-label'>Precio del Producto</label>
                <input
                    value={PreciodelProducto}
                    onChange={ (e)=> setPreciodelProducto(e.target.value)} 
                    type="number"
                    className='form-control'
                />                 
            </div> 
            <button type='submit' className='btn btn-primary'>Store</button>
         </form>   
        </div>
    </div>
    )
}
export default Create; 