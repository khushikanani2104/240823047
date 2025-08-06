exports.index=(req, res) => {
  res.send("Hello World!");
}

exports.show=(req, res) => {
  res.send(`show data for id: ${req.params.id} \n`);
}

exports.store=(req, res) => {
  res.send(`record received:${req.body.name},${req.body.city} \n`);
}

exports.update=(req, res)=>{
    res.send(`record updated for id: ${req.params.id} ,Name: ${req.body.name}\n`);
}

exports.delete=(req, res)=>{
    res.send(`record deleted for id: ${req.params.id} \n`);
}