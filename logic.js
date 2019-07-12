const mongoose = require('mongoose');
const assert = require('assert');
const dotenv =  require('dotenv');
const {getinfo} =  require('./getcard');
dotenv.config();

const secrete = process.env.secretekey;
mongoose.Promise = global.Promise;

const cardSchema = mongoose.Schema({
    card_number: { type: String },
    cvv: { type: String },
    expiry_month: { type: String },
    expiry_year: { type: String },
  });
  
  const validate = mongoose.model('Card', cardSchema);




module.exports = {
    sendcard : cardDetails => {
    	let carddetail = cardDetails;
        async function fullinfo(){
        	try{
        	let info = await getinfo(secrete,carddetail);
        	console.log(info);
        	}catch(e){
        		console.log(e)
        	}
        }
        fullinfo();
        
    }
}