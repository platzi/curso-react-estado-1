import React from 'react';
import { Loading } from './Loading';

const SECURITY_CODE = 'paradigma';

class ClassState extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      value: '',
      error: false,
      loading: false,
    };
  }

  // componentWillMount() {
  // UNSAFE_componentWillMount() {
  //   console.log("componentWillMount")
  // }
  
  // componentDidMount() {
  //   console.log("componentDidMount")
  // }

  componentDidUpdate() {
    console.log('actualizacion');

    if (!!this.state.loading) {
      setTimeout(() => {
        console.log("Haciendo la validación")
  
        if (SECURITY_CODE === this.state.value) {
          this.setState({ error: false, loading: false });
        } else {
          this.setState({ error: true, loading: false });
        }
        
        console.log("terminando la validación")
      }, 3000);
    }
  }
  
  render() {
    return (
      <div>
        <h2>Eliminar {this.props.name}</h2>
        
        <p>Por favor, escribe el código de seguridad.</p>

        {(this.state.error && !this.state.loading) && (
          <p>Error: el código es incorrecto</p>
        )}

        {this.state.loading && (
          <Loading />
        )}

        <input
          placeholder="Código de seguridad"
          value={this.state.value}
          onChange={(event) => {
            this.setState({ value: event.target.value });
          }}
        />
        <button
          onClick={() => this.setState({ loading: true })}
        >Comprobar</button>
      </div>
    );
  }
}

export { ClassState };
