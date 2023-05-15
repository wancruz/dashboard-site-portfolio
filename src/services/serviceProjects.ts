import api from "./api";

export interface InfoProject {
  id: number;
  link: string;
  image: string;
  title: string;
}

export const createInfoProject = async (infoProject: InfoProject) => {
  const response = await api.post("/infoProject", infoProject);
  return response.data;
}

export const getInfoProject = async () => {
  const response = await api.get("/infoProject");
  return response.data;
}

export const updateInfoProject = async (infoProject: InfoProject) => {
  const response = await api.put(`/infoProject/${infoProject.id}`, infoProject);
  return response.data;
}

export const deleteInfoProject = async (id: number) => {
  const response = await api.delete(`/infoProject/${id}`);
  return response.data;
}

export const createOrUpdateInfoProject = async (infoProject: InfoProject) => {
  if (infoProject.id === 0) {
    return await createInfoProject(infoProject);
} else {
   return await updateInfoProject(infoProject);
}
}
    