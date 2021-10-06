const initialState = {
  value: '',
  error: false,
  loading: false,
  deleted: false,
  confirmed: false,
};

// const reducer = (state, action) => {
// };

const reducerIf = (state, action) => {
  if (action.type === 'ERROR') {
    return {
      ...state,
      error: true,
      loading: false,
    };
  } else if (action.type === 'CHECK') {
    return {
      ...state,
      loading: true,
    };
  } else {
    return {
      ...state,
    };
  }
};

const reducerSwitch = (state, action) => {
  switch (action.type) {
    case 'ERROR':
      return {
        ...state,
        error: true,
        loading: false,
      };
    case 'CHECK':
      return {
        ...state,
        loading: true,
      };
    default:
      return {
        ...state,
      };
  }
};

const reducerObject = (state) => ({
  'ERROR': {
    ...state,
    error: true,
    loading: false,
  },
  'CHECK': {
    ...state,
    loading: true,
  },
});

const reducer = (state, action) => {
  if (reducerObject(state)[action.type]) {
    return reducerObject(state)[action.type];
  } else {
    return state;
  }
};

