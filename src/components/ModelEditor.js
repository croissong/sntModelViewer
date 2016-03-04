import React, { PropTypes } from 'react';
import EditorForm from 'components/EditorForm';

export default class ModelEditor extends React.Component {

  static propTypes = {
    model: PropTypes.object.isRequired,
    fetching: PropTypes.bool.isRequired,
    editField: PropTypes.func.isRequired
  };

  getVal = (field) => (
    typeof (field) === 'object' ? field.value : field
  );

  getType = (field) => {
    return typeof (field) === 'object' ? this.parseType(field.type) : typeof (field);
  };

  parseType = (str) => {
    return str === 'java.lang.Class' ? str : typeof (str);
  };

  onEdit

  createFormFields = () => {
    let model = this.props.model;
    return Object.keys(model).map(f => {
      let val = this.getVal(model[f]);
      let type = this.getType(model[f]);
      return (
        <div key={f}>
          <div>{f}</div>
          <div>{type}</div>
          <input type={type} id={f} value={val}></input>
        </div>
      );
    }
    );
  };

  render () {
    let { p } = this.props; 
    return (
      <EditorForm
        model={p.model}
      />
    );
  }
}

