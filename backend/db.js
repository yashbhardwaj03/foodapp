const mongoose = require('mongoose');
//const mongoURI= 'mongodb+srv://testing:mern123@yashbhardwaj.hbrwdly.mongodb.net/?retryWrites=true&w=majority'
const mongoURI = 'mongodb://testing:mern123@ac-zwmikpi-shard-00-00.hbrwdly.mongodb.net:27017,ac-zwmikpi-shard-00-01.hbrwdly.mongodb.net:27017,ac-zwmikpi-shard-00-02.hbrwdly.mongodb.net:27017/finoapp?ssl=true&replicaSet=atlas-iyliwn-shard-0&authSource=admin&retryWrites=true&w=majority'
const mongoDB = async () => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true },async(err, result)=>{
    if (err) console.log("---", err)
    else {
        console.log("connected");
        const fetched_data = await mongoose.connection.db.collection("food_items");
        fetched_data.find({}).toArray(async function(err,data){
            const foodCategory= await mongoose.connection.db.collection("foodCategory");
            foodCategory.find({}).toArray(function (err, catData){
                if (err) console.log(err);
            else{
                global.food_items= data;
                global.foodCategory= catData;
            }
            })
            
            // if (err) console.log(err);
            // else{
            //     global.food_items= data;
            // }
        })
    }
    });
        
}
module.exports = mongoDB;
