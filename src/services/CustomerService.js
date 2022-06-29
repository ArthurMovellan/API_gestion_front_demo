const CustomerService = {
    getCustomerList: (customers) => {
        var customerList = [];
        if (customers) {
            customers.map(customer => {
                customerList.push(customer[1] + " " + customer[2])
            })
        }
        return (customerList)
    },

    getCustomerFirstLastName: (customer) => {
        return (customer[1] + " " + customer[2])
    }
}

export default CustomerService