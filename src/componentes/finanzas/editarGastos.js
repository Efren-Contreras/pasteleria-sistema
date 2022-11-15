import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig/credenciales";


const EditarGastos = () => {
  const [ fechagasto, setfechagasto ] = useState( '' )
  const [ salarioemp, setsalarioemp ] = useState()
  const [ servicios, setservicios ] = useState( '' )
  const [ materiales, setmateriales ] = useState( '' )
  const [ costoingrediente, setcostoingrediente ] = useState()
  const [ totalgasto, settotalgasto ] = useState()

  const navigate = useNavigate()
  const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        const gastos = doc(db, "gastos", id)
        const data = {fechagasto: fechagasto, salarioemp: salarioemp, servicios: servicios, materiales: materiales, costoingrediente: costoingrediente, totalgasto: totalgasto}
        await updateDoc(gastos, data)
        navigate('/verGastos')
    }

    const getgastoById = async (id) => {
      const gasto = await getDoc( doc(db, "gastos", id) )
      if(gasto.exists()) {
          //console.log(product.data())
          setfechagasto(gasto.data().fechagasto)    
          setsalarioemp(gasto.data().salarioemp)    
          setservicios(gasto.data().servicios)
          setmateriales(gasto.data().materiales)
          setcostoingrediente(gasto.data().costoingrediente)
          settotalgasto(gasto.data().totalgasto)
      }else{
          console.log('El registro de la ganacia no existe')
      }
  }

  useEffect( () => {
      getgastoById(id)
      // eslint-disable-next-line
  }, [])

  return (
    <div className='container'>
    <div className='row'>
        <div className='col'>
            <h1>Editar Gasto</h1>
             <form onSubmit={update}>
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
                        onChange={ (e)=> setsalarioemp(e.target.value)} 
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
                        onChange={ (e) => setmateriales(e.target.value)} 
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
                <button type='submit' className='btn btn-primary'>Actualizar</button>
             </form>   
        </div>
    </div>
</div> 
)
}

export default EditarGastos;