import React from "react";

import * as Yup from "yup";
//import { Formik, Form } from "formik";

import styles from "./RegisterProjects.module.css";

import Input from "../../../components/forms/Input/Input";

import { InfoProject, createOrUpdateInfoProject } from "../../../services/serviceProjects";

import { useNavigate, useLocation } from "react-router-dom";
import Title from "../../../components/common/Title/Title";
import Button from "../../../components/common/Button/Button";
import Form from "../../../components/forms/Form";


const RegisterProjects: React.FC = () => {


const navigate = useNavigate();
const location = useLocation();
const itemList = location.state as InfoProject;

const initialValues: InfoProject = {
  id:0,
  link: "",
  image: "",
  title: "",
};

const validationSchema = Yup.object().shape({
  id:Yup.number(),
  link: Yup.string().required('Campo obrigatório'),
  image: Yup.string().required('Campo obrigatório'),
  title: Yup.string().required('Campo obrigatório'),
});

  const onSubmit = async (values: InfoProject,{ resetForm }: { resetForm: () => void }) => {
     try {
      await createOrUpdateInfoProject(values);
      console.log(values);
      resetForm();
      alert("Formulario enviado com Sucesso!");
    }catch(error){
      console.log(error);
      alert("Erro ao enviar formulario!")
    }
  };


  return (
    <div className={styles.formWrapper}>

<Form
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}>

          {({ errors, touched }) => (

            <>
             <Title>Cadastrar Projeto</Title>

             <Input
              label="Link"
              name="link"
              errors={errors.link}
              touched={touched.link}
            />

            <Input
              label="Imagem"
              name="image"
              errors={errors.image}
              touched={touched.image}
            />

            <Input
              label="Titulo"
              name="title"
              errors={errors.title}
              touched={touched.title}
            />
    
            <Button
              type="submit"
            >Cadastrar</Button>
            </>
              )}
          </Form>
     

    </div>

  );
};

export default RegisterProjects;
