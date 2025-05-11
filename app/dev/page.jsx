export default function MyComponent() {
  const htmlCode = '<p>This is <strong>embedded HTML</strong>.</p>';
  const scriptCode = 'console.log("Embedded JavaScript code");';

  return (
    <div style={{ margin: 100}}>
      <pre><code>{htmlCode}</code></pre>
    </div>
  );
}