import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logoHub from "../../assets/img/Logo.png";
import { api } from "../../services";
import { StyledDashboard } from "./styleHomeUser";

const HomeUser = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({});
  const token = localStorage.getItem("@TOKEN")
  
  function logout(){
    navigate("/")
    setProfile(localStorage.removeItem("@TOKEN", "@USERID"));
  };

  useEffect(() => {
    async function verificyUser(){
      try{
        const response = await api.get("/profile", {
          headers:{
            Authorization: `Bearer ${JSON.parse(token)}`
          }
        }); 
        console.log(response.data);
        setProfile(response.data)
        
      }
      catch(error){
        console.log(error)
      }
    }
    verificyUser()
  }, [token]);

  return (
    <StyledDashboard>
      <header className="headerDash" >
        <img src={logoHub} alt="logo" />
        <button className="sair" onClick={() => logout()}>
          Sair
        </button>
      </header>
      <div className="inforUser" > 
        <h2>Olá, {profile.name} </h2>
        <p>{profile.course_module}</p>
      </div>
      <div className="development">
        <h2>Que pena! Estamos em desenvolvimento:(</h2>
        <p>
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </p>
      </div>
    </StyledDashboard>
  );
};

export default HomeUser;
