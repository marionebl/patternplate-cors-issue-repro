
// lib/hello-world/demo.js
module.exports = {
  html: () => `
    <link data-import rel="import" href="../static/component.html">
  `,
  default: function() {
    const el = document.querySelector("[data-import]");
    const content = el.import;
    const defaultExport = content.querySelector("[data-export=\"default\"]");

    document.body.appendChild(defaultExport);
  }
};
