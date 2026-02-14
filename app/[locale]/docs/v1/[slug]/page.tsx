import {
  extractHeadings,
} from "../../../../../lib/extractHeadings";
import FeedbackWidget from "@/components/FeedbackWidget";
import TableOfContents from "../../../../../components/TableOfContents";
import CodeBlock from "@/components/CodeBlock";

export const revalidate = 60;

function addHeadingIds(html: string): string {
  return html.replace(/<h([2-3])>([^<]+)<\/h[2-3]>/g, (match, level, text) => {
    const id = text.toLowerCase().replace(/\s+/g, '-');
    return `<h${level} id="${id}">${text}</h${level}>`;
  });
}

export default function DocPage() {
  const html = `
  <h2>Introduction</h2>
  <p>Welcome...</p>
  <div style="height:800px"></div>

  <h2>Installation</h2>
  <p>Steps...</p>
  <div style="height:800px"></div>

  <h3>Step One</h3>
  <p>Details...</p>
  <div style="height:800px"></div>
`;


  const processedHtml = addHeadingIds(html);
  const headings = extractHeadings(processedHtml);

  return (
  <div className="flex">
    {/* Main Content */}
    <div className="flex-1 p-8">
      <div
        data-testid="doc-content"
        dangerouslySetInnerHTML={{ __html: processedHtml }}
      />
      <CodeBlock
  code={`npm install next react react-dom`}
/>

      {/* Feedback Widget Below Content */}
      <FeedbackWidget />
    </div>

    {/* Table of Contents */}
    <TableOfContents headings={headings} />
  </div>
);

}