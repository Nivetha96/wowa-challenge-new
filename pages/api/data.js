// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import path from 'path';
import { promises as fs } from 'fs';


export default async function handler(req, res) {
  const fileContents = await fs.readFile( 'C://Users//Nivetha//Documents//GitHub//wowa-challenge-new-local//data//rates.json', 'utf8');
  //Return the content of the data file in json format
  res.json({
    message: JSON.parse(JSON.stringify(fileContents)),
    success: true,
  });
}