import produce from 'immer';

const INITIAL_STATE = {
  body: {},
};

// *Reducer ignorando o saga

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@info/Exemplo':
      return produce(state, draft => {
        draft.body = {};
      });

    default:
      return state;
  }
}
