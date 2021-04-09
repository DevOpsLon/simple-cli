#!/usr/bin/env node
import { command, describe } from "yargs";


command({
    command: "a",
    describe: "description of a",
    handler: function(){
        console.log("a")
    },
    }
)