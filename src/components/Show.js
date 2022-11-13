import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {collection, getDocs, getDoc, deleteDoc, doc} from 'firebase/firestore';
import { db } from '../firebaseConfig/credenciales';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { async } from '@firebase/util'
const MySwal = withReactContent(Swal)

const Show = () => {
    //1 - configuramos los hooks
    const [ganancias, setganancias] = useState( [] )
  
    //2 - referenciamos a la DB firestore
    const gananciasCollection = collection(db, "ganancias")
  
    //3 - Funcion para mostrar TODOS los docs
    const getganancias = async ()   => {
     const data = await getDocs(gananciasCollection)
        //console.log(data)
        setganancias(
            data.docs.map( (doc) => ( {...doc.data(),id:doc.id}))
        )
        console.log(ganancias)
    }
    //4 - Funcion para eliminar un doc
    const deleteganancias = async (id) =>{
        const gananciasDoc = doc(db, "ganancias", id)
        await deleteDoc(gananciasDoc)
        getganancias()
    }
    //5 - Funcion de confirmacion para Sweet Alert 2
    const confirmDelete = (id) => {
        MySwal.fire({
          title: '¿Elimina el producto?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: '#3085d6',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) { 
            //llamamos a la fcion para eliminar   
            deleteganancias(id)               
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
        })    
      }
    //6 - usamos useEffect
    useEffect( () => {
        getganancias()
        // eslint-disable-next-line
      }, [] )
    //7 - devolvemos vista de nuestro componente

      return (
        <>
         <div className='container'>
            <div className='row'>
                <div className='col'>
                    <div className='d-grid gap-2'>
                    <Link to="/create" className='btn btn-secondary mt-2 mb-2'>Create</Link>    
                    </div>
                    <table className='table table-dark table-hover'>
                        <thead>
                            <tr>
                                <th>Nombre del Producto</th>
                                <th>Fecha de Venta</th>
                                <th>Cuanto se gano</th>
                                <th>Cunato se perdio</th>
                                <th>Precio del Producto</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            { ganancias.map( (ganancia) => (
                                <tr key={ganancia.id}>
                                <td>{ganancia.NombredelProducto}</td>
                                <td>{ganancia.FechadeVenta}</td>
                                <td>{ganancia.CuantoseGano}</td>
                                <td>{ganancia.CuantosePerdio}</td>
                                <td>{ganancia.PreciodelProducto}</td>
                                <td>
                                <Link to={`/edit/${ganancia.id}`} className="btn btn-light"><i className="fa-solid fa-pencil"></i></Link>
                                <button onClick={ () => { confirmDelete(ganancia.id) } } className="btn btn-danger"><i className="fa-solid fa-trash"></i></button>
                                </td>
                                </tr>
                            ) ) }
                        </tbody>
                    </table>
                </div>
            </div>
         </div>
        </>
      )
    }

    export default Show;