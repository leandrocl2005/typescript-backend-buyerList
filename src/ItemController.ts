import {Request, Response} from 'express';
import { v4 as uuidv4 } from 'uuid';

const data = [
    {
        id: uuidv4(),
        name: "banana",
        units: 6
    },
    {
        id: uuidv4(),   
        "name": "ovos",
        "units": 12
    }
]

const Items = {
    get(request: Request, response: Response) {
        return response.status(200).json(data)
    },
    post(request: Request, response: Response) {
        const {name, units} = request.body
        const newItem = {id: uuidv4(), name, units}
        data.push(newItem)
        return response.status(201).json(newItem)
    },
    put(request: Request, response: Response) {
        const {id} = request.params;
        const {name, units} = request.body;
        const itemIndex = data.findIndex(item => item.id === id);
        const newItem = {
            id,
            name,
            units
        };
        data[itemIndex] = newItem;
        return response.status(201).json(newItem);
    },
    delete(request: Request, response: Response) {
        const {id} = request.params;
        let itemIndex = data.findIndex(item => item.id === id);
        data.splice(itemIndex, 1);
        return response.status(204).send();
    }
}

export default Items;