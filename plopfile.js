module.exports = plop => {
  plop.setGenerator('page', {
    description: 'Create a container',
    // User input prompts provided as arguments to the template
    prompts: [
      {
        // Raw text input
        type: 'input',
        // Variable name for this input
        name: 'name',
        // Prompt to display on command line
        message: 'What is your page name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/pages/{{pascalCase name}}/{{pascalCase name}}.Container.js',
        templateFile: 'plop-templates/Container.js.hbs'
      },
      {
        type: 'add',
        path: 'src/pages/{{pascalCase name}}/{{pascalCase name}}.style.scss',
        templateFile: 'plop-templates/style.scss.hbs'
      },
      {
        type: 'add',
        path: 'src/pages/{{pascalCase name}}/localization/{{pascalCase name}}.localization.js',
        templateFile: 'plop-templates/localize.js.hbs'
      }
    ]
  });
  plop.setGenerator('component', {
    description: 'Create a reusable component',
    // User input prompts provided as arguments to the template
    prompts: [
      {
        // Raw text input
        type: 'input',
        // Variable name for this input
        name: 'name',
        // Prompt to display on command line
        message: 'What is your component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/sharedComponents/{{pascalCase name}}/{{pascalCase name}}.js',
        templateFile: 'plop-templates/Component.js.hbs'
      },
      {
        type: 'add',
        path: 'src/sharedComponents/{{pascalCase name}}/{{pascalCase name}}.style.scss',
        templateFile: 'plop-templates/style.scss.hbs'
      }
    ]
  });
};
