import React, { useEffect, useState } from "react";

import styles from "./Home.module.css";

import { FaRocket, FaClipboardList } from "react-icons/fa";

import Title from "../../components/common/Title";
import InfoBox from "../../components/common/InfoBox";

import { InfoSkill, getInfoSkill } from "../../services/serviceSkill";
import { InfoProject, getInfoProject } from "../../services/serviceProjects";

const Home = () => {

  const [infoSkill, setInfoSkill] = useState<InfoSkill[]>([]);
  const [infoProject, setInfoProject] = useState<InfoProject[]>([]);

  const fetchInfoSkill = async () => {
    try {
      const response = await getInfoSkill();
      setInfoSkill(response);
    } catch (error) {
      console.log(error);
    }
  };
  
  const fetchInfoProject = async () => {
    try {
      const response = await getInfoProject();
      setInfoProject(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchInfoSkill();
    fetchInfoProject();
  }, []);


  return (
    <main className={styles.container}>
      <Title className={styles.title1}>Bem-vindo ao nosso site!</Title>
      <p>Esta é a página inicial. Navegue pelo menu na barra lateral para explorar outras seções.</p>

      <div className={styles.infoBoxContainer}>

        <InfoBox
          title="Habilidades"
          value={infoSkill.length}
          icon={<FaRocket size={50} />} />

        <InfoBox
          title="Projetos"
          value={infoProject.length}
          icon={<FaClipboardList size={50} />} />


      </div>
    </main>
  );

};

export default Home;