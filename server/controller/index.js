import mongoose from "mongoose";
export const fetchTables = async(req,res) => {
  try {

    const collections = await mongoose.connection.db.listCollections().toArray();
    const result = [];
    const length = collections.length
    for(var i=0;i<length;i++){
      result.push(collections[i].name);
    }
    console.log("Fetched collections: "+result.length);
    return res.status(200).json(result);

  } catch (error) {
    console.log("[fetchAllTables]: "+error);
    return res.status(500).json({message:"Something went wrong unable to fetch collections"});
  }
}

export const fetchTableContent = async(req,res) => {
  const tableName = req.query.tableName;
  try {
    console.log(tableName);
    var table = mongoose.connection.db.collection(tableName);

    // console.log(table);
    if(!table || table === null || table=== undefined){
      console.log(`Table with ${tableName} does not exist`);
      return res.status(404).json({message:`Table with ${tableName} does not exist`});
    }
    
    const result = await table.find({}).toArray();
    // const safeResults = result.map((item)=>{
    //   const {password , ...rest} = item;
    //   return rest;
    // })
    console.log(`Data fetched for ${tableName} : ${result.length}`);
    return res.status(200).json(result);
  } catch (error) {
    console.log("[fetchTableContent] :"+error);
    return res.status(500).json({message:"Something went wrong! Unable to fetch content of this table"})
  }
}