import React from 'react';
import './Blogs.css'
import { Card, CardGroup, ListGroup } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>
            <div>
                <h1 className='text-center'>Difference Between Controlled And Uncontrolled</h1>
                <div className='one'>
                    <div>
                        <ListGroup>
                            <ListGroup.Item className='fs-4 fw-bold'>CONTROLLED COMPONENT</ListGroup.Item>
                            <ListGroup.Item>Does not maintain its internal state.</ListGroup.Item>
                            <ListGroup.Item>Data is controlled by the parent component.</ListGroup.Item>
                            <ListGroup.Item>Accepts its current value as a prop.</ListGroup.Item>
                            <ListGroup.Item>Allows validation control.</ListGroup.Item>
                            <ListGroup.Item>Better control over the form elements and data.</ListGroup.Item>
                        </ListGroup>
                    </div>
                    <div>
                        <ListGroup>
                            <ListGroup.Item className='fs-4 fw-bold'>UNCONTROLLED COMPONENT</ListGroup.Item>
                            <ListGroup.Item>Maintains its internal state.</ListGroup.Item>
                            <ListGroup.Item>Data is controlled by the DOM itself.
                            </ListGroup.Item>
                            <ListGroup.Item>Uses a ref for their current values.
                            </ListGroup.Item>
                            <ListGroup.Item>Does not allow validation control.</ListGroup.Item>
                            <ListGroup.Item>Limited control over the form elements and data.</ListGroup.Item>
                        </ListGroup>
                    </div>
                </div>
            </div>
            <div>
                <CardGroup>
                    <Card>
                        <h1>How to validate React props using PropTypes</h1>
                        <Card.Text>
                            Props are an important mechanism for passing the read-only attributes to React components. The props are usually required to use correctly in the component. If it is not used correctly, the components may not behave as expected. Hence, it is required to use props validation in improving react components.

                            Props validation is a tool that will help the developers to avoid future bugs and problems. It is a useful way to force the correct usage of your components. It makes your code more readable. React components used special property PropTypes that help you to catch bugs by validating data types of values passed through props, although it is not necessary to define components with propTypes. However, if you use propTypes with your components, it helps you to avoid unexpected bugs.
                        </Card.Text>
                    </Card>
                </CardGroup>
            </div>
            <div>
                <h1>difference between nodejs and express js.</h1>
                <p>Difference between Node.js and Express.js:

                    Node.js is a platform for building the i/o applications which are server-side event-driven and made using JavaScript.
                    Express.js is a framework based on Node.js which is used for building web-application using approaches and principles of Node.js event-driven architecture.</p>
            </div>
            <div>
                <CardGroup>
                    <Card>
                        <h1>What is a custom hook, and why will you create a custom hook?</h1>
                        <Card.Text>
                            Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</Card.Text>
                    </Card>
                </CardGroup>
            </div>
        </div>
    );
};

export default Blogs;