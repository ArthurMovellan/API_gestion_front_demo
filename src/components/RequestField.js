import {Form} from 'react-bootstrap'

const RequestField = (props) => {
    return(
        <>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Sent JSON</Form.Label>
                    <Form.Control plaintext readOnly value={props.sent} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Received</Form.Label>
                    <Form.Control readOnly value={props.received} rows={3} />
                </Form.Group>
            </Form>
        </>
    )
}

export default RequestField;