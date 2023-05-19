import React, { useState, useEffect } from "react";

import styles from "./ProjectList.module.css"

import { useNavigate } from "react-router-dom";

import { InfoProject, deleteInfoProject, getInfoProject, updateInfoProject } from "../../../services/serviceProjects";

import { Table,Column } from "../../../components/common/Table";



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

const handleDelet = async (infoProject: InfoProject) => {
  try {
    await deleteInfoProject(infoProject.id);
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

const columns: Column<InfoProject>[] = [
  {header: "Titulo", accessor: "title"},
  {header: "Imagem", accessor: "image"},
  {header: "Link", accessor: "link"},
];


  return (

   <Table 
    columns={columns}
    data={infoProject}
    handleDelete={handleDelet}
    handleEdite={handleEdit} 
    />
  );
};


export default ProjectList;