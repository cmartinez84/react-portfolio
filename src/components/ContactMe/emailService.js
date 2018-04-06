export const sendEmail = function(messageData, endpointURL, cb){
  fetch(endpointURL, {
      method: 'POST',
      body: JSON.stringify(messageData),
      headers: { "Content-Type": "application/json" }})
      .then((res)=> res.json())
      .then((data)=>{
        cb(data);
      });//end fetch/then
}
