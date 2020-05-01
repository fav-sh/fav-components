## Fav Components

### Motivation

Fav.sh has up to this point used Material UI for it's frontend. This has several disadvantages namely larger bundle sizes and slower load time and Time-to-Interaction. We attempted to optimize imports and improve tree shaking to mitigate this however it's still a big enough issue that the only solution going forward is to create our own UI elements to suit our needs.


### Setup

This project is bootstrapped with Storybook. Components are organized in the following format:

```
/stories
  /component-group
    /component
    /component.stories

```

Some supplemental components like Buttons will not have their own stories as examples can be found elsewhere.

To start make sure that you are running a NodeJS environment with the latest NPM and Yarn. To install dependencies simply run `yarn`. To start the storybook run `yarn start` and then go to [localhost:3000](http://localhost:3000) in your browser



## Packing Components

WIP

## Publishing to NPM

WIP