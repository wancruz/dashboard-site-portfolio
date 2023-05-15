import React from "react";

import styles from "./Form.module.css";

import { Formik, FormikHelpers, FormikProps, FormikValues, Form as FormikForm } from "formik";
import * as Yup from "yup";



interface FormProps<T> {
  initialValues: T;
  validationSchema: Yup.ObjectSchema<Partial<T>>;
  enableReinitialize?: boolean;

  //Estou colocando um atributo de função como atributo da interface. Por isso coloco parametros que recebe e qual retorno. 
  onSubmit: (values: T, formikHelpers: FormikHelpers<T>) => void | Promise<void>;
  children: (formikProps: FormikProps<T>) => React.ReactNode;
}

const Form = <T extends FormikValues>({ initialValues, validationSchema, enableReinitialize, onSubmit, children }: FormProps<T>) => {

  return (
    <div className={styles.formWrapper}>

      <Formik
        initialValues={initialValues}
        enableReinitialize={enableReinitialize}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formikProps) => (
          <FormikForm className={styles.form}>
            {children(formikProps)}
          </FormikForm>
        )}
      </Formik>
    </div>
  );
};

export default Form;