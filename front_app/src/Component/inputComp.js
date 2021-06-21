import {handleButton} from './AsyncFunc';

import { Button, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { Row } from 'reactstrap';


function InputComponent({ inputvalues, outputvalues }) {

    return (
        <div>
            <Row>
                <label>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                        <Input placeholder="Number" min={0} max={100} type="number" onChange={(e) => inputvalues[1](e.target.value)} required />
                        <Button color="primary" onClick={()=>{handleButton(inputvalues,outputvalues)}}>click here</Button>
                    </InputGroup>
                </label>
            </Row>
        </div>
    )
}

export default InputComponent;