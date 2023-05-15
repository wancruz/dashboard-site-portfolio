import React, { useEffect, useState } from "react";

import * as Yup from "yup";

//import { Formik, Form } from "formik";


import styles from "./RegisterAbout.module.css";
import Input from "../../components/forms/Input/Input";
import Textarea from "../../components/forms/Textarea";
import { InfoAbout, updateInfoAbout, getInfoAbout, deleteInfoAbout, createOrUpdateInfoAbout } from "../../services/serviceAbout";
import CardAbout from "./CardAbout";

import Button from "../../components/common/Button";

import Title from "../../components/common/Title/Title";

import Form from "../../components/forms/Form";



const RegisterAbout: React.FC = () => {

  const [infoAbout, setInfoAbout] = useState<InfoAbout>();


  const initialValues: InfoAbout = {
    id: 1,
    foto: '',
    resumo: '',
  };

  {
    const validationSchema = Yup.object().shape({
      id: Yup.number(),
      foto: Yup.string().required('Campo obrigatório'),
      resumo: Yup.string().required('Campo obrigatório'),
    });

    const fetchInfoAbout = async () => {
      try {
        const infoAbout = await getInfoAbout();
        setInfoAbout(infoAbout);
      } catch (error) {
        console.error('Erro ao buscar informação', error);
      }
    };
    // Hook para gerenciar vida do componente, serve para quando rendenizar pela priemira vez - useEffect
    useEffect(() => {
      fetchInfoAbout();
    }, []);

    const onSubmit = async (values: InfoAbout, { resetForm }: { resetForm: () => void }) => {
      //Logica para envio para o backend
      // Estrututa try/cat Ela diz que se fizer uma requisição no servidor é der errado, então faça isso.

      try {
        await createOrUpdateInfoAbout(values);
        setInfoAbout(values);
        alert('Formulário enviado com sucesso!');
      }
      catch (error) {
        console.error('Erro ao enviar formulário:', error);
        alert('Ocorreu um erro ao enviar formulario. Tente novamente.');
      }

    };

    const handleDelete = async () => {
      try {
        await deleteInfoAbout ();
        setInfoAbout(undefined);
        alert("Informações deletadas com sucesso!");
      } catch (error) {
        console.error("Erro ao deletar informações", error);
        alert("Ocorreu um erro ao deletar as informações. Tente novamente.")
      }
    };

    return (
      <div className={styles.formWrapper}>

         <Form
          initialValues={initialValues}
          enableReinitialize
          validationSchema={validationSchema}
          onSubmit={onSubmit}>

          {({ errors, touched }) => (

            <>
              <Title>Informações Sobre</Title>

              <Input
                label="Foto"
                name="foto"
                errors={errors.foto}
                touched={touched.foto}
              />

              <Textarea
                label="Resumo"
                name="resumo"
                errors={errors.resumo}
                touched={touched.resumo}
              />

              <Button type="submit">Salvar</Button>
            </>
          )}

        </Form> 

        {infoAbout &&
            <div className={styles.cardContainer}>
              <CardAbout infoAbout={infoAbout} />

              <Button
                type="button"
                onClick={handleDelete}
                red
              >Deletar
              </Button>

            </div>
          }
      </div>
    );
  };
}
export default RegisterAbout;