import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import logohub from "../../assets/img/Logo.png";
import { api } from "../../services";
import { StyledMain } from "./styleLoginForm";

const LoginForm = () => {
  const [user, setuser] = useState([]);
  const formSchemLogin = yup.object().shape({
    email: yup
      .string()
      .required("Email é obrigatório")
      .email("O email digitado é inválido."),
    password: yup
      .string()
      .required("Senha é obrigatória")
      .min(8, "A senha precisa ter pelo menos oito caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchemLogin),
  });
  const navigate = useNavigate();
  const ouSubmitFunctionLogin = async (data) => {
    try {
      const response = await api.post("/sessions", data);
      setuser(response.data);
      localStorage.setItem("@TOKEN",JSON.stringify(response.data.token));
      localStorage.setItem("@USERID", response.data.user);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <StyledMain>
      <header className="headerLogo">
        <img src={logohub} alt="logo" className="imgLogo" />
      </header>
      <section className="sectionLogin">
        <h2>Login</h2>
        <form
          className="formLogin"
          onSubmit={handleSubmit(ouSubmitFunctionLogin)}
        >
        
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              placeholder="Digite aqui seu email"
              {...register("email")}
            />
            {errors.email?.message}
          
            <label htmlFor="senha">Senha</label>
            <input
              id="senha"
              type="text"
              placeholder="Digite aqui sua senha"
              {...register("password")}
            />
            {errors.password?.message}

          <button className="entrar" type="submit">
            Entrar
          </button>
          <p>Ainda não possui uma conta?</p>
          <button className="cadastro" onSubmit={navigate("/register")}>
            Cadastre-se
          </button>
        </form>
      </section>
    </StyledMain>
  );
};

export default LoginForm;
