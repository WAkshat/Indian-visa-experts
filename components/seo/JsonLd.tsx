/**
 * Renders one or more JSON-LD structured-data blocks.
 * Server component — zero client JS, no runtime cost.
 */
export default function JsonLd({ data }: { data: object | object[] }) {
  const blocks = Array.isArray(data) ? data : [data];
  return (
    <>
      {blocks.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          // Escape "<" so schema data can never break out of the <script> tag
          // (e.g. a stray "</script>"). Produces valid JSON either way.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block).replace(/</g, "\\u003c") }}
        />
      ))}
    </>
  );
}
