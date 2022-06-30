import Dropdown from 'react-bootstrap/Dropdown';
import CustomerService from '../services/CustomerService';
import RetrieveItems from '../services/RetrieveItems';

const DropdownCustomer = (props) => {
    return (
        <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {props.title}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {props.customers.map(customer => {
                        return (<Dropdown.Item onClick={() => RetrieveItems.getItems("get_items_by_customer", customer).then(results => {props.setItems(results)})}>
                                    {customer}
                                </Dropdown.Item>)
                    })}
                </Dropdown.Menu>
            </Dropdown>
    )
}

export default DropdownCustomer
