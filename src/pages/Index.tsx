
import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import LaundryFeatures from '@/components/LaundryFeatures';
import HowItWorks from '@/components/HowItWorks';
import LaundryBenefits from '@/components/LaundryBenefits';
import SEO from '@/components/SEO';
import { useEffect } from 'react';

const Index = () => {
  // Fix any ID conflicts when the page loads
  useEffect(() => {
    const contactElements = document.querySelectorAll('[id="contact"]');
    if (contactElements.length > 1) {
      // If there are multiple elements with id="contact", rename one
      contactElements[1].id = 'contact-footer';
    }
  }, []);

  return (
    <PageLayout>
      <SEO 
        title="GoBright - Your Smart Way to Laundry" 
        description="Brighten Your Day with Clean Clothes — Delivered to Your Doorstep. Find trusted local laundries, compare prices, and book pickup & delivery in one click."
        imageUrl="/lovable-uploads/30bf33c6-dc07-43fa-9afc-3e6d25a3f723.png"
        keywords={['laundry app', 'doorstep laundry', 'laundry service', 'local laundry', 'laundry delivery', 'dry cleaning', 'India laundry']}
      />
      <Hero />
      <LaundryFeatures />
      <HowItWorks />
      <LaundryBenefits />
    </PageLayout>
  );
};

export default Index;
