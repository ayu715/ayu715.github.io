import React from 'react';
import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';
import AboutMe from '../components/main/AboutMe';
import Career from '../components/main/Career';
import SideProjects from '../components/main/SideProjects';
import TechStack from '../components/main/TechStack';
import StrongPoint from '../components/main/StrongPoint';
import Intro from '../components/main/Intro';
import withAnimation from '../components/utils/withAnimation';
import Contact from '../components/main/Contact';

const AnimatedIntro = withAnimation(Intro, 'slide-in-left');
const AnimatedAboutMe = withAnimation(AboutMe, 'fade-in');
const AnimatedStrongPoint = withAnimation(StrongPoint, 'slide-in-right');
const AnimatedTechStack = withAnimation(TechStack, 'slide-in-left');
const AnimatedCareer = withAnimation(Career, 'fade-in');
const AnimatedSideProjects = withAnimation(SideProjects, 'slide-in-right');
const AnimatedContact = withAnimation(Contact, 'fade-in');

const Main = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <main className="flex-grow container mx-auto p-4 ">
        <AnimatedIntro />
        <AnimatedTechStack />
        <AnimatedAboutMe />
        <AnimatedStrongPoint />
        <AnimatedCareer />
        <AnimatedSideProjects />
        <AnimatedContact />
      </main>
      <Footer />
    </div>
  );
};

export default Main;
