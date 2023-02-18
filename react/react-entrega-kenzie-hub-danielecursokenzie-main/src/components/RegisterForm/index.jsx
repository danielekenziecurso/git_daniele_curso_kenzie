import React from "react";
import logoHub from "../../assets/img/Logo.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services/index";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { StyledRegister } from "./styleRegisterForm";

const RegisterForm = () => {
  const formSchemRegister = yup.object().shape({
    name: yup.string().required("Nome é obrigatório."),
    email: yup
      .string()
      .required("Email é obrigatório")
      .email("O email digitado é inválido."),
    password: yup
      .string()
      .required("Senha é obrigatória")
      .min(6, "A senha precisa ter pelo menos seis caracteres"),
    confirmpassword: yup
      .string()
      .required("Confirmar a senha é obrigatório")
      .oneOf([yup.ref("password")], "As senhas não correspondem"),
    bio: yup.string().required("Bio é obrigatória."),
    contact: yup.string().required("Contato é obrigatório."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchemRegister),
  });
  const navigate = useNavigate();
  const ouSubmitFunction = async (data) => {
    delete data.confirmPassword;
    try {
      const response = await api.post("/users", data);
      toast.success("Conta criada com sucesso!");
      console.log(response.data);
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Ops! Algo deu errado");
    }
  };

  return (
    <StyledRegister>
      <header className="headerRegister">
        <img src={logoHub} alt="logo" />
        <button className="voltar" onClick={() => navigate("/")}>
          Voltar
        </button>
      </header>
      <section className="sectionRegister">
        <h2>Crie sua conta</h2>
        <p>Rapido e grátis, vamos nessa</p>
        <form
          className="formRegister"
          onSubmit={handleSubmit(ouSubmitFunction)}
        >
          <label htmlFor="name">Nome</label>
          <input
            id="name"
            type="text"
            placeholder="Digite aqui seu nome"
            {...register("name")}
          />
          {errors.name?.message}

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Digite aqui seu email"
            {...register("email")}
          />
          {errors.email?.message}

          <label htmlFor="senha">Senha</label>
          <input
            id="senha"
            type="password"
            placeholder="Digite aqui sua senha"
            {...register("password")}
          />
          {errors.password?.message}

          <label htmlFor="comfirmPassword">Comfirmar senha</label>
          <input
            id="comfirmPassword"
            type="password"
            placeholder="Digite novamente sua senha"
            {...register("confirmpassword")}
          />
          {errors.confirmPassword?.message}

          <label htmlFor="bio">Bio</label>
          <input
            id="bio"
            type="text"
            placeholder="Fale sobre você"
            {...register("bio")}
          />
          {errors.bio?.message}

          <label htmlFor="contato">Contato</label>
          <input
            id="contato"
            type="text"
            placeholder="Opção de contato"
            {...register("contact")}
          />
          {errors.contact?.message}

          <p>Selecionar módulo</p>
          <select {...register("course_module")}>
            <option value="Primeiro módulo">
              Primeiro módulo (Introdução ao Frontend)
            </option>
            <option value="Segundo módulo">
              Segundo módulo (Frontend Avançado)
            </option>
            <option value="Terceiro módulo">
              Terceiro módulo (Introdução ao Backend)
            </option>
            <option value="Quarto módulo">
              Quarto módulo (Backend Avançado)
            </option>
          </select>
          <button type="submit">Cadastrar</button>
        </form>
      </section>
    </StyledRegister>
  );
};

export default RegisterForm;
