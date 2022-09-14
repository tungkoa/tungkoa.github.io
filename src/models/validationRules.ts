export interface ValidationRules {
  field?: string,
  methods?: Array<ValidationMethods>,
  validWhen?: string,
  message?: string,
}

export type ValidationMethods = 'requiredField' | 'emailField';