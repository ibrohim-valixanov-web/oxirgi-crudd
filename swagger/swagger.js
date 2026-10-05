const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Booking & Ticket Management REST API",
      version: "1.0.0",
      description: "Full REST API with Swagger documentation for Ticket and Event booking system",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Local Server",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJsDoc(options);

const darkThemeCss = "\n  html, body {\n    background-color: #15181e !important;\n    color: #e2e8f0 !important;\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif !important;\n  }\n  .swagger-ui {\n    background-color: #15181e !important;\n    color: #e2e8f0 !important;\n  }\n  .swagger-ui .topbar {\n    background-color: #0d1117 !important;\n    border-bottom: 1px solid #21262d !important;\n  }\n  .swagger-ui .topbar .download-url-wrapper input[type=text] {\n    border: 1px solid #30363d !important;\n    background: #161b22 !important;\n    color: #fff !important;\n  }\n  .swagger-ui .info {\n    margin: 20px 0 !important;\n  }\n  .swagger-ui .info .title {\n    color: #ffffff !important;\n    font-weight: 700 !important;\n  }\n  .swagger-ui .info p, .swagger-ui .info li, .swagger-ui .info a {\n    color: #94a3b8 !important;\n  }\n  .swagger-ui .scheme-container {\n    background: #181d26 !important;\n    box-shadow: none !important;\n    border-radius: 8px !important;\n    border: 1px solid #232936 !important;\n    padding: 15px 20px !important;\n    margin-bottom: 20px !important;\n  }\n  .swagger-ui .schemes > label {\n    color: #cbd5e1 !important;\n  }\n  .swagger-ui select {\n    background: #0d1117 !important;\n    color: #f8fafc !important;\n    border: 1px solid #30363d !important;\n    border-radius: 6px !important;\n  }\n  .swagger-ui .opblock-tag {\n    color: #ffffff !important;\n    font-size: 26px !important;\n    font-weight: 700 !important;\n    border-bottom: 1px solid #232936 !important;\n    padding: 16px 0 10px 0 !important;\n  }\n  .swagger-ui .opblock-tag small {\n    color: #94a3b8 !important;\n    font-size: 14px !important;\n    font-weight: 400 !important;\n    margin-left: 12px !important;\n  }\n  .swagger-ui .opblock-tag:hover {\n    background: transparent !important;\n  }\n  .swagger-ui .opblock {\n    background: #181d26 !important;\n    border-radius: 6px !important;\n    box-shadow: 0 2px 4px rgba(0,0,0,0.2) !important;\n    margin: 0 0 10px 0 !important;\n    border: 1px solid #232936 !important;\n  }\n  .swagger-ui .opblock .opblock-summary {\n    padding: 8px 14px !important;\n    border-radius: 6px !important;\n    align-items: center !important;\n  }\n  .swagger-ui .opblock .opblock-summary-method {\n    font-weight: 800 !important;\n    font-size: 13px !important;\n    min-width: 80px !important;\n    border-radius: 4px !important;\n    text-shadow: none !important;\n    padding: 6px 14px !important;\n    letter-spacing: 0.5px !important;\n  }\n  .swagger-ui .opblock .opblock-summary-path {\n    color: #ffffff !important;\n    font-weight: 700 !important;\n    font-size: 15px !important;\n  }\n  .swagger-ui .opblock .opblock-summary-path__deprecated {\n    color: #64748b !important;\n  }\n  .swagger-ui .opblock .opblock-summary-description {\n    color: #cbd5e1 !important;\n    font-size: 13px !important;\n  }\n  .swagger-ui .opblock svg.arrow {\n    fill: #94a3b8 !important;\n  }\n  .swagger-ui .opblock.opblock-post {\n    background: rgba(0, 171, 107, 0.08) !important;\n    border-color: rgba(0, 171, 107, 0.35) !important;\n  }\n  .swagger-ui .opblock.opblock-post .opblock-summary-method {\n    background: #00ab6b !important;\n    color: #ffffff !important;\n  }\n  .swagger-ui .opblock.opblock-get {\n    background: rgba(33, 133, 208, 0.08) !important;\n    border-color: rgba(33, 133, 208, 0.35) !important;\n  }\n  .swagger-ui .opblock.opblock-get .opblock-summary-method {\n    background: #2185d0 !important;\n    color: #ffffff !important;\n  }\n  .swagger-ui .opblock.opblock-put {\n    background: rgba(242, 113, 28, 0.08) !important;\n    border-color: rgba(242, 113, 28, 0.35) !important;\n  }\n  .swagger-ui .opblock.opblock-put .opblock-summary-method {\n    background: #f2711c !important;\n    color: #ffffff !important;\n  }\n  .swagger-ui .opblock.opblock-delete {\n    background: rgba(219, 40, 40, 0.08) !important;\n    border-color: rgba(219, 40, 40, 0.35) !important;\n  }\n  .swagger-ui .opblock.opblock-delete .opblock-summary-method {\n    background: #db2828 !important;\n    color: #ffffff !important;\n  }\n  .swagger-ui .opblock.opblock-patch {\n    background: rgba(168, 85, 247, 0.08) !important;\n    border-color: rgba(168, 85, 247, 0.35) !important;\n  }\n  .swagger-ui .opblock.opblock-patch .opblock-summary-method {\n    background: #a855f7 !important;\n    color: #ffffff !important;\n  }\n  .swagger-ui .opblock-body {\n    background: #0d1117 !important;\n    color: #cbd5e1 !important;\n    border-top: 1px solid #232936 !important;\n    padding: 16px !important;\n  }\n  .swagger-ui .opblock-section-header {\n    background: #181d26 !important;\n    border-bottom: 1px solid #232936 !important;\n    padding: 8px 12px !important;\n    border-radius: 6px !important;\n  }\n  .swagger-ui .opblock-section-header h4 {\n    color: #f8fafc !important;\n  }\n  .swagger-ui table thead tr td, .swagger-ui table thead tr th {\n    color: #f8fafc !important;\n    border-bottom: 1px solid #30363d !important;\n  }\n  .swagger-ui .parameters-col_name {\n    color: #f8fafc !important;\n  }\n  .swagger-ui .parameter__name {\n    color: #38bdf8 !important;\n    font-weight: 700 !important;\n  }\n  .swagger-ui .parameter__type {\n    color: #94a3b8 !important;\n  }\n  .swagger-ui .response-col_status {\n    color: #f8fafc !important;\n    font-weight: 700 !important;\n  }\n  .swagger-ui .response-col_description {\n    color: #cbd5e1 !important;\n  }\n  .swagger-ui section.models {\n    background: #15181e !important;\n    border: 1px solid #232936 !important;\n    border-radius: 8px !important;\n  }\n  .swagger-ui section.models h4 {\n    color: #f8fafc !important;\n  }\n  .swagger-ui .model-box {\n    background: #0d1117 !important;\n    border-radius: 6px !important;\n    padding: 10px !important;\n  }\n  .swagger-ui .model-title {\n    color: #f8fafc !important;\n  }\n  .swagger-ui .prop-type {\n    color: #38bdf8 !important;\n  }\n  .swagger-ui input[type=text], .swagger-ui input[type=password], .swagger-ui textarea {\n    background: #0d1117 !important;\n    color: #f8fafc !important;\n    border: 1px solid #30363d !important;\n    border-radius: 6px !important;\n  }\n  .swagger-ui .btn {\n    background: #21262d !important;\n    color: #f8fafc !important;\n    border: 1px solid #30363d !important;\n    border-radius: 6px !important;\n  }\n  .swagger-ui .btn.execute {\n    background: #2563eb !important;\n    border-color: #2563eb !important;\n    color: #fff !important;\n  }\n  .swagger-ui .dialog-ux .modal-ux {\n    background: #181d26 !important;\n    border: 1px solid #30363d !important;\n    border-radius: 12px !important;\n    color: #f8fafc !important;\n  }\n  .swagger-ui .dialog-ux .modal-ux-header {\n    border-bottom: 1px solid #30363d !important;\n  }\n  .swagger-ui .dialog-ux .modal-ux-header h3 {\n    color: #f8fafc !important;\n  }\n  .swagger-ui .highlight-code {\n    background: #0d1117 !important;\n    border-radius: 6px !important;\n  }\n  .swagger-ui .filter .operation-filter-input {\n    background: #181d26 !important;\n    color: #f8fafc !important;\n    border: 1px solid #30363d !important;\n    border-radius: 6px !important;\n  }\n";

const setupSwagger = (app) => {
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec, {
      customCss: darkThemeCss,
      customSiteTitle: "API Documentation - Swagger",
      swaggerOptions: {
        docExpansion: "none",
        filter: true,
      },
    })
  );
};

module.exports = setupSwagger;
