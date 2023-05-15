import api from "./api";

export interface InfoAbout {
   id?: number;
   foto: string;
   resumo: string;
}

// Funçao para conexão para o banco de dados


export const createInfoAbout = async (infoAbout: InfoAbout): Promise<InfoAbout> => {
    const response = await api.post<InfoAbout>('/infoAbout', infoAbout);
    return response.data;
}

 export async function updateInfoAbout(infoAbout:InfoAbout): Promise<InfoAbout> {
    const response =  await api.put<InfoAbout>('/infoAbout/1', infoAbout);
    return response.data;
 }

 export async function getInfoAbout(): Promise<InfoAbout> {
   const response = await api.get<InfoAbout>('/infoAbout/1');
   return response.data;
 }

 export const createOrUpdateInfoAbout = async (infoAbout: InfoAbout): Promise<InfoAbout> => {
  if (infoAbout.id) {
         return await updateInfoAbout(infoAbout);
} else { return await createInfoAbout(infoAbout);
   
}
}

export const deleteInfoAbout = async (): Promise<void> => {
 await api.delete('/infoAbout/1');
 }

// export async function updateAbout(infoAbout:InfoAbout): Promise<InfoAbout> {
//   const response = await api.post<InfoAbout>('/infoAbout/1');
//  return response.data;   
//}

