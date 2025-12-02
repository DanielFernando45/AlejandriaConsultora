import { Helmet } from "react-helmet-async";

const SEOMetadata = ({ 
  title, 
  description, 
  keywords, 
  ogImage = "https://alejandriaconsultora.com/og-image.jpg",
  canonical 
}) => {
  const fullTitle = title ? `${title} | Alejandría Centro de Investigación` : "Asesoría de Tesis Profesional | Alejandría Centro de Investigación";
  const siteUrl = "https://alejandriaconsultora.com";
  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Alejandría Centro de Investigación" />
      <meta name="geo.region" content="PE-LIM" />
      <meta name="geo.placename" content="Lima, Perú" />
      <link rel="canonical" content={canonicalUrl} />
    </Helmet>
  );
};

export default SEOMetadata;
