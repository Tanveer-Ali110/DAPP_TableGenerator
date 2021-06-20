import { useState } from 'react';
import Header from './Component/Header';
import InputComponent from './Component/inputComp';
import OutputComponent from './Component/OutputComp';

import { Container } from 'reactstrap';

function App() {

  let InputValue = useState(0);
  let OutputValue = useState([]);
  
  return (
    <div>
      <Container className="themed-container" fluid="sm">
        <Header />
        <InputComponent inputvalues={InputValue} outputvalues={OutputValue} />
        <OutputComponent inputvalues={InputValue} outputvalues={OutputValue} />
      </Container>
    </div >
  );
}

export default App;
