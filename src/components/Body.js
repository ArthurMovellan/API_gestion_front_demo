import DropdownCustomer from './DropdownCustomer';
import CustomTable from './CustomTable';
import RetrieveCustomers from '../services/RetrieveCustomers';
import RequestField from './RequestField';
import { useEffect, useState } from 'react';

const Body = () => {

    const [customers, setCustomers] = useState(null);
    const [items, setItems] = useState(null);
    const [sentJson, setSentJson] = useState("");

    useEffect(() => {
        if(customers == null){
            RetrieveCustomers.getCustomers().then((results) => setCustomers(results));
        }
    }, [customers])

    return (
        <>
            {customers ? <DropdownCustomer title={"Customers"} customers={customers} setItems={setItems} setSentJson={setSentJson}></DropdownCustomer> : null}
            {items ? <RequestField sent={sentJson} received={JSON.stringify(items)}></RequestField> : null}
            {items ? <CustomTable titles={["Product","Quantity"]} dataTable={items[0][0]}></CustomTable> : null}
        </>
    )
}

export default Body