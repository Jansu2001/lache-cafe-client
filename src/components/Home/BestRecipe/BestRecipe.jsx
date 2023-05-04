import React from 'react';
import './BestRecipe.css'
import { Card, Col, Row } from 'react-bootstrap';

const BestRecipe = () => {
    return (
        <div>
            <h1 className='text-center fs-1 fw-bold mt-4'>Our Menu</h1>
            <div className='best-container pt-4'>
                <Card>
                    <Card.Img className='img' variant="top" src="https://images.unsplash.com/photo-1600713529234-2ead3b91c6eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" />
                    <Card.Body>
                        <Card.Title>Chicken with Bulgur</Card.Title>
                        <Card.Text>
                            This Chicken with Bulgur recipe is an easy, one-pot dish that’s inspired by the savory flavors of Mediterranean and Turkish cuisine. Juicy, pan-seared chicken thighs sit atop a bed of fluffy
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img className='img' variant="top" src="https://images.unsplash.com/photo-1655279563187-a4010cc494f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=417&q=80" />
                    <Card.Body>
                        <Card.Title>Tuna Melt Sandwich</Card.Title>
                        <Card.Text>
                        Tuna Melt Sandwich recipe made by layering cheddar cheese with homemade tuna salad in a brioche bun and baking it in the oven for 
                        all the ooey-gooey goodness.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img className='img' variant="top" src="https://images.unsplash.com/photo-1604908177453-7462950a6a3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=757&q=80" />
                    <Card.Body>
                        <Card.Title>Eggplant Beef Stew</Card.Title>
                        <Card.Text>
                        Eggplant Beef Stew is a hearty, nourishing, and super 
                        flavorful stew recipe with one special technique for pull-apart meat every time.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img className='img' variant="top" src="https://images.unsplash.com/photo-1512223792601-592a9809eed4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=352&q=80" />
                    <Card.Body>
                        <Card.Title>Almond Ricotta Cake</Card.Title>
                        <Card.Text>
                        Almond Ricotta Cake is a beautifully golden Italian-inspired
                         cake with sweet notes of ricotta cheese and lemon.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>


        </div>
    );
};

export default BestRecipe;