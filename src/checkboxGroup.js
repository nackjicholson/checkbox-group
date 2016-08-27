import checkbox from './checkbox';

function newValuesAfterChange(values, box) {
  if (box.checked) {
    return values.concat(box.value);
  }

  return values.filter(value => value !== box.value);
}

function checkboxGroup(React) {
  class CheckboxGroup extends React.Component {
    constructor(props) {
      super(props);
      this.state = {values: props.values};
      this._handleSelection = this._handleSelection.bind(this);
    }

    getChildContext() {
      return {
        name: this.props.name,
        values: this.state.values,
        onChange: this._handleSelection
      };
    }

    _handleSelection(event) {
      const values = newValuesAfterChange(this.state.values, event.target);
      this.setState({values});
      this.props.onSelection(values);
    }

    render() {
      return this.props.children(checkbox(React));
    }
  }

  CheckboxGroup.defaultProps = {
    onSelection: () => {},
    values: []
  };

  CheckboxGroup.propTypes = {
    name: React.PropTypes.string,
    values: React.PropTypes.array,
    onSelection: React.PropTypes.func,
    children: React.PropTypes.func.isRequired
  };

  CheckboxGroup.childContextTypes = {
    values: React.PropTypes.array,
    name: React.PropTypes.string,
    onChange: React.PropTypes.func
  };

  return CheckboxGroup;
}

export default checkboxGroup;
