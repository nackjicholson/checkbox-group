function checkbox(React) {
  function Checkbox(props, context) {
    const {values, onChange, name} = context;
    const checked = values.includes(props.value);

    return (
      <input
        {...props}
        type="checkbox"
        checked={checked}
        name={name}
        onChange={onChange}
        />
    );
  }

  Checkbox.propTypes = {
    value: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
      React.PropTypes.bool
    ])
  };

  Checkbox.contextTypes = {
    values: React.PropTypes.array,
    name: React.PropTypes.string,
    onChange: React.PropTypes.func
  };

  return Checkbox;
}

export default checkbox;
