// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Heading,
  Image,
  Layout,
  Link,
  List,
  ListItem,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import Counter from "./counter.jsx";

import images from '../images';

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("./custom.css");

const slideTransition = ["slide"];

preloader(images);

const theme = createTheme({
  primary: "#09b5c4"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={slideTransition} transitionDuration={500} progress="bar">
          <Slide transition={slideTransition} bgColor="white">
            <Heading size={1} textColor="primary">
              SurviveJS Training
            </Heading>
            <Image src={images.stepZero} margin="0px auto 40px" height="524px"/>
          </Slide>

          <Slide transition={slideTransition} bgColor="black" notes="">
            <Image src={images.kanban} margin="0px auto 40px" height="279px"/>
          </Slide>

          <Slide transition={slideTransition} bgColor="white">
            <Heading size={2} textColor="primary">
              Babel and Webpack 101
            </Heading>
            <Image src={images.stepOne} margin="0px auto 40px" height="524px"/>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Link href="https://babeljs.io/">
              <Image src={images.babel} />
            </Link>
          </Slide>

          <Slide transition={slideTransition} bgImage={images.babelTower} bgDarken={0.85}>
            <Heading size={1} textColor="primary">
              Babel
            </Heading>
            <List textColor="primary">
              <Appear><ListItem>ES2015+ and custom features</ListItem></Appear>
              <Appear><ListItem>Needs polyfills for some</ListItem></Appear>
              <Appear><ListItem>Presets and plugins</ListItem></Appear>
              <Appear><ListItem>Be careful with stage 0 features!</ListItem></Appear>
              <Appear><ListItem>Prefer spelling out the custom features you use</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <iframe
              width="100%"
              height="600px"
              src="https://babeljs.io/repl/"/>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Link href="https://webpack.github.io/">
              <Image src={images.webpack} height="400px" />
            </Link>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              Webpack
            </Heading>
            <List>
              <Appear><ListItem>Application as a dependency graph</ListItem></Appear>
              <Appear><ListItem>Configuration driven</ListItem></Appear>
              <Appear><ListItem>Powerful but hard to master</ListItem></Appear>
              <Appear><ListItem>Focus on bundling</ListItem></Appear>
              <Appear><ListItem><Link href="https://www.npmjs.com/package/webpack-merge">webpack-merge</Link></ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={2}>
              Application Graph
            </Heading>
            <Link href="https://chrisbateman.github.io/webpack-visualizer/">
              <Image src={images.webpackGraph} margin="40px auto" height="324px" />
            </Link>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Link href="http://www.webpackbin.com/">
              <Heading size={1} textColor="tertiary">
                <Link href="http://www.webpackbin.com/">WebpackBin</Link>
              </Heading>
            </Link>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              Exercises
            </Heading>
            <List>
              <Appear><ListItem>Set up a <Link href="http://www.webpackbin.com/">bin</Link> based on the React boilerplate below the <i>Boilerplates</i> menu</ListItem></Appear>
              <Appear><ListItem>Familiarize yourself with the UI and develop your first "hello world!" application with React</ListItem></Appear>
              <Appear><ListItem>Save the result and link to it at <Link href="https://gitter.im/survivejs/training">gitter</Link> (we'll need this later)</ListItem></Appear>
              <Appear><ListItem>*Examine generated code through Babel repl. Can you see what happens to JSX?</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition} bgColor="white">
            <Heading size={2} textColor="primary">
              React 101 - Basics
            </Heading>
            <Image src={images.stepTwo} margin="0px auto 40px" height="524px"/>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Link href="https://facebook.github.io/react/">
              <Image src={images.react} />
            </Link>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              React Philosophy
            </Heading>
            <List>
              <Appear><ListItem>Model your application as a component hierarchy</ListItem></Appear>
              <Appear><ListItem>Each component can have <i>props</i> and <i>state</i></ListItem></Appear>
              <Appear><ListItem>Escape hatches through <i>lifecycle methods</i> and <i>refs</i></ListItem></Appear>
              <Appear><ListItem>React forces you to think about <i>state</i> (good thing)</ListItem></Appear>
              <Appear><ListItem>Implements Virtual DOM</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={2}>
              Virtual DOM
            </Heading>
            <Image src={images.vdom} margin="40px auto" height="324px" />
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              React Targets
            </Heading>
            <List>
              <Appear><ListItem>Web (universal!) - <Link href="https://www.npmjs.com/package/react-dom">react-dom</Link></ListItem></Appear>
              <Appear><ListItem>Mobile - <Link href="https://facebook.github.io/react-native/">React Native</Link></ListItem></Appear>
              <Appear><ListItem>Terminal - <Link href="https://github.com/Yomguithereal/react-blessed">react-blessed</Link></ListItem></Appear>
              <Appear><ListItem>3D graphics - <Link href="https://projectseptemberinc.gitbooks.io/gl-react/content/">gl-react</Link></ListItem></Appear>
              <Appear><ListItem>Canvas graphics - <Link href="https://github.com/Flipboard/react-canvas">react-canvas</Link></ListItem></Appear>
              <Appear><ListItem>PDF generators - <Link href="https://github.com/bebraw/generate-invoice">demo</Link></ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={1}>
              Cat Counter
            </Heading>
            <Counter />
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <CodePane
              lang="jsx"
              source={require("raw!../loaders/content.js!./counter.jsx")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              Exercises
            </Heading>
            <List>
              <Appear><ListItem>Add state to your application constructor (<i>this.state = ...</i>). Remember to <i>bind</i>.</ListItem></Appear>
              <Appear><ListItem>Add a button and alter the count <i>onClick</i> through <i>setState</i>. Why is <i>setState</i> needed?</ListItem></Appear>
              <Appear><ListItem>*Add a custom button for resetting the state and attach logic</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition} bgColor="white">
            <Heading size={2} textColor="primary">
              React 202 - Components
            </Heading>
            <Image src={images.stepThree} margin="0px auto 40px" height="524px"/>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={3}>
              Stateless Functions
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../examples/component_01.jsx")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={3}>
              Stateless Functions with a Shorthand
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../examples/component_02.jsx")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={3}>
              Stateless Functions Destructured
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../examples/component_03.jsx")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
          <Heading size={3}>
            Stateless Functions Destructured and Formatted for Readability
          </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../examples/component_04.jsx")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={3}>
              React.createClass (old style)
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../examples/component_05.jsx")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={3}>
              ES6 Class (new style)
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../examples/component_06.jsx")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={3}>
              ES6 Class with State
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../examples/component_07.jsx")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={3}>
              ES6 Class Manual Binding
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../examples/component_08.jsx")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={3}>
              ES6 Class with a Ref
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../examples/component_09.jsx")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={2}>
              Lifecycle Methods
            </Heading>
            <Image src={images.lifecycle} margin="40px auto" height="324px" />
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              Exercises
            </Heading>
            <List>
              <Appear><ListItem>Extract a <b>Notes</b> component from App</ListItem></Appear>
              <Appear><ListItem>Implement a callback (<i>onClick</i>) to capture when a <b>Note</b> is clicked</ListItem></Appear>
              <Appear><ListItem>Wire the callback to <b>App</b> (hint: add <i>props</i> to <b>Notes</b> and <b>Note</b>)</ListItem></Appear>
              <Appear><ListItem>Pass <b>Note</b> id to the callback so we can tell them apart (hint: <i>bind</i> at <b>Notes</b>)</ListItem></Appear>
              <Appear><ListItem>*Implement a <i>lifecycle method</i> and see when it gets triggered</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition} bgColor="white">
            <Heading size={2} textColor="primary">
              React 303 - Typing
            </Heading>
            <Image src={images.stepFour} margin="0px auto 40px" height="524px"/>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              propTypes and defaultProps
            </Heading>
            <List>
              <Appear><ListItem>Flexibility vs. robustness</ListItem></Appear>
              <Appear><ListItem>Document expectations</ListItem></Appear>
              <Appear><ListItem>Catch issues during development</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={3}>
              propTypes and defaultProps
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../examples/proptypes_01.jsx")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={3}>
              propTypes and defaultProps through static
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../examples/proptypes_02.jsx")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              <Link href="http://flowtype.org/">Flow</Link>
            </Heading>
            <List>
              <Appear><ListItem>Gradual typing through static analysis</ListItem></Appear>
              <Appear><ListItem>Might replace propTypes over longer term</ListItem></Appear>
              <Appear><ListItem>Runtime checks with <Link href="https://www.npmjs.com/package/babel-plugin-typecheck">babel-plugin-typecheck</Link></ListItem></Appear>
              <Appear><ListItem>No support for function style components yet <Link href="https://github.com/facebook/flow/issues/1081">#1081</Link></ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={3}>
              ES6 Class with Flow types
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../examples/flow_01.jsx")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              TypeScript
            </Heading>
            <List>
              <Appear><ListItem>Established alternative</ListItem></Appear>
              <Appear><ListItem>Strong IDE integration</ListItem></Appear>
              <Appear><ListItem>Hard to introduce piece-meal (all in)</ListItem></Appear>
              <Appear><ListItem>Stronger ecosystem (more users, type definitions)</ListItem></Appear>
              <Appear><ListItem>See <Link href="https://www.reddit.com/r/javascript/comments/39cere/typescript_vs_flow_results_from_our_investigation/">Reddit</Link> for further comparison</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              Exercises
            </Heading>
            <List>
              <Appear><ListItem>Annotate <b>Notes</b> with <i>propTypes</i></ListItem></Appear>
              <Appear><ListItem>Look up <i>React.PropTypes.shape</i> and see how it works</ListItem></Appear>
              <Appear><ListItem>*Test <Link href="http://tryflow.org/">tryflow.org</Link></ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition} bgColor="white">
            <Heading size={2} textColor="primary">
              React 404 - State Management
            </Heading>
            <Image src={images.stepFive} margin="0px auto 40px" height="524px"/>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              The Problem of State
            </Heading>
            <List>
              <Appear><ListItem>Application state, UI state</ListItem></Appear>
              <Appear><ListItem>Where to push it?</ListItem></Appear>
              <Appear><ListItem>How to manipulate it?</ListItem></Appear>
              <Appear><ListItem>How to propagate changes to the UI?</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              Solutions
            </Heading>
            <List>
              <Appear><ListItem>Keep it all in React components (<b>App</b>?)</ListItem></Appear>
              <Appear><ListItem><Link href="https://facebook.github.io/flux/">Flux</Link> - Actions, stores, dispatcher</ListItem></Appear>
              <Appear><ListItem><Link href="http://redux.js.org/">Redux</Link> - Flux taken to bare minimum</ListItem></Appear>
              <Appear><ListItem><Link href="https://mobxjs.github.io/mobx/">MobX</Link> - Observables, think spreadsheets</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Image src={images.flux} margin="40px auto" height="324px" />
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={3}>
              Minimal <Link href="http://redux.js.org/">Redux</Link>
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../examples/redux_01.jsx")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={3}>
              <Link href="http://redux.js.org/">Redux</Link> with Store
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../examples/redux_02.jsx")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={3}>
              Minimal <Link href="https://mobxjs.github.io/mobx/">MobX</Link>
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../examples/mobx_01.jsx")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={2}>
              Connecting Data
            </Heading>
            <Image src={images.vdom} margin="40px auto" height="324px" />
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={3}>
              Connecting Using <Link href="https://www.npmjs.com/package/react-redux">react-redux</Link> 1/3
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../examples/redux_03.jsx")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={3}>
              Connecting Using <Link href="https://www.npmjs.com/package/react-redux">react-redux</Link> 2/3
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../examples/redux_04.jsx")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={3}>
              Connecting Using <Link href="https://www.npmjs.com/package/react-redux">react-redux</Link> 3/3
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../examples/redux_05.jsx")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={3}>
              Connecting Using <Link href="https://www.npmjs.com/package/mobx-react">mobx-react</Link>
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../examples/mobx_02.jsx")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              Exercises
            </Heading>
            <List>
              <Appear><ListItem>Push application <i>state</i> (notes) to Redux</ListItem></Appear>
              <Appear><ListItem>*Add another data concept (<b>Lane</b>)</ListItem></Appear>
              <Appear><ListItem>**Implement a MobX variant</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition} bgColor="white">
            <Heading size={2} textColor="primary">
              React 505 - Async
            </Heading>
            <Image src={images.stepSix} margin="0px auto 40px" height="524px"/>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={3}>
              Async with <Link href="https://www.npmjs.com/package/redux-thunk">redux-thunk</Link> 1/2
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../examples/redux_async_01.jsx")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={3}>
              Async with <Link href="https://www.npmjs.com/package/redux-thunk">redux-thunk</Link> 2/2
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../examples/redux_async_02.jsx")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={2}>
              <Link href="https://www.npmjs.com/package/redux-saga">redux-saga</Link>
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={3}>
              Async with <Link href="https://www.npmjs.com/package/mobx">MobX</Link>
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../examples/mobx_async_01.jsx")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              Exercises
            </Heading>
            <List>
              <Appear><ListItem>Set Up a Mock Response at <Link href="http://www.mocky.io/">mocky.io</Link>. <b>Important!</b> Set <i>Access-Control-Allow-Origin</i> to <i>http://sandbox.webpackbin.com</i>.</ListItem></Appear>
              <Appear><ListItem>Configure <Link href="https://www.npmjs.com/package/redux-thunk">redux-thunk</Link> and perform a query against the resource</ListItem></Appear>
              <Appear><ListItem>*Implement a <Link href="https://www.npmjs.com/package/mobx">MobX</Link> variant</ListItem></Appear>
              <Appear><ListItem>**Implement a <Link href="https://www.npmjs.com/package/redux-saga">redux-saga</Link> variant</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition} bgColor="white">
            <Heading size={2} textColor="primary">
              React 606 - Routing
            </Heading>
            <Image src={images.stepSeven} margin="0px auto 40px" height="524px"/>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              Alternatives
            </Heading>
            <List>
              <Appear><ListItem><Link href="https://www.npmjs.com/package/react-router">react-router</Link> - De facto standard</ListItem></Appear>
              <Appear><ListItem><Link href="https://www.npmjs.com/package/react-router-redux">react-router-redux</Link> - Access to react-router data through a Redux store</ListItem></Appear>
              <Appear><ListItem><Link href="https://www.npmjs.com/package/react-router-component">react-router-component</Link></ListItem></Appear>
              <Appear><ListItem><Link href="https://www.npmjs.com/package/react-router5">react-router5</Link></ListItem></Appear>
              <Appear><ListItem><Link href="https://www.npmjs.com/package/redux-router5">redux-router5</Link> - Redux bindings for react-router5</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition} bgColor="primary">
            <Heading size={3}>
              Routing with react-router
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../examples/react_router_01.jsx")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              Exercises
            </Heading>
            <List>
              <Appear><ListItem>Set up <Link to="https://github.com/survivejs/react-boilerplate">react-boilerplate</Link></ListItem></Appear>
              <Appear><ListItem>Include react-router to the boilerplate project through <b>npm i react-router -D</b></ListItem></Appear>
              <Appear><ListItem>Add initial routes (<i>/kanban</i> and <i>/about</i>)</ListItem></Appear>
              <Appear><ListItem>*Add a nested <i>/kanban</i> route that accepts a <i>kanbanId</i> parameter</ListItem></Appear>
              <Appear><ListItem>**Show the passed id using <i>this.props.params</i> through the UI</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition} bgColor="white">
            <Heading size={2} textColor="primary">
              React 707 - Performance
            </Heading>
            <Image src={images.stepEight} margin="0px auto 40px" height="524px"/>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              Alternatives
            </Heading>
            <List>
              <Appear><ListItem></ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              Exercises
            </Heading>
            <List>
              <Appear><ListItem></ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition} bgColor="white">
            <Heading size={2} textColor="primary">
              React 808 - Testing
            </Heading>
            <Image src={images.stepNine} margin="0px auto 40px" height="524px"/>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              Alternatives
            </Heading>
            <List>
              <Appear><ListItem></ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              Exercises
            </Heading>
            <List>
              <Appear><ListItem></ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition} bgColor="white">
            <Heading size={2} textColor="primary">
              React 909 - Structuring Projects
            </Heading>
            <Image src={images.stepTen} margin="0px auto 40px" height="524px"/>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              Alternatives
            </Heading>
            <List>
              <Appear><ListItem></ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition}>
            <Heading size={1}>
              Exercises
            </Heading>
            <List>
              <Appear><ListItem></ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={slideTransition} bgImage={images.troll} bgDarken={0.85}>
            <Heading caps fit size={1} textColor="tertiary">
              Questions?
            </Heading>
          </Slide>

          <Slide transition={slideTransition} bgColor="tertiary">
            <Heading size={1} caps fit textColor="primary">
              Made in Finland by
            </Heading>
            <Link href="https://twitter.com/bebraw">
              <Heading caps fit size={2} textColor="secondary">
                Juho Vepsäläinen
              </Heading>
            </Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
