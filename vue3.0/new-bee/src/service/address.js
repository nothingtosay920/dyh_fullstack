import axios from '../utils/axios'


export function getAddressDetail(id) {
  axios.get(`/address/${id}`)
}