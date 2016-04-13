// This software is free software. See AUTHORS and LICENSE for more
// information on the copying conditions.

"use strict";

const fs = require("fs");
const smtp_server = require("smtp-server").SMTPServer;
const uuid = require("uuid");

new smtp_server({
    onConnect: (session, callback) => {
        callback();
    },
    onAuth: (auth, session, callback) => {
        callback(null, {user: 42});
    },
    onMailFrom: (address, session, callback) => {
        callback();
    },
    onRcptTo: (address, session, callback) => {
        callback();
    },
    onData: (source, session, callback) => {
        const file_name = uuid() + ".eml";
        const dest = fs.createWriteStream(file_name);
        dest.on("error", function (error) {
            throw error; // Tear down the process if we cannot write file
        });
        source.pipe(dest);
        source.on("end", callback);
    },
}).listen(9000);
