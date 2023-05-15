import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import styles from "./SkillList.module.css";

import { InfoSkill, deleteInfoSkill, getInfoSkill, updateInfoSkill } from "../../../services/serviceSkill";


interface ItemList {
  name: string;
  image: string;
  tipo: string;
}

const SkillList: React.FC = () => {

  const navigate = useNavigate();

  const [infoSkill, setInfoSkill] = React.useState<InfoSkill[]>([]);

  const fetchInfoSkill = async () => {
    try {
      const infoSkill = await getInfoSkill();
      setInfoSkill(infoSkill);
    } catch (error) {
      console.log('Erro ao buscar lista de habilidades', error);
    }
  };

  useEffect(() => {
    fetchInfoSkill();
  }, []);

  const handleDelet = async (id: number) => {

    try {
      await deleteInfoSkill(id);
      fetchInfoSkill();
      alert('Habilidade deletada com sucesso!');
    } catch (error) {
      console.log('Erro ao deletar habilidade', error);
      alert('Erro ao deletar habilidade!');
    }

  };

  const handleEdit = (itemInfoSkill: InfoSkill) => {
    navigate("/skill/cadastrar", { state: itemInfoSkill })
  };

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Titulo</th>
          <th>Imagem</th>
          <th>Tipo</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {infoSkill.map((infoSkill, index) => (
          <tr key={index}>
            <td>{infoSkill.name}</td>
            <td><img src={infoSkill.image} alt={infoSkill.image} className={styles.image} /></td>
            <td>{infoSkill.tipo}</td>
            <td>
              <button onClick={() => handleEdit(infoSkill)}>Editar</button>
              <button onClick={() => handleDelet(infoSkill.id)}>Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SkillList;