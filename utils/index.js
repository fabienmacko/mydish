export const findByTestAttribute = (component, attrValue) => component.find(`[data-test='${attrValue}']`);