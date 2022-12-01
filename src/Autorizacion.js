import { useState } from "react";
import { Fragment } from "react";


const Autorizacion = (ComponenteValid, rolesPermitidos) => {

    const [usuario, SetUsuario] = useState({idUsuario:"1234", role:"USER"})

    return(
        <>
        {
            rolesPermitidos.includes(usuario.role) ? <ComponenteValid/> : <h1>Pagina no permitida</h1>
        }
        </>
    )
}

export default Autorizacion
//solicitud de correo y contraseña
   /*<Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>*/