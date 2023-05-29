import './index.css';
import { InputGroup, Form, Table } from 'react-bootstrap';
import { data } from './data.js';


function App() {

  return (
    <div className="App">
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search any people's name by first name  ex) larry"
        />
      </InputGroup>
      <h1>React Search Bar Demo</h1>
      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((item) => {
            return(
              <tr>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
                <td>{item.phone}</td>
              </tr>
            )
          })
        }
      </tbody>
    </Table>
    </div>
  );
}

export default App;
