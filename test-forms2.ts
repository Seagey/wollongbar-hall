import { submissions } from "@wix/forms";
console.log(Object.keys(submissions).filter(k => typeof submissions[k] === 'function'));
