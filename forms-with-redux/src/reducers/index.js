import { MANAGE_FORMS, manageForms } from '../actions/index';

const INITIAL_STATE = {
  nome: '',
  email: '',
  cpf: '',
  endereco: '',
  cidade: '',
  estado: 'Um estado',
  radio: '',
}

const manageInfo = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MANAGE_FORMS:
      return ({
        ...state,
        [action.name]: action.value,
      })
      default:
        return state;
  }
}

export default manageInfo;