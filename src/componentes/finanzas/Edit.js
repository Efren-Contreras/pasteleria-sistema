import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig/credenciales";

const Edit = () => {
    const [ NombredelProducto, setNombredelProducto ] = useState('')
    const [ FechadeVenta, setFechadeVenta ] = useState('')
    const [ CuantoseGano, setCuantoseGano ] = useState()
    const [ CuantosePerdio, setCuantosePerdio ] = useState()
    const [ PreciodelProducto, setPreciodelProducto ] = useState()

    const navigate = useNavigate()    
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        const ganancias = doc(db, "ganancias", id)
        const data = {NombredelProducto: NombredelProducto, FechadeVenta: FechadeVenta, CuantoseGano: CuantoseGano, CuantosePerdio: CuantosePerdio, PreciodelProducto: PreciodelProducto}
        await updateDoc(ganancias, data)
        navigate('/verFinanzas')
    }

    const getgananciatById = async (id) => {
        const ganancia = await getDoc( doc(db, "ganancias", id) )
        if(ganancia.exists()) {
            //console.log(product.data())
            setNombredelProducto(ganancia.data().NombredelProducto)    
            setFechadeVenta(ganancia.data().FechadeVenta)    
            setCuantoseGano(ganancia.data().CuantoseGano)
            setCuantosePerdio(ganancia.data().CuantosePerdio)
            setPreciodelProducto(ganancia.data().PreciodelProducto)
        }else{
            console.log('El registro de la ganacia no existe')
        }
    }

    useEffect( () => {
        getgananciatById(id)
        // eslint-disable-next-line
    }, [])

    return (
        <div className='container'>
        <div className='row'>
            <div className='col'>
                <h1>Edit Ganancia</h1>
                 <form onSubmit={update}>
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
                    <button type='submit' className='btn btn-primary'>Update</button>
                 </form>   
            </div>
        </div>
    </div> 
    )
}

export default Edit