/**
 * Configuration for Stimulus documentation files
 */
export interface DocFile {
  folder: string;
  file: string;
  name: string;
  description: string;
}

/**
 * Array of all Stimulus documentation files to be exposed as MCP tools
 */
export const docFiles: DocFile[] = [
  {
    folder: 'handbook',
    file: '00_the_origin_of_stimulus.md',
    name: 'handbook-origin',
    description: 'Learn why Stimulus was created by DHH - covers the philosophy of modest JavaScript frameworks, server-rendered HTML, and how Stimulus differs from mainstream JavaScript frameworks like React'
  },
  {
    folder: 'handbook',
    file: '01_introduction.md',
    name: 'handbook-introduction',
    description: 'Introduction to Stimulus core concepts: controllers, actions, targets, and values. Explains how Stimulus enhances server-rendered HTML and separates content from behavior'
  },
  {
    folder: 'handbook',
    file: '02_hello_stimulus.md',
    name: 'handbook-hello',
    description: 'Step-by-step tutorial for building your first Stimulus controller - covers creating a greeting controller with targets, actions, and DOM event handling'
  },
  {
    folder: 'handbook',
    file: '03_building_something_real.md',
    name: 'handbook-building',
    description: 'Build a real-world clipboard controller example - demonstrates practical Stimulus patterns, CSS classes, and connecting JavaScript to HTML elements'
  },
  {
    folder: 'handbook',
    file: '04_designing_for_resilience.md',
    name: 'handbook-resilience',
    description: 'Best practices for building robust Stimulus applications - covers progressive enhancement, graceful degradation, and handling edge cases'
  },
  {
    folder: 'handbook',
    file: '05_managing_state.md',
    name: 'handbook-state',
    description: 'Learn how Stimulus manages state through values and data attributes - covers reactive programming patterns and keeping state in sync with the DOM'
  },
  {
    folder: 'handbook',
    file: '06_working_with_external_resources.md',
    name: 'handbook-external',
    description: 'Techniques for integrating external APIs and resources - covers AJAX requests, working with third-party libraries, and asynchronous operations'
  },
  {
    folder: 'handbook',
    file: '07_installing_stimulus.md',
    name: 'handbook-installing',
    description: 'Complete guide to installing Stimulus in your application - covers Webpack, import maps, Rails integration, and manual setup options'
  },

  // Reference files
  {
    folder: 'reference', file: 'actions.md',
    name: 'reference-actions',
    description: 'Complete reference for Stimulus actions - covers action descriptors, event handling, keyboard filters, global events, action parameters, and event options like :prevent and :stop'
  },
  {
    folder: 'reference', file: 'controllers.md',
    name: 'reference-controllers',
    description: 'Controller API reference - covers controller lifecycle, scopes, nested controllers, cross-controller communication with events, and registration patterns'
  },
  {
    folder: 'reference', file: 'css_classes.md',
    name: 'reference-css-classes',
    description: 'CSS classes API reference - learn how to dynamically manage CSS classes in Stimulus controllers for styling and visual state management'
  },
  {
    folder: 'reference', file: 'lifecycle_callbacks.md',
    name: 'reference-lifecycle',
    description: 'Controller lifecycle callbacks reference - covers connect(), disconnect(), and target connection/disconnection callbacks for managing controller state'
  },
  {
    folder: 'reference', file: 'outlets.md',
    name: 'reference-outlets',
    description: 'Outlets API reference - learn how to connect controllers to each other for component communication and coordination between different parts of your application'
  },
  {
    folder: 'reference', file: 'targets.md',
    name: 'reference-targets',
    description: 'Targets API reference - covers target definitions, properties (singular/plural/existential), shared targets, optional targets, and target lifecycle callbacks'
  },
  {
    folder: 'reference', file: 'using_typescript.md',
    name: 'reference-typescript',
    description: 'TypeScript integration guide - covers type definitions, strongly typed targets/values/outlets, and best practices for using Stimulus with TypeScript'
  },
  {
    folder: 'reference', file: 'values.md',
    name: 'reference-values',
    description: 'Values API reference - covers value definitions, type coercion, change callbacks, and using values for reactive data binding between HTML and JavaScript'
  }
];
