
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider/AuthProvider';
import { useContext, useState } from 'react';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const { signUpUser, displayUser } = useContext(AuthContext);
    // const [accepted, setAccepted] = useState(false)
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')


    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;


        console.log(name, photo, email, password);

        signUpUser(email, password)
            .then(result => {
                const createdUser = result.user;
                setSuccess('user Success Fully Created')
                updatedProfiles(createdUser, name, photo)
            })
            .catch(error => {
                setError(error);
            })
    }

    const updatedProfiles = (createdUser, name, photoURL) => {
        updateProfile(createdUser, {
            displayName: name,
            photoURL: photoURL
        })
            .then(() => {
                console.log('user profile updateed');
            })
            .catch(error => {
                setError(error.message)
            })
    }

    // // Handle setAccepted
    // const handleAccepted = (event) => {
    //     setAccepted(event.target.checked);
    // }


    return (
        <Container className='mx-auto w-25'>
            <h3>Please Register </h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="name" name='name' placeholder="Enter name" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo url</Form.Label>
                    <Form.Control type="photo" name='photo' placeholder="Photo URL" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        // onClick={handleAccepted}
                        type="checkbox"
                        name='accept'
                        label='' />
                </Form.Group> */}
                <Button variant="primary"
                    // disabled={!accepted}
                    type="submit">
                    Register
                </Button>
                <br />
                <Form.Text className="text-secondary">
                    Already have an account? <Link to='/login'>Login</Link>
                </Form.Text>
                <Form.Text className="text-success">
                    {success}
                </Form.Text>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
            </Form>

        </Container>
    );
};

export default Register;