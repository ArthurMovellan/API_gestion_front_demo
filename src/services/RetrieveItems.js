const RetrieveItems = {
    getItems: async (toUseFunction, customer, setSentJson) => {
        const json = "{\"function\": \"" + toUseFunction + "\", \"customer\": \"" + customer + "\"}";

        const formData = new FormData();
        formData.append("data", json);

        const config = {
            method: "POST",
            body: formData,
        };
        const response = await fetch("http://127.0.0.1:5000/request",config);
        setSentJson(json);
        return response.json();
    }
}

export default RetrieveItems