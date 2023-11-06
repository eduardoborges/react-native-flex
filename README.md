<div align="center">
  <h1>📏 react-native-flex</h1>
  <h4>A simple react-native flex grid component to build layouts with elegance</h4>

  ![npm](https://img.shields.io/npm/v/react-native-flex) ![npm package minimized gzipped size (select exports)](https://img.shields.io/bundlejs/size/react-native-flex?color=green-light) ![npm](https://img.shields.io/npm/dw/react-native-flex)
</div>


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
import { Flex } from 'react-native-flex';

const App = () => {
  return (
    <Flex vCentered centered vertical debug>
      <Flex vEnd centered full>
        // ...
      </Flex>
      <Flex centered vCentered>
        // ...
      </Flex>
    </Flex>
  )
}
```

## Let's grid it! 💪
