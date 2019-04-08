# transform-values-to-transform-commands
Takes in an object of transform values and outputs a string of transform commands in a stable order. Meant to be used with the results of https://github.com/ismailman/decompose-dommatrix  

The values themselves can be strings or numbers. If they are strings then they are assumed to have the unit already associated with them. If it's a number then the function will use a default unit. For translate that is px, rotate is deg, skew is deg, and scale is unitless.

## Usage
```
import transformValuesToTransformCommands from 'transform-values-to-transform-commands';

console.log(
    transformValuesToTransformCommands({
        translateX: 10,
        translateY: 20,
        translateZ: 30,
        rotateX: 10,
        rotateY: 20,
        rotateZ: 30,
        skewXY: '10deg',
        scale: 2
    })
);
```

## API

#### `transformValuesToTransformCommands(transformValues: TransformValues): string`

### TransformValues
#### `translateX, translateY, translateZ: number | string`
#### `rotateX, rotateY, rotateZ: number | string`
#### `skewXY: number | string`
#### `scaleX, scaleY, scaleZ: number | string`