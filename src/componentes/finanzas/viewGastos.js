import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {collection, getDocs, getDoc, deleteDoc, doc} from 'firebase/firestore';
import { db } from '../../firebaseConfig/credenciales';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { async } from '@firebase/util'
const MySwal = withReactContent(Swal)

const ViewGastos = () => {
   //1 - configuramos los hooks
   const [gastos, setgastos] = useState( [] )
  
   //2 - referenciamos a la DB firestore
   const gastosCollection = collection(db, "gastos")
 
   //3 - Funcion para mostrar TODOS los docs
   const getgastos = async ()   => {
    const data = await getDocs(gastosCollection)
       //console.log(data)
       setgastos(
           data.docs.map( (doc) => ( {...doc.data(),id:doc.id}))
       )
       console.log(gastos)
   }
   //4 - Funcion para eliminar un doc
   const deletegastos = async (id) =>{
       const gastosDoc = doc(db, "gastos", id)
       await deleteDoc(gastosDoc)
       getgastos()
   }
   //5 - Funcion de confirmacion para Sweet Alert 2
   const confirmDelete = (id) => {
       MySwal.fire({
         title: '¿Elimina el gasto?',
         text: "You won't be able to revert this!",
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#d33',
         cancelButtonColor: '#3085d6',
         confirmButtonText: 'Yes, delete it!'
       }).then((result) => {
         if (result.isConfirmed) { 
           //llamamos a la fcion para eliminar   
           deletegastos(id)               
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
       getgastos()
       // eslint-disable-next-line
     }, [] )
   //7 - devolvemos vista de nuestro componente

  return (
    <>
     <div className='container'>
        <div className='row'>
            <div className='col'>
                <div className='d-grid gap-2'>
                <Link to="/registrarGastos" className='btn btn-secondary mt-2 mb-2'>Crear gasto</Link>    
                </div>
                <table className='table table-dark table-hover'>
                    <thead>
                        <tr>
                            <th>Costo - Ingredientes</th>
                            <th>Fecha del gasto</th>
                            <th>Materiales</th>
                            <th>Salario Empleados</th>
                            <th>Servicios</th>
                            <th>Gasto total</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        { gastos.map( (gasto) => (
                            <tr key={gasto.id}>                            
                            <td>{gasto.costoingrediente}</td>
                            <td>{gasto.fechagasto}</td>
                            <td>{gasto.materiales}</td>
                            <td>{gasto.salarioemp}</td>
                            <td>{gasto.servicios}</td>
                            <td>{gasto.totalgasto}</td>
                            <td>
                            <Link to={`/editGastos/${gasto.id}`} className="btn btn-light"><i className="fa-solid fa-pencil"></i></Link>
                            <button onClick={ () => { confirmDelete(gasto.id) } } className="btn btn-danger"><i className="fa-solid fa-trash"></i></button>
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

export default ViewGastos;