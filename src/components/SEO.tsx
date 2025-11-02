import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  type?: string;
  name?: string;
  imageUrl?: string;
  publishDate?: string;
  modifiedDate?: string;
  author?: string;
  category?: string;
  keywords?: string[];
  isBlogPost?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title = 'GoBright',
  description = 'GoBright: Your smart way to laundry. Find trusted local laundries, compare prices, and book pickup & delivery in one click.',
  type = 'website',
  name = 'GoBright',
  imageUrl = '/lovable-uploads/30bf33c6-dc07-43fa-9afc-3e6d25a3f723.png',
  publishDate,
  modifiedDate,
  author,
  category,
  keywords = ['laundry app', 'doorstep laundry', 'laundry service', 'local laundry', 'laundry delivery', 'dry cleaning', 'India laundry'],
  isBlogPost = false
}) => {
  const location = useLocation();
  const productionDomain = 'https://gobright.app';
  const currentUrl = `${productionDomain}${location.pathname}`;
  const absoluteImageUrl = imageUrl.startsWith('http') ? imageUrl : `${productionDomain}${imageUrl}`;

  // Vercel provides this environment variable. It's 'production' for the main site, 
  // and 'preview' for preview deployments.
  const isProduction = import.meta.env.VITE_VERCEL_ENV === 'production';

  // Create base Organization JSON-LD structured data
  const organizationStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'GoBright',
    url: productionDomain,
    logo: `${productionDomain}/lovable-uploads/go-bright-Header-logo.png`,
    description: 'India\'s first fully app-based laundry service, connecting users with trusted local laundries.',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'gobright.co.in@gmail.com',
      telephone: '+91-9496763260'
    },
    sameAs: [
      'https://www.linkedin.com/company/gobright-india/',
      'https://www.instagram.com/gobright.india',
      'https://www.facebook.com/share/16K4opdaWc/'
    ]
  };

  // Enhanced BlogPosting JSON-LD structured data
  const blogPostStructuredData = isBlogPost && publishDate ? {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': currentUrl
    },
    headline: title,
    image: {
      '@type': 'ImageObject',
      url: absoluteImageUrl,
      width: 1200,
      height: 630
    },
    datePublished: publishDate,
    dateModified: modifiedDate || publishDate,
    author: {
      '@type': 'Organization',
      name: author || 'GoBright',
      url: productionDomain
    },
    publisher: {
      '@type': 'Organization',
      name: 'GoBright',
      logo: {
        '@type': 'ImageObject',
        url: `${productionDomain}/lovable-uploads/go-bright-Header-logo.png`,
        width: 512,
        height: 512
      },
      url: productionDomain
    },
    description: description,
    keywords: keywords.join(', '),
    articleSection: category,
    inLanguage: 'en-US',
    isAccessibleForFree: true
  } : null;

  const keywordString = category 
    ? [...keywords, category.toLowerCase()].join(', ') 
    : keywords.join(', ');

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={currentUrl} />
      <meta name="keywords" content={keywordString} />
      
      {/* ROBOTS TAG: This is the key change. */}
      {isProduction ? (
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      ) : (
        <meta name="robots" content="noindex, nofollow" />
      )}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={isBlogPost ? 'article' : type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="GoBright" />
      <meta property="og:locale" content="en_US" />
      {isBlogPost && category && <meta property="article:section" content={category} />}
      {isBlogPost && publishDate && <meta property="article:published_time" content={publishDate} />}
      {isBlogPost && modifiedDate && <meta property="article:modified_time" content={modifiedDate} />}
      {isBlogPost && <meta property="article:publisher" content={productionDomain} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImageUrl} />
      <meta name="twitter:site" content="@GoBrightApp" />
      <meta name="twitter:creator" content="@GoBrightApp" />
      
      {/* LinkedIn specific */}
      <meta property="og:image:secure_url" content={absoluteImageUrl} />
      <meta name="author" content={author || name} />
      
      {/* Pinterest specific */}
      <meta name="pinterest:description" content={description} />
      <meta name="pinterest:image" content={absoluteImageUrl} />
      
      {/* Additional SEO meta tags */}
      <meta name="theme-color" content="#14B8A6" />
      <meta name="msapplication-TileColor" content="#14B8A6" />
      
      {/* JSON-LD structured data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationStructuredData)}
      </script>
      
      {blogPostStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(blogPostStructuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
