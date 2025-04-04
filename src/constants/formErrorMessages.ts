import GeneralSettings from './generalSettings';

const enum FormErrorMessages {
  nameReqErr = "Поле Моє ім'я повинно бути заповнене",
  phoneReqErr = 'Поле Номер телефону повинно бути заповнене',
  phoneRegExpErr = 'Номер телефону може містити лише цифри, пробіли, дужки, дефіси або знак +',
  phoneMinLengthErr = `Номер телефону має містити не менше ${GeneralSettings.phoneMinLength} символів`,
  emailReqErr = 'Поле Електронна пошта повинно бути заповнене',
  emailRegExpErr = 'Електронна пошта може містити лише латинські літери, цифри, крапки, дефіси, підкреслення, символи %, +',
}

export default FormErrorMessages;
