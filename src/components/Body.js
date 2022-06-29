import DropdownCustomer from './DropdownCustomer';
import CustomTable from './CustomTable';
import RetrieveCustomers from '../services/RetrieveCustomers';
import { useEffect, useState } from 'react';

const Body = () => {

    const [customers, setCustomers] = useState(null);
    const [items, setItems] = useState(null);

    useEffect(() => {
        if(customers == null){
            RetrieveCustomers.getCustomers().then((results) => setCustomers(results));
        }
    }, [customers])

    return (
        <>
            {customers ? <DropdownCustomer title={"Customers"} entities={customers} setItems={setItems}></DropdownCustomer> : null}
            {items ? <CustomTable titles={["ID","Nom","Quantité"]} dataTable={items}></CustomTable> : null}
        </>
    )
}

export default Body