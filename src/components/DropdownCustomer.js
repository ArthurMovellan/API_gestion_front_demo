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
                    {props.entities.map(entity => {
                        return (<Dropdown.Item onClick={() => RetrieveItems.getItems("test", entity).then(results => {props.setItems(results)})}>
                                    {CustomerService.getCustomerFirstLastName(entity)}
                                </Dropdown.Item>)
                    })}
                </Dropdown.Menu>
            </Dropdown>
    )
}

export default DropdownCustomer
