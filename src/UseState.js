import React from 'react';

const SECURITY_CODE = 'paradigma';

function UseState({ name }) {
  const [state, setState] = React.useState({
    value: '',
    error: false,
    loading: false,
  });

  console.log(state)

  React.useEffect(() => {
    console.log("Empezando el efecto")

    if (!!state.loading) {
      setTimeout(() => {
        console.log("Haciendo la validación")
  
        if (state.value === SECURITY_CODE) {
          setState({
            ...state,
            error: false,
            loading: false,
          });
        } else {
          setState({
            ...state,
            error: true,
            loading: false,
          });
        }
        
        console.log("terminando la validación")
      }, 3000);
    }
    
    console.log("Terminando el efecto")
  }, [state.loading]);
  
  return (
    <div>
      <h2>Eliminar {name}</h2>
      
      <p>Por favor, escribe el código de seguridad.</p>

      {(state.error && !state.loading) && (
        <p>Error: el código es incorrecto</p>
      )}
      {state.loading && (
        <p>Cargando...</p>
      )}

      <input
        placeholder="Código de seguridad"
        value={state.value}
        onChange={(event) => {
          setState({
            ...state,
            value: event.target.value,
          });
        }}
      />
      <button
        onClick={() => {
          setState({
            ...state,
            loading: true,
          });
        }}
      >Comprobar</button>
    </div>
  );
}

export { UseState };
