import {useNavigate } from "react-router-dom";
import {  access_token } from "./axiosInterseptor"



export const secure = () => {
    const access = localStorage.setItem("access_token");
    const refresh = localStorage.setItem("refresh_token");
    const user = localStorage.setItem("user_id");
    const navigate =  useNavigate();


}