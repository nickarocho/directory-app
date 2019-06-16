const program = require('commander');

const { addDirectory, getDirectory } = require('./logic');

program
  .command('addDirectory <dirname>')
  .alias('CREATE')
  .description('Add a directory')
  .action((dirname) => {
    addDirectory({dirname});
  });

program
  .command('getDirectory <name>')
  .alias('LIST')
  .description('Get directory')
  .action(name => getDirectory(name));

program.parse(process.argv);
