import React, { useState } from 'react';
//import './ListaProductos.css';
//import datosProductoJson from "./datos.json";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const ListaProductos = () => 
{

  const datosProductoJson = JSON.parse(localStorage.getItem('productos'))


  const [datosProducto, setDatosProducto] = useState(datosProductoJson)

  const eliminarProducto = (producto) => {
  const ListaProductosNew = datosProducto.filter(
      (productos) => (productos.producto !== producto)
    )
    setDatosProducto(ListaProductosNew)
    localStorage.setItem('productos', JSON.stringify(ListaProductosNew))
  }

  const modificarProducto = (modificarProducto) =>{
    localStorage.setItem("productoModificar", JSON.stringify(modificarProducto))
  }

   return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>  
                {
                  datosProducto.map(
                    (producto) => {
                      return (
                        <tr>

                          <td>{producto.id}</td>
                          <td>{producto.producto}</td>
                          <td>{producto.marca}</td>
                          <td>{producto.lente}</td>

                          <td><Button variant="danger" onClick={
                            () => {
                              eliminarProducto(producto.producto)

                            }
                            } >Eliminar</Button>
                          

                            <Button variant="warning" onClick={
                            () => {
                              modificarProducto(producto)
                              window.location.href = "/modificar"

                            }
                            } >Modificar</Button>
                          </td>
                        </tr>
                      );
                    }
                  )
                }


            </tr>
          </thead>
        </Table>
      </div>
  )
};



export default ListaProductos;
