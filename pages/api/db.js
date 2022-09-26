import middleware from "../../lib/mongodb";
import nextConnect from 'next-connect';
import {ObjectID} from 'mongodb';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    const { termlength ,type } = req.query;
    const dataModel = { "_id": new ObjectID(), "id": 0, "source": "BankName", "year": 0, 
                        "down_payment_level": 0, "first_mortgage": true, "long_amortization": false,
                        "rate_type": "fixed", "rate": 0, "posted": true, "refinance_rate": null,
                        "type": "fixed" }
    try{
      let ratesdb = {};
      if (termlength & type){
        ratesdb = await req.db.collection('wowa-sample')
        .find({year:{termlength}},{type:{type}})
        .project({source:1,rate:1})
        .sort({rate:1})
        .limit(5)
        .toArray();
      }
      else{
        ratesdb = await req.db.collection('wowa-sample')
        .find({year:1},{type:'fixed'})
        .project({source:1,rate:1})
        .sort({rate:1})
        .limit(5)
        .toArray();  
      }
      if(ratesdb == null){
        ratesdb = dataModel
      }
      res.json({
        message: JSON.parse(JSON.stringify(ratesdb)),
        success: true,
      });
    }
    catch (error) {
      // return the error
      return res.json({
          message: new Error(error).message,
          success: false,
      });
    }
  });

export default handler;
