import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import React, { UseState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';


const modificarProducto = ()=> {

  const productoModificarJson = JSON.parse(localStorage.getItem("productoModificar"))


    const [newProducto, setNewProducto] = UseState(productoModificarJson)

   // const modificarProducto = (productop)=> {
    //  setNewProducto({producto:productop, marca:newProducto.marca, lente:newProducto.lente})
    }
  
    const modificarMarca = (Marcap)=> {
      setNewProducto({Marca:Marcap, producto:newProducto.producto, lente:newProducto.lente})
    }
    
    const modificarLente = (Lentep)=> {
      setNewProducto({Lente:Lentep, producto:newProducto.producto, marca:newProducto.marca})
    }

    const modificarProducto = (e) => {
        const datosProducto = JSON.parse(localStorage.getItem("Producto"))
        for(let i = 0; i < datosProducto.length; i++){
          if(datosProducto[i].producto === newProducto.producto){
            datosProducto[i].marca = newProducto.marca
            datosProducto[i].lente = newProducto.lente

        }


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
                        default-value={newProducto.producto}
                        disabled
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
                        default-value={newProducto.marca}
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
                        default-value={newProducto.lente}
                        onChange={
                          (e)=>{modificarLente(e.target.value)}
                        }
                      />
                    </InputGroup>
                  </td>
                  
                  
                  <td><Button variant="primary" type='submit' >Modificar</Button></td>
          </tr>
        </tbody>
    
    </Table>
    </Form>

               
        </div>
    )

}

export default modificarProducto