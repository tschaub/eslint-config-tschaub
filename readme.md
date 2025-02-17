[![Build Status](https://github.com/tschaub/eslint-config-tschaub/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/tschaub/eslint-config-tschaub/actions?workflow=Test)

## eslint-config-tschaub

This package provides shareable [ESLint](http://eslint.org/) configurations for JavaScript projects that conform with my coding style.

### Installation

To make use of this config, install ESLint (>= 8.0) and this package as a development dependency of your project:

    npm install eslint eslint-config-tschaub --save-dev

Next, add an `eslint.config.js` file to the root of your project.  At a minimum, this config file must include the following:

```js
import config from 'eslint-config-tschaub';

export default [...config];
```

See the ESLint [configuration guide](https://eslint.org/docs/latest/use/configure/) for details on additional configuration options.  Any rules configured in your `eslint.config.js` file will override those provided by the `eslint-config-tschaub` package.

### Use

You should run the linter as part of (or before) your tests.  Assuming tests are run before any proposed changes are merged, this will ensure coding standards are maintained in your default branch.  Using [npm scripts](https://docs.npmjs.com/misc/scripts) is the preferred way to run the linter without requiring it to be a global dependency.  Assuming you want to lint all JavaScript files in your project, add the following entry to your `package.json`:

```json
{
  "scripts": {
    "pretest": "eslint src"
  }
}
```

With this `pretest` entry in your `package.json`, ESLint will run on all JavaScript files in the `src` directory of your project using your `.eslintrc` config when tests are run:

    npm test

See the ESLint [CLI guide](https://eslint.org/docs/latest/use/command-line-interface) for additional options when running ESLint.

In addition to running the linter when your tests are run, you should configure your editor to run the linter as well.  See the [ESLint integration page](https://eslint.org/docs/latest/use/integrations#editors) to find details on configuring your editor to warn you of ESLint errors.

See the [examples directory](https://github.com/tschaub/eslint-config-tschaub/tree/main/examples) for more usage examples.

### Profiles

The `eslint-config-tschaub` package includes a number of ESLint configuration profiles for different types of projects.

#### `tschaub` (base config)

The "base" config is suitable for Node or browser-based projects.

Example configuration in `eslint.config.js`:
```js
import config from 'eslint-config-tschaub';

export default [...config];
```

#### `tschaub/react`

The `tschaub/react` config is suitable for projects using [React](https://react.dev/).  This extends the base config to include the React plugin, enable JSX parsing, and run React specific rules.  To use this profile, you'll need to install the `eslint-plugin-react` and `eslint-plugin-react-hooks` packages:

    npm install --save-dev eslint-plugin-react eslint-plugin-react-hooks

Then your minimal configuration in `eslint.config.js` would look like this:
```json
import config from 'eslint-config-tschaub/react';

export default [...config];
```

### Development

To add another configuration profile, add a new config script to the root of the repository directory (e.g. `new-config.js`).  This script should export an ESLint config object and should have an `extends: './index.js' property`.  People using this config will add `extends/new-config` to their own ESLint config.

You should add and example for your new profile and ensure that tests pass with any changes.

    npm test

After adding a new config profile or modifying an existing one, publish a new version of the package.  Adding a new "error" level rule constitutes a major release.  A new profile or non-breaking modification to an existing profile (e.g. a "warning" level rule) can be a minor release.

Publishing a new minor release would look like this:

    # commit and push any changes first
    npm version minor # this bumps the package.json version number and tags
    git push --tags origin main
    npm publish
