# checkbox-group

> React Checkbox Group Component

This component is based on the [react-radio-group](https://github.com/chenglou/react-radio-group) project by Cheng Lou.
It behaves very similarly.

When making a checkbox group in an HTML form you want to be able to easily select a boxes by default, be able
to respond to selection changes, and control the styling and HTML markup of your form. That's what this react component provides.

## Example

```js
import React from 'react';
import checkboxGroup from 'checkbox-group';

const CheckboxGroup = checkboxGroup(React);

function handleChange(values) {
  // callback is passed an array of the values which are selected.
}

<CheckboxGroup name="fruit" values={['orange']} onSelection={handleChange}>
  {Checkbox =>
    <div>
      <Checkbox value="apple" />Apple
      <Checkbox value="orange" />Orange
      <Checkbox value="watermelon" />Watermelon
    </div>
  }
</CheckboxGroup>
```

Produces this HTML when rendered by a component:

```html
<div>
  <input type="checkbox" name="fruit" value="apple" />Apple
  <input type="checkbox" name="fruit" value="orange" checked />Orange
  <input type="checkbox" name="fruit" value="watermelon" />Watermelon
</div>
```

## API

### Factory Function

`checkboxGroup :: (React) => props => ReactElement`

This module exports factory function which takes your instances of `React`, and returns the
constructor for a `CheckboxGroup` component.

```js
import checkboxGroup from 'checkbox-group';
const CheckboxGroup = checkboxGroup(React);
```

### `<CheckboxGroup />` Component

Props:

- **children** *func* *required* A function which builds the content of the radio group
- **values** *array* An array of values used to compare against the values of the `Checkbox` components in order to select them by default on first render.
- **onSelection** *func* A callback function which is called with a value, whenever the radio group's selection is changed.
- **name** *string* A unique name for identifying the checkbox inputs. What you'd normally put as the `name` prop on a checkbox input tag.

### `<Checkbox />` Component

(Since you're getting that as the argument of your children function, you could have named it anything you wanted really.) Any prop you pass onto it will be transferred to the actual input under the hood.

## Contributing

See [contributing.md](contributing.md)
