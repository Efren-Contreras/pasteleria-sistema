import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../firebaseConfig/credenciales'

const RegistrarGastos = () => {
  const [ fechagasto, setfechagasto ] = useState( '' )
  const [ salarioemp, setsalarioemp ] = useState()
  const [ servicios, setservicios ] = useState( '' )
  const [ materiales, setmateriales ] = useState( '' )
  const [ costoingrediente, setcostoingrediente ] = useState()
  const [ totalgasto, settotalgasto ] = useState()
  const navigate = useNavigate()
  const gastosCollection = collection(db, "gastos")

  const store = async (e) => {
    e.preventDefault()
    await addDoc( gastosCollection, { fechagasto: fechagasto, salarioemp: salarioemp, servicios: servicios, materiales: materiales, costoingrediente: costoingrediente, totalgasto: totalgasto } )
    navigate('/verGastos')
    //console.log(e.target[0].value)
  }

  return (
    <div className='row'>
    <div className='col'>
        <h1>CrearGasto</h1>
         <form onSubmit={store}>
            <div className='mb-3'>
                <label className='form-label'>Fecha del gasto</label>
                <input
                    value={fechagasto}
                    onChange={ (e) => setfechagasto(e.target.value)} 
                    type="text"
                    className='form-control'
                />
            </div>  
            <div className='mb-3'>
                <label className='form-label'>Salario de empleados</label>
                <input
                    value={salarioemp}
                    onChange={ (e) => setsalarioemp(e.target.value)} 
                    type="number"
                    className='form-control'
                />
            </div>  
            <div className='mb-3'>
                <label className='form-label'>Servicios</label>
                <input
                    value={servicios}
                    onChange={ (e)=> setservicios(e.target.value)} 
                    type="text"
                    className='form-control'
                />                 
            </div>  
            <div className='mb-3'>
                <label className='form-label'>Materiales</label>
                <input
                    value={materiales}
                    onChange={ (e)=> setmateriales(e.target.value)} 
                    type="text"
                    className='form-control'
                />                 
            </div>  
            <div className='mb-3'>
                <label className='form-label'>Costo ingrediente</label>
                <input
                    value={costoingrediente}
                    onChange={ (e)=> setcostoingrediente(e.target.value)} 
                    type="number"
                    className='form-control'
                />                 
            </div> 
            <div className='mb-3'>
                <label className='form-label'>Gasto total</label>
                <input
                    value={totalgasto}
                    onChange={ (e)=> settotalgasto(e.target.value)} 
                    type="number"
                    className='form-control'
                />                 
            </div> 
            <button type='submit' className='btn btn-primary'>Guardar</button>
         </form>   
        </div>
    </div>
    )
}

export default RegistrarGastos;