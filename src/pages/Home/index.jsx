import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import Navbar from '../../components/Navbar';
import Pricing from '../../components/Pricing';
import Footer from '../../components/Footer';
import CTA from '../../components/CTA';
import FeaturesTable from '../../components/FeaturesTable';
import FAQ from '../../components/FAQ';
import DemoSection from '../../components/DemoSection';

const Home = () => {
  return (
    <MainLayout>
      <Navbar />
      <Pricing />
      <CTA />
      <FeaturesTable />
      <FAQ />
      <DemoSection />
      <Footer />
    </MainLayout>
  );
};

export default Home; 