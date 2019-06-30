
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://BKStudio:BKStudio21032018@cluster0-avmr6.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });


document.getElementById("reg_btn").onclick = function(){

    console.log('Кнопка натиснена успішно!');

      var usr_name = document.getElementById("usr_name").value;
      var usr_pass = document.getElementById("usr_pass").value;

console.log(usr_name);
console.log(usr_pass);



client.connect(err => {

  const collection = client.db("BKStudio").collection("user");

    var user = {
      name: usr_name,
      pass: usr_pass
     };
        collection.insertOne(user, function(err, result){

            if(err){
                return console.log(err);
            }
          });


  client.close();
});
window.close();
window.open('../../login.html');

}
