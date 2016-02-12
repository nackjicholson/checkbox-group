import includes from 'lodash.includes';

function statelessCheckbox(React, config) {
  const { defaultValues, onChange } = config;

  function StatelessCheckbox(props) {
    const defaultChecked = includes(defaultValues, props.value);

    return (
      <input
        type="checkbox"
        value={props.value}
        defaultChecked={defaultChecked}
        onChange={onChange}
      />
    );
  }

  StatelessCheckbox.propTypes = {
    value: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
      React.PropTypes.bool
    ])
  };

  return StatelessCheckbox;
}

export default statelessCheckbox;
