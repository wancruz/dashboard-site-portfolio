import React, { useState, useEffect } from "react";

import styles from "./ProjectList.module.css"

import { useNavigate } from "react-router-dom";

import { InfoProject, deleteInfoProject, getInfoProject, updateInfoProject } from "../../../services/serviceProjects";



interface ListProject {
  link: string;
  image: string;
  title: string;
};

const ProjectList: React.FC = () => {

  const navigate = useNavigate();

 const [infoProject, setInfoProject] = React.useState<InfoProject[]> ([]);

 const fetchInfoProject = async () => {
  try {
    const infoProject = await getInfoProject();
    setInfoProject(infoProject);
  }catch(error) {
    console.log('Erro ao buscar lista de projetos', error);
  }
};

useEffect(() => {
  fetchInfoProject();
},[]);

const handleDelet = async (id: number) => {

  try {
    await deleteInfoProject(id);
    fetchInfoProject();
    alert("Deletou o Projeto!")
  }catch(error) {
    console.log('Erro ao deletar projeto', error);
    alert("Erro ao deletar projeto!")
}
};

const handleEdit =  (infoProject: InfoProject) => {
  navigate("/projects/cadastrar", { state: infoProject})
};

  return (

     <table className={styles.table}>
      <thead>
        <tr>
           <th>Título</th>
           <th>Imagem</th>
           <th>Link</th>
          <th>Ações</th>
        </tr>
      </thead>

      <tbody>
        {infoProject.map((infoProject, index)  => (
        <tr key={index}>
          <td>{infoProject.title}</td>
          <td><img src={infoProject.image} alt={infoProject.title} className={styles.image} /></td>
          <td><a href={infoProject.link} target="_blank" rel="noreferrer">{infoProject.link}</a></td>
          <td>
               <button onClick={() => handleEdit(infoProject)}>Editar</button>
               <button onClick={() => handleDelet(infoProject.id)}>Excluir</button>
        </td>
        </tr>
        ))}
      </tbody>
    </table>
  );
};


export default ProjectList;