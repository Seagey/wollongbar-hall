import { forms } from "@wix/forms";
console.log(Object.keys(forms).filter(k => typeof forms[k] === 'function'));
