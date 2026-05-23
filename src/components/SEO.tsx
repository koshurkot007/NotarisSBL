import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  schema?: object;
  ogImage?: string;
}

export function SEO({ title, description, keywords, schema, ogImage }: SEOProps) {
  const defaultKeywords = "Notaris Jember, PPAT Jember, Pembuatan Akta Jember, Jasa Notaris Jember, Akta Tanah Jember, Setyo Budhi Laksmana";
  const finalKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;

  return (
    <Helmet>
      <title>{title} | Notaris & PPAT Kabupaten Jember</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={finalKeywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:type" content="website" />
      <meta property="og:locality" content="Jember" />
      <meta property="og:region" content="Jawa Timur" />
      <meta property="og:country-name" content="Indonesia" />
      <meta name="geo.region" content="ID-JI" />
      <meta name="geo.placename" content="Jember" />
      
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
