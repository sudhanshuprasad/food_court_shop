import React from 'react'
import { Accordion } from 'react-bootstrap'
import OrderItem from './OrderItem'

function PersonOrderList(props) {
    return (
        <div>

            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                    <Accordion.Header><div className='userName'>{props.userName}</div></Accordion.Header>
                    <Accordion.Body>
                        {props.foodID.map((element, i) => (
                            <OrderItem
                                key={element}
                                id={element}
                                quantity={props.quantity[i]}
                            />
                        ))}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <br />
        </div>
    )
}

export default PersonOrderList