import { expect } from 'chai';
global.expect = expect;

import fs from 'fs';
import { JSDOM } from 'jsdom';
import path from 'path';
import { fileURLToPath } from 'url';

// Define __filename and __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the HTML and JavaScript files
const html = fs.readFileSync(path.resolve(__dirname, '..', 'index.html'), 'utf-8');
const jsFile = path.resolve(__dirname, '..', 'index.js');

// Read raw JavaScript code without transformation
const jsCode = fs.readFileSync(jsFile, 'utf-8');

// Set up JSDOM
const dom = new JSDOM(html, {
  runScripts: 'dangerously',
  url: 'http://localhost',
});

// Inject the raw JavaScript code into the JSDOM environment
dom.window.eval(jsCode);

// Make JSDOM's `window` and `document` globally accessible
global.window = dom.window;
global.document = dom.window.document;

// Export dom as default only if needed (remove this if unused)
export default dom;

