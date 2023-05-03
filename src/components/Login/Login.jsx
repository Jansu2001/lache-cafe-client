import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate, } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider/AuthProvider';

const Login = () => {
    const { signInUser, loginWithGoogle, loginWithGitHub } = useContext(AuthContext);
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'


    const handleSignIn = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
        signInUser(email, password)
            .then(result => {
                const signedUser = result.user;
                navigate(from, { replace: true })
                console.log(signedUser);
                setSuccess('user login successed')

            })
            .catch(error => {
                setError(error.message);
            })

    }

    const handleLoginWithGoogle = () => {
        loginWithGoogle()
            .then(result => {
                const loogedUser = result.user;
                console.log(loogedUser);
                setSuccess('Success to Login with Google')
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const handleLoginWithGitHub = () => {
        loginWithGitHub()
            .then(result => {
                const loogedUser = result.user;
                console.log(loogedUser);
                setSuccess('Success to Login with GitHub')
            })
            .catch(error => {
                setError(error.message)
            })

    }
    return (
        <Container className='mx-auto w-25'>
            <h3>Please Login </h3>
            <Form onSubmit={handleSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="text-secondary">
                    Don't have an account? <Link to='/register'>Register</Link>
                </Form.Text>
                <Form.Text className="text-success">
                    {success}
                </Form.Text>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
            </Form>
            <div className='mt-2'>
                <h3>Login In With</h3>
                <Button onClick={handleLoginWithGoogle} variant='outline-primary'>Login with Google</Button>
                <Button onClick={handleLoginWithGitHub} variant='outline-secondary' className='ms-4'>Login with GitHub</Button>
            </div>
        </Container>
    );
};

export default Login;