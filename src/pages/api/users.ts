import { NextApiRequest, NextApiResponse } from "next";


export default (request: NextApiRequest, response: NextApiResponse) => {

    const user = [
        { id: 1, name: 'Andre'},
        { id: 2, name: 'Priscila'},
        { id: 3, name: 'Beatriz'},
    ];

    return response.json(user);
    
}