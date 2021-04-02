import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import Data from '../Data';

export default function ProductView() {
    const ViewProduct = (props) =>{
        let{id} = useParams();
        const [pro] = useState(Data.find(value=> value.id==id));
    return (
        <div>
            <React.Fragment>
                <Container>
                    <Row>
                        <Col lg={4}>
                            <Card>
                                <Image src={pro.image}/>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        </div>
    )
    }
}
