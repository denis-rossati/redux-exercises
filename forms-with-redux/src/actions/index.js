export const MANAGE_FORMS = 'manageForms';

export const manageForms = (name, value) => ({
  type: MANAGE_FORMS,
  name,
  value,
});
