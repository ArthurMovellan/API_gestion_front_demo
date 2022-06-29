const RetrieveCustomers = {
    getCustomers: async () => {
        const config = {method: "GET"};
        const response = await fetch("http://127.0.0.1:5000/customers",config);
        return response.json();
    }
}

export default RetrieveCustomers