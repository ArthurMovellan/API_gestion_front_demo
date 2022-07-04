import Dropdown from 'react-bootstrap/Dropdown';
import RetrieveItems from '../services/RetrieveItems';

const DropdownCustomer = (props) => {
    var onClickCustomer = (customer) => {
        RetrieveItems.getItems("get_items_by_customer", customer, props.setSentJson).then((results, sentJson) => {
            props.setItems(results);
        });

    }
    return (
        <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {props.title}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {props.customers.map(customer => {
                        return (<Dropdown.Item onClick={() => onClickCustomer(customer)}>
                                    {customer}
                                </Dropdown.Item>)
                    })}
                </Dropdown.Menu>
            </Dropdown>
    )
}

export default DropdownCustomer
