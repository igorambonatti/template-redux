import { all, takeLatest } from 'redux-saga/effects';

// import { Container } from './styles';

function exemplo() {
  return [];
}

export default all([takeLatest('@info/Exemplo', exemplo)]);
