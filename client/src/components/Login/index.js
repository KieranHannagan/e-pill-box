import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	FormGroup, Label, Input,
	Button, Form, Col
} from 'reactstrap';

function Login() {

	return (
		<div style={{
			display: 'block', width: 950, padding: 30
		}}>
			<h5>ePillbox Login</h5>
			<Form inline>
				<FormGroup row className="mb-2 mr-sm-2 mb-sm-0">
					<Col sm={4}>
						<Label for="emailField">EMAIL:</Label>
						<Input type="email" name="email" id="emailField"
							placeholder="Enter your email" />
					</Col>
					<Col sm={4}>
						<Label for="passwordField">PASSWORD:</Label>
						<Input type="password" name="password"
							id="passwordField"
							placeholder="Enter your password" />
					</Col>
				</FormGroup>
				<Button>Submit</Button>
			</Form>
		</div >
	);
}

export default Login;

