import { Row, Col } from 'reactstrap';

function Header(){

    return(
        <Row>
          <Col sm="12" md={{ size: 6, offset: 4 }}>
        <h1>Welcome to DAPP</h1>
        <h2>Table Generater</h2>
        </Col>
        </Row>
    )

}
export default Header;