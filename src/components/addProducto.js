import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import React, { UseState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';


const addProducto = ()=> {


    const [newProducto, setNewProducto] = UseState({producto:"", marca:"", lente:""})

    const modificarProducto = (productop)=> {
      setNewProducto({producto:productop, marca:newProducto.marca, lente:newProducto.lente})
    }
  
    const modificarMarca = (Marcap)=> {
      setNewProducto({Marca:Marcap, producto:newProducto.producto, lente:newProducto.lente})
    }
    
    const modificarLente = (Lentep)=> {
      setNewProducto({Lente:Lentep, producto:newProducto.producto, marca:newProducto.marca})
    }

    const addProducto = (e) => {
        const datosProducto = JSON.parse(localStorage.getItem("Producto"))
        datosProducto.push(newProducto)
        //setDatosProducto([...datosProducto, newProducto])
        localStorage.setItem("Producto", JSON.stringify(datosProducto))
        e.target.form.elements.productonewinput.value=""
        e.target.form.elements.marcanewinput.value=""
        e.target.form.elements.lentenewinput.value="" 
    
      }
  
  

    return (
        <div>
        <Form onSubmit={
            (e)=>{
            addProducto(e)
        }
      }>
      <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>Producto</th>
                <th>Marca</th>
                <th>Lente</th>
                <th>Acciones</th>
            </tr>
            </thead>
            <tbody>

            <tr>
                <td></td>
                  <td>
                    <InputGroup className="mb-3">
                      <InputGroup.Text id="basic-addon1">Producto</InputGroup.Text>
                      <Form.Control
                        id='productonewinput'
                        type='producto'
                        placeholder="Producto"
                        aria-label="Producto"
                        aria-describedby="basic-addon1"
                        onChange={
                          (e)=>{modificarProducto(e.target.value)}
                        }
                      />
                    </InputGroup>
                  </td>
                  
                  <td>
                    <InputGroup className="mb-3">
                      <InputGroup.Text id="basic-addon2">Marca</InputGroup.Text>
                      <Form.Control
                        id='marcanewinput'
                        type='marca'
                        placeholder="Marca"
                        aria-label="Marca"
                        aria-describedby="basic-addon2"
                        onChange={
                          (e)=>{modificarMarca(e.target.value)}
                        }
                      />
                    </InputGroup>
                  </td>

                  <td>
                    <InputGroup className="mb-3">
                      <InputGroup.Text id="basic-addon3">Lente</InputGroup.Text>
                      <Form.Control
                        id='lentenewinput'
                        type='lente'
                        placeholder="Lente"
                        aria-label="Lente"
                        aria-describedby="basic-addon3"
                        onChange={
                          (e)=>{modificarLente(e.target.value)}
                        }
                      />
                    </InputGroup>
                  </td>
                  
                  
                  <td><Button variant="primary" type='submit' >Agregar</Button></td>
          </tr>
        </tbody>
    
    </Table>
    </Form>

               
        </div>
    )

}

export default addProducto