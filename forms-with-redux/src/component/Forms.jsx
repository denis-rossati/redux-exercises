import React, { Component } from 'react'
import { connect } from 'react-redux';
import { manageForms } from '../actions/index';

class Forms extends Component {
  renderSelect () {
    const { manageForms } = this.props;
    return (
      <select name="estado" onChange={({ target: { name, value } }) => manageForms(name, value)} >
        <option value="Um estado">Um estado</option>
        <option value="Outro estado">Outro estado</option>
      </select>
    )
  }

  renderRadio () {
    return (
      <select name="radio" onChange={({ target: { name, value } }) => manageForms(name, value)} >
        <option value="casa">casa</option>
        <option value="apartamento" >apartamento</option>
      </select>
    )
  }
  render() {
    const { manageForms } = this.props;
    return (
      <div>
        <form>
          <fieldset>
            <input name="nome" type="text" onChange={({ target: { name, value } }) => manageForms(name, value)} />
            <input name="email" type="email" onChange={({ target: { name, value } }) => manageForms(name, value)} />
            <input name="cpf" type="text" onChange={({ target: { name, value } }) => manageForms(name, value)} />
            <input name="endereco" type="text" onChange={({ target: { name, value } }) => manageForms(name, value)} />
            <input name="cidade" type="text" onChange={({ target: { name, value } }) => manageForms(name, value)} />
            { this.renderSelect() }
            { this.renderRadio() }
          </fieldset>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  manageForms: (name, value) => dispatch(manageForms(name, value))
});

export default connect(null, mapDispatchToProps)(Forms);
