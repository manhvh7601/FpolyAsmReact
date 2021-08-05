import axios from 'axios'
import React from 'react'

const AxiosClient = axios.create( {
   baseURL: "http://localhost:4000",
   headers: {
       "Content-Type": "application/json"
   } 
});

export default AxiosClient
