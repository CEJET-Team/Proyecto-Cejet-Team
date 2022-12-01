import './App.css';
//import Form from 'react-bootstrap/Form';
//import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import ListaProductos from './components/listaProductos/ListaProductos';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
//import {Fragment} from 'react';
import Autorizacion from './Autorizacion';
import datosProductoJson from "./components/listaProductos/datos.json";
import addProducto from './components/addProducto';
import modificarProducto from './components/modificarProducto';
import Button from 'react-bootstrap/Button';



function App() {
  if(localStorage.getItem("productos") == null){
     localStorage.setItem("productos", JSON.stringify(datosProductoJson))
  }
  return (
    <> 
    <BrowserRouter>

     {/*  <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/ver">Lista de Productos</Navbar.Brand>
          <Navbar.Brand href="/add">Agregar</Navbar.Brand>
          <Navbar.Brand href="/delete">Eliminar</Navbar.Brand>
        </Container>
      </Navbar>
 */}
        <Button variant="danger" onClick={
          ()=>{
            window.location.href = "/ver"
          }
          } >Ver</Button>
          <Button variant="primary" onClick={
          ()=>{
            window.location.href = "/add"
          }
          } >Agregar</Button>
          <Button variant="warning" onClick={
          ()=>{
            window.location.href = "/modificar"
          }
          } >Modificar</Button>
      <Routes>
        <Route path='/ver' element={Autorizacion(ListaProductos, ["USER", "ADMIN"])}/>
        <Route path='/add' element={Autorizacion(addProducto, ["USER", "ADMIN"])}/>
        <Route path='/modificar' element={Autorizacion(modificarProducto, ["USER", "ADMIN"])}/>
     </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;
