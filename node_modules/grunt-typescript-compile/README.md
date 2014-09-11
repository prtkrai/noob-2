# grunt-typescript-compile

> Grunt plugin to compile TypeScript.

This version is compatable with TypeScript 0.9.7.

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-typescript-compile --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-typescript-compile');
```

## The "typescript" task

### Overview
In your project's Gruntfile, add a section named `typescript` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  typescript: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

Options are defined in [ts-compiler](https://github.com/jedmao/ts-compiler#tsicompileroptions).


### Usage Example

```js
grunt.initConfig({
  typescript: {
    options: {
      module: 'commonjs',
      target: 'es5',
    },
    dist: {
      src: 'app/scripts/**/*.ts',
      dest: 'dist/',
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).
