# ReactTextMorph

Morph Between text in React.

## Installation

First make sure you have npm and node installed. Run `npm install react-text-morph` to install the package.

# Usage

After installing the package, you can import it in your project.

```js
import ReactTextMorph from 'react-text-morph';
```

Then you can use it in your project and pass in the props you want.

```js
import { Component } from 'react';

class Example extends Component {
  constructor() {
    super();

    this.state = {
      morphState: false
    };
  }

  render() {
    return (
      <ReactTextMorph
        text="Hello World"
        morphText="Morped Text!!!"
        morphTextColor="green"
        morphState={this.state.morphState}
        onMouseOver={
          () => this.setState({ 
              morphState: true 
          })
        }
        onMouseOut={
          () => this.setState({ 
              morphState: false 
          })
        }
      />
    );
  }
}
```

# Props

## text: String (required, Ex: "Hello World")

The text that will be displayed while not morphed.

## morphText: String (required, Ex: "Morped Text!!!")

The text that will be displayed after morphing.

# morphTextColor: CSSString (Default: white, Ex: "#rgba(120, 0, 40, 0.5)")

The color of the text after morphing.

## morphState: Boolean (Default, false, Ex: true)

The state of the text. If true, the text will be morphed.

## ...rest: Object (Default: null, Ex: {className: 'map'})
Other props that are passed to the underlying Element.

# Building
You can manually build ReactTextMorph by following the instructions below:

1. Make sure you have npm and node installed.
2. Clone the repository to your local machine `git clone https://github.com/cadenmarinozzi/ReactTextMorph.git`
3. Cd into the cloned directory `cd ReactTextMorph` and run `npm install`
4. Run `npm build` to build the module.

# LICENSE
See [LICENSE](./LICENSE) for the license.
