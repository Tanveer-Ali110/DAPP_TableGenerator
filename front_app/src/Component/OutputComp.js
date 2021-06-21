import { Table, Row, Col } from 'reactstrap';

function OutputComponent({ inputvalues, outputvalues }) {

    return (
        <div>
            <Row>
                <Col sm="12" md={{ size: 10, offset: 2 }}>
                    {
                        outputvalues[0].map((value, ind) => {
                            return (
                                <div key={ind}>
                                    <Table size='sm'  >
                                        <tbody >
                                            <Row>
                                                <Col>{inputvalues}</Col>
                                                <Col> *</Col>
                                                <Col>{ind + 1}</Col>
                                                <Col>=</Col>
                                                <Col>{value}</Col>
                                            </Row>
                                        </tbody>
                                    </Table>
                                </div>
                            )
                        })
                    }
                </Col>
            </Row>
        </div>
    )

}

export default OutputComponent;