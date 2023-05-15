import React from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from '../components/layout';

import Home from '../pages/home';
import RegisterAbout from '../pages/about';
import Skills from '../pages/skills/Skills/Skills';
import ProjectList from '../pages/projects/ProjectList';
import SkillList from '../pages/skills/SkillList';
import RegisterProjects from '../pages/projects/RegisterProjects/RegisterProjects';
import { useAuth } from '../contexts/AuthContext';


const AppRoutes: React.FC = () => {
   
  const {authenticated, isLoading } = useAuth();

  if (isLoading) {
    return <p>Carregando...</p>
  }

   if (!authenticated) {
    return <Navigate to="/login" />;
   }
    
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/cadastrar" element={<RegisterAbout />} />
        <Route path="/skill/cadastrar" element={<Skills />} />
        <Route path="/skill/lista" element={<SkillList />} />
        <Route path="/projects/cadastrar" element={<RegisterProjects />} />
        <Route path="/projects/listagem" element={<ProjectList />} />
      </Routes>
    </Layout>

  );
};
export default AppRoutes;