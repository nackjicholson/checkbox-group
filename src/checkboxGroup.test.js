import $ from 'teaspoon';
import assert from 'assert';
import React from 'react';
import {spy} from 'sinon';
import checkboxGroup from './checkboxGroup';

function createComponent(customProps = {}) {
  const props = Object.assign({}, customProps);
  const CheckboxGroup = checkboxGroup(React);
  return (
    <CheckboxGroup {...props}>
      {Checkbox =>
        <div>
          <Checkbox value="alpha"/>
          <Checkbox value="bravo"/>
          <Checkbox value="charlie"/>
        </div>
      }
    </CheckboxGroup>
  );
}

describe('checkboxGroup', () => {
  it('should return a react component constructor', () => {
    const actual = typeof checkboxGroup(React);
    const expected = 'function';

    assert.equal(actual, expected, 'statelessRadioGroup returns stateless component function');
  });

  it('should render checkbox input group via the provided children function', () => {
    const component = createComponent();

    const actual = $(component)
      .render()
      .find('div input[type=checkbox]')
      .length;
    const expected = 3;

    assert.equal(actual, expected, 'rendered three checkboxes');
  });

  it('should be able to check boxes by default via defaultValues prop', () => {
    const props = {values: ['alpha', 'charlie']};
    const component = createComponent(props);

    const $checkedInputs = $(component)
      .render()
      .find('div input[checked]');

    const actualCheckedValues = $checkedInputs
      .map(node => node.value)
      .get();
    const expectedCheckedValues = ['alpha', 'charlie'];

    assert.deepEqual(actualCheckedValues, expectedCheckedValues, 'checked boxes by default');
  });

  it('should call onSelection callback with all checked values on change', () => {
    const props = {onSelection: spy()};
    const component = createComponent(props);

    const $elements = $(component).render();
    const $alphaBox = $elements.find('input[value=alpha]');

    const alphaBoxNode = $alphaBox.dom();
    alphaBoxNode.checked = true;
    $alphaBox.trigger('change', {target: alphaBoxNode});

    assert(props.onSelection.calledOnce, 'onSelection called once');
    assert.equal(
      props.onSelection.args[0].length,
      1,
      'onSelection callback called with one argument'
    );

    const actualFirstSelectionArg = props.onSelection.args[0][0];
    const expectedFirstSelectionArg = ['alpha'];

    assert.deepEqual(
      actualFirstSelectionArg,
      expectedFirstSelectionArg,
      'onSelection callback was called with values array of the checked boxes'
    );

    const $charlieBox = $elements.find('input[value=charlie]');
    const charlieBoxNode = $charlieBox.dom();
    charlieBoxNode.checked = true;
    $charlieBox.trigger('change', {target: charlieBoxNode});

    assert(props.onSelection.calledTwice, 'onSelection called twice');
    assert.equal(
      props.onSelection.args[1].length,
      1,
      'onSelection callback was called with one argument'
    );

    const actualSecondSelectionArg = props.onSelection.args[1][0];
    const expectedSecondSelectionArg = ['alpha', 'charlie'];

    assert.deepEqual(
      actualSecondSelectionArg,
      expectedSecondSelectionArg,
      'onSelection callback was called again with updated values array of the checked values'
    );
  });
});
