# Vanilla React Component

## createElement()
```javascript
React.createElement(
  type,
  [props],
  [...children]
)
```
> Code written with JSX will be converted to use React.createElement(). You will not typically invoke React.createElement() directly if you are using JSX.

## Spread Operator
>The spread operator can be used to take an existing array and add another element to it while still preserving the original array.

```javascript
var colors = ['red', 'green', 'blue'];
var refColors = [...colors, 'yellow'];

// is equivalent of 
colors => ['red', 'green', 'blue']
refColors => ['red', 'green', 'blue', 'yellow']
```

## props
You pass down props from one parent component to a child component. 
But the you cannot pass props from the child to the parent. This is a one way data flow. 

## Prettier
Add prettier to your project instead of just using the VSCode extension. This is mainly for consistency, if someone does not use VSCode, they will be still following the same formatting rules on the project.
```
npm install -D prettier
```
`-D` flag indicates that you are in the *D*eveloper mode, not production. 

In the `package.json` file add the following to target Javascript and JSX files:
```JSON
"scripts": {
    "format": "prettier --write \"src/**/*.{js,jsx}\""
  }
```

To format run:

```
npm run format
```

## Random notes
The modern way of writing React is using JSX. No one uses `React.createElement()` anymore but it is good to know. Typically we have each component in a different file, such as App and Pet component. 