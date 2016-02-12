import statelessCheckbox from './statelessCheckbox';

function checkboxGroup(React, ReactDOM) {
  class CheckboxGroup extends React.Component {
    _getCheckboxes() {
      return [...ReactDOM.findDOMNode(this).querySelectorAll('input[type="checkbox"]')];
    }

    _handleSelection() {
      const checkboxes = this._getCheckboxes();
      const values = checkboxes
        .filter(checkboxNode => checkboxNode.checked)
        .map(checkboxNode => checkboxNode.value);

      this.props.onSelection(values);
    }

    render() {
      const { defaultValues, name, children } = this.props;
      const checkboxConfig = { defaultValues, name, onChange: this._handleSelection.bind(this) };

      return children(statelessCheckbox(React, checkboxConfig));
    }
  }

  CheckboxGroup.propTypes = {
    name: React.PropTypes.string,
    defaultValues: React.PropTypes.array,
    onSelection: React.PropTypes.func,
    children: React.PropTypes.func.isRequired
  };

  return CheckboxGroup;
}

export default checkboxGroup;
