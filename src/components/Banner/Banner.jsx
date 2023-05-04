import React from 'react';
import './Banner.css'
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 height"
                        src="https://images.unsplash.com/photo-1511951786553-1d4f975424c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Spinach and Feta Stuffed Chicken</h3>
                        <p>1. Preheat grill to medium-high heat. 2. Season salmon fillet with salt, pepper, and chopped dill. 3. Place salmon on the grill and cook for about 4-5 minutes per side. 4. While salmon is cooking, melt butter in a small saucepan and stir in lemon juice. 5. When salmon is done, remove from grill and transfer to a plate. 6. Drizzle lemon butter over the salmon and serve immediately.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100 height"
                        src="https://plus.unsplash.com/premium_photo-1661412657617-d6eab13c563e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Beef Bourguignon</h3>
                        <p>1. Preheat grill to high heat. 2. Season ribeye steak generously with salt and pepper. 3. Grill steak to desired doneness, about 4-5 minutes per side for medium rare. 4. While steak is cooking, make chimichurri sauce by blending together parsley, garlic, red pepper flakes, olive oil, and vinegar in a food processor. 5. Let steak rest for a few minutes before slicing against the grain. 6. Drizzle c</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 height"
                        src="https://images.unsplash.com/photo-1592686092916-672fa9e86866?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Beef Teriyaki Stir-Fry</h3>
                        <p>
                            1. Preheat the oven to 425°F. 2. Pat the chicken dry and season with salt and pepper. 3. Cut one lemon in half and squeeze the juice over the chicken. 4. Stuff the lemon halves, garlic cloves, and rosemary sprigs inside the chicken. 5. Cut the remaining lemon into thin slices and place them on top of the chicken. 6. Roast the chicken for 1 hour and 15 minutes, or until the juices run clear when th
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;