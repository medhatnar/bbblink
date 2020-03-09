# bbblink 👁️ (Bring Back Blink)

bbblink an open-source library for making your DOM elements appear and disappear and appear and disappear...

Blink provides the polyfill you need to reverse the [disastrous decision made in 2014](https://www.fastcompany.com/3015408/saying-goodbye-to-the-html-tag) to remove the blink HTML tag.

## Documentation

### Installation

Install using NPM or yarn

**NPM**:
`npm install --save bbblink`

**Yarn**:
`yarn add bbblink`

### Usage

Import using ES6 import syntax

```
import { alltheBlinks } from "bbblink";
```

or import using CommonJS syntax

```
const alltheBlinks = require('bbblink')
```

### Functions

1. `makeBlink(DOM Element, interval = 500)`

   Makes an element on your page blink at a given interval in ms.

   ```
   alltheBlinks(500)
   ```

2) `allTheBlinks(interval = 500)`

   Makes everything on your page blink at the given interval

   ```
   el = getElementbyId("not-blinking")
   makeBlink(el, 300)
   ```

3) **OBSOLETE** `stopBlink()`

   Not recommended. Stops all current blinking processes.

   ```
   stopBlink()
   ```

### React Example

Use bbblink with React event handlers.

```
import React, { useEffect } from "react";
import { allTheBlinks, makeBlink, stopBlink } from "bbblink";
import "./styles.css";

export default function App() {
  useEffect(() => {
    allTheBlinks();
  }, []);

  return (
    <div className="App">
      <h1 onClick={event => makeBlink(event.target)}>Hello CodeSandbox</h1>
      <h2 onClick={() => stopBlink()}>
        Start editing to see some magic happen!
      </h2>
    </div>
  );
}

```

Try it on Code Sandbox!

[![Edit floral-rgb-k7mnj](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/floral-rgb-k7mnj?fontsize=14&hidenavigation=1&theme=dark)

## Created by

<table>
  <tr>
     <td align="center"><a href="https://github.com/narmader"><img src="https://avatars0.githubusercontent.com/u/16326269?s=400&v=4" width="200px;" alt="Picture of Andrew Chien"/><br /><b>Nar Shah</b></a></td>
    <td align="center"><a href="https://twitter.com/AlliColyer"><img src="https://avatars1.githubusercontent.com/u/11083917?s=460&v=4" width="200px;" alt="Picture of Allison Colyer"/><br /><b>Alli Colyer</b></a></td>
   <td align="center"><a href="https://github.com/michaelwlu"><img src="https://avatars1.githubusercontent.com/u/9114194?s=460&v=4" width="200px;" alt="Picture of Michael Lu"/><br /><b>Michael Lu</b></a></td>
  </tr>
</table>
