import axios from "axios";

const url = 'http://localhost:8000';

export const addUser = async (data) => {
    try {
        await axios.post(`${url}/add`, data);
        // .then()

    } catch (err) {
        console.log('add User api', err);
    }
}

export const logoutUser = async (data) => {
    try {
        localStorage.clear()
    } catch (err) {
        console.log(err);
    }
}

export const loginUser = async (data) => {
    try {
        let response = await axios.post(`${url}/login`, data);
        console.log(response, "res");
        if (response?.data?.status == 'logged_In') {
            localStorage.setItem('authToken', response?.data?.token);
            return response.data

        } else if (response?.data?.status == 'exist') {
            alert('User already exists')
        } else {
            alert(response?.data?.message)
        }

    } catch (err) {
        console.log('add User api', err);
    }
}

export const registerUser = async (data) => {
    try {
        let response = await axios.post(`${url}/register`, data);
        console.log(response, "res");
        if (response?.data?.status == 'saved') {
            localStorage.setItem('authToken', response?.data?.token);
            return response.data

        } else if (response?.data?.status == 'exist') {
            alert('User already exists')
        } else {
            alert(response?.data?.message)
        }

    } catch (err) {
        console.log('add User api', err);
    }
}


export const getUsers = async () => {
    try {
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('authToken')}`, // Include your JWT token in the Authorization header
                // Add other headers if needed
            },
        };

        const response = await axios.get(`${url}/users`, config);
        // let response = await axios.get(`${url}/users`);
        // .then()
        console.log(response, "respose in get");
        return response.data
    } catch (err) {
        console.log('get User api', err.message);
    }
}



export const setConversation = async (data) => {
    try {

        const headers = {
            Authorization: `Bearer ${localStorage.getItem('authToken')}`,
            'Content-Type': 'application/json', // Assuming you are sending JSON data
        };

        let response = await axios.post(`${url}/conversation/add`, data, { headers });
        // .then()
        console.log(response, "respose in get");
        return response.data
    } catch (err) {
        console.log('get setConversation api', err.message);
    }
}




export const getConversation = async (data) => {
    try {

        const headers = {
            Authorization: `Bearer ${localStorage.getItem('authToken')}`,
            'Content-Type': 'application/json', // Assuming you are sending JSON data
        };

        const response = await axios.post(`${url}/conversation/get`, data, { headers });
        // let response = await axios.post(`${url}/conversation/get`, data);
        // .then()
        console.log(response, "respose in get");
        return response.data
    } catch (err) {
        console.log('get setConversation api', err.message);
    }
}

export const newMessage = async (data) => {
    try {
        const headers = {
            Authorization: `Bearer ${localStorage.getItem('authToken')}`,
            'Content-Type': 'application/json', // Assuming you are sending JSON data
        };
        let response = await axios.post(`${url}/message/add`, data, { headers });

    } catch (error) {
        console.log(error);
    }
}


export const getMessages = async (id) => {
    try {

        const headers = {
            Authorization: `Bearer ${localStorage.getItem('authToken')}`,
            'Content-Type': 'application/json', // Assuming you are sending JSON data
        };
        let response = await axios.get(`${url}/message/get/${id}`, { headers });
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const uploadFile = async (data) => {
    try {
        return await axios.post(`${url}/file/upload`, data);
    } catch (error) {
        console.log(error);
    }
}



export const contactUs = async (data) => {
    try {

        let response = await axios.post(`${url}/contactus`, data);
        console.log(response, "res");
        if (response?.data?.status == 'success') {
            return response.data

        } else {
            alert(response?.data?.message)
        }


        
    } catch (error) {
        console.log(error);
    }
}