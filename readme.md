# Common Shared Library

This is shared library for different microservices in my ticketing project.
The library will be published as a public npm package. This is an easy way to share a common code base.

This library is written in TypeScript but published as JavaScript to increase the combatibility with other services.

## Publish to NPM

To increase the version number (path number to be more specific, see semantic versioning for more info), run

```
  npm version patch
```

To build the library run:

```
  npm run build
```

To publish make sure all changed are commited in git then run (assuming that you are logged in):

```
  npm publish
```
