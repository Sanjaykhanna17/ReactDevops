import axios from 'axios';


const getHotelList = "http://localhost:1240/hotel/getAllHotel";
const addHotel = "http://localhost:1240/hotel/addHotel";
const getHotel = "http://localhost:1240/hotel/getHotel?id="
const updateHotel = "http://localhost:1240/hotel/updateHotel"
const DeleteHotel = "http://localhost:1240/hotel/deleteHotel?id="

const doAdd = (empData) => {
    return axios.post(addHotel, empData)
}

const doGetAll = () => {
    return axios.get(getHotelList)
}

const doGet = (id) => {
    return axios.get(getHotel + id)
}

const doUpdate = (empData) => {
    return axios.put(updateHotel, empData)
}

const doDelete = (id) => {
    return axios.delete(DeleteHotel + id)
}

export { doAdd, doDelete, doGet, doGetAll, doUpdate };

