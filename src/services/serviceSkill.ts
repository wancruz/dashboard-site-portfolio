import api from "./api";

export interface InfoSkill {
  id: number;
  name: string;
  image: string;
  tipo: string;
}

export const createInfoSkill = async (infoSkill:InfoSkill): Promise<InfoSkill> => {
   const response = await api.post<InfoSkill>('/infoskill',infoSkill);
   return response.data;
}

export const getInfoSkill = async (): Promise<InfoSkill[]> => {
  const response = await api.get<InfoSkill[]>('/infoSkill');
  return response.data;
}

export const updateInfoSkill = async (infoSkill: InfoSkill): Promise<InfoSkill> => {
   const response = await api.put<InfoSkill>(`/infoSkill/${infoSkill.id}`,infoSkill);
  return response.data;
}

export const deleteInfoSkill = async (id: number) => {
  const response = await api.delete(`/infoSkill/${id}`);
  return response.data;
}

export const createOrUpdateInfoSkill = async (infoSkill: InfoSkill): Promise<InfoSkill> => {
  if (!infoSkill.id) {
    return await createInfoSkill(infoSkill);
} else {
   return await updateInfoSkill(infoSkill);
}
}