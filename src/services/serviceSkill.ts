import api from "./api";

export interface InfoSkill {
  id: number;
  name: string;
  image: string;
  tipo: string;
}

export const createInfoSkill = async (infoSkill:InfoSkill) => {
   const response = await api.post('/infoskill',infoSkill);
   return response.data;
}

export const getInfoSkill = async () => {
  const response = await api.get('/infoSkill');
  return response.data;
}

export const updateInfoSkill = async (infoSkill: InfoSkill) => {
   const response = await api.put(`/infoSkill/${infoSkill.id}`,infoSkill);
  return response.data;
}

export const deleteInfoSkill = async (id: number) => {
  const response = await api.delete(`/infoSkill/${id}`);
  return response.data;
}

export const createOrUpdateInfoSkill = async (infoSkill: InfoSkill) => {
  if (infoSkill.id === 0) {
    return await createInfoSkill(infoSkill);
} else {
   return await updateInfoSkill(infoSkill);
}
}