/**
 * Component for rendering JSON-LD structured data
 * This helps with SEO by providing search engines with structured information
 */

interface StructuredDataProps {
  data: object | object[];
}

export default function StructuredData({ data }: StructuredDataProps) {
  // Handle both single object and array of objects
  const structuredData = Array.isArray(data) ? data : [data];

  return (
    <>
      {structuredData.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}



