import fs = require('fs');
import { Thing } from '../models/things';
const response = require('./response');
const env = require('../../environment/env');
const errors = require('../../environment/errors')

exports.getThings = (req: any, res: any, next: any) => {
    fs.readFile(env.DATA_LOCATION, (error: any, data: any) => {
        if(error) {
            const err = errors.INTERNAL_ERROR;
            response.sendResponse(res, err.status, err.message, null)
        } else {
            const message = 'Things returned successfully';
            response.sendResponse(res, 200, message, JSON.parse(data));
        }
    });  
}

exports.getIndividualThing = (req: any, res: any, next: any) => {
    const id: string = req.params.id;
    const data = getData();
    let thingFound = false;
    for(let i = 0; i < data.length; i++) {
        if(data[i].id === id) {
            response.sendResponse(res, 200, 'Thing returned successfully', [data[i]]);
            thingFound = true;
            break;
        }
    }
    if(!thingFound) {
        const err = errors.NO_THING_FOUND;
        response.sendResponse(res, err.status, err.message, null)
    }
}

exports.createThing = (req: any, res: any, next: any) => {
    const data = getData();
    const newThing: Thing = {
        id: req.body.id,
        dateCreated: new Date().toISOString(),
        name: req.body.name,
        value: req.body.value
    };
    if(!newThing) {
        const err = errors.CREATE_ERROR;
        response.sendResponse(res, err.status, err.message, null);
    } else {
        data.push(newThing);
        fs.writeFileSync(env.DATA_LOCATION, JSON.stringify(data));
        exports.getThings(req, res, next);
    }

}

function getData() {
    const rawData = fs.readFileSync(env.DATA_LOCATION, 'utf-8');
    return JSON.parse(rawData);
}