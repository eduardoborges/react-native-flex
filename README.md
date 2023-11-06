<div align="center">
  <h1>🥸 react-native-flex</h1>
  <h4>A simple flex grid component to build layouts with elegance</h4>

  ![npm](https://img.shields.io/npm/v/react-native-flex<) ![npm package minimized gzipped size (select exports)](https://img.shields.io/bundlejs/size/react-native-flex<?color=green-light) ![npm](https://img.shields.io/npm/dw/react-native-flex<)

</div>


## Table of Contents

- [Installation](#install)
- [Usage](#quickstart)
- [Masking Types](#masking-types)
  - [Static Masking Type](#static-masking-type)
  - [Optional Masking Type](#optional-masking-type)
  - [Dynamic Masking Type](#dynamic-masking-type)
  - [Alias Masking Type](#alias-masking-type)
  - [Alternator Masking Type](#alias-masking-type)
  - [Preprocessing Masking Type](#preprocessing-masking-type)


## Features
- ✨ Intuitive Grid System: Create responsive and flexible grids for your mobile app layouts effortlessly.
- 📐 Customizable Grid Configuration: Tailor the grid to your project's unique needs with a range of options.
- 🚀 High Performance: Smooth animations and fast rendering, ensuring a delightful user experience.
- 💡 Grid-Based Responsiveness: Effortlessly adapt to various screen sizes and orientations.

## Install

```sh
npm install react-native-flex
```

## Quickstart

```jsx
import React from 'react'
import { withMask } from 'use-mask-input';

const App = () => {
  return (
    <input type="text" ref={withMask('9999-9999')} />
  )
}
```

# Let's grid it! 💪
