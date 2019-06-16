const mongoose = require('mongoose');
const assert = require('assert');
mongoose.Promise = global.Promise;

// MongoDB instance
const db = mongoose.connect('mongodb://localhost:27017/directory-app', { useNewUrlParser: true });

function toLower(record) {
    return record.toLowerCase();
}

// Schema
const directorySchema = mongoose.Schema({
    dirname: { type: String, set: toLower },
});

const Directory = mongoose.model('Directory', directorySchema);

const addDirectory = (dir) => {
    // const map = {
    //     create : 'CREATE',
    //     list : 'LIST',
    //     move : 'MOVE',
    //     delete : 'DELETE'
    // };

    const input = dir.toString().split(' ');
    let commands = [];
    for (var i = 0; i < input.length; i++) {
        if (input[i] === map.equals['CREATE', 'LIST', 'MOVE', 'DELETE']) {
            // split the command into its own variable
            // push it into the command array
        }
    }
    Directory.create(dir, (err) => {
        assert.equal(null, err);
        console.info(dir);
        mongoose.connection.close();
    });
};

const getDirectory = (name) => {
    const search = new RegExp(name, 'i');
    Directory.find({$or: [{ dirname: search }]})
    .exec((err, directory) => {
        assert.equal(null, err);
        console.info(directory);
        mongoose.connection.close();
    });
};

// Export all methods
module.exports = { addDirectory, getDirectory };
