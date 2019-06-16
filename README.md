# directory-app

This coding challenge was aimed at creating a CLI for a user to create/move/delete/list a directory structure. While this is not fully finished, you can see the progress and current functionality by following these steps:

## Getting started
Clone the directory
`git clone https://github.com/nickarocho/directory-app.git`

`cd` into the cloned directory.

Install dependencies <br>
`npm install`

In a separate terminal window, invoke a MongoDB instance <br>
`mongod`

In your other terminal window, you can see the base functionality by creating and adding a directory to the DB: <br>
`node directory.js CREATE  <your-filename-here>`

To see the current records you've created, use: <br>
`node directory.js LIST <filename-to-search-for>` <br>
*Note:* This isn't the intended use or output of this function, it was merely a starting point to get to the next step before running out of time.

## To-do
* Finish the app's functionality per the challenge specs
* Smooth out the UX in the CLI to take ONE input (rather than one commmand per file creation/move/delete, etc.) and produce an output with the correct directory structure.
