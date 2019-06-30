const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://BKStudio:BKStudio21032018@cluster0-avmr6.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });


function user_check(user, password){
  console.log("Все ок");
  client.connect(err => {

    const collection = client.db("BKStudio").collection("user");

          collection.findOne({ name: user , pass: password}, function (err, doc){
              console.log('user: '+user);
              console.log('password: '+password); // this will print on console , working fine
              if(err)
                     console.log(false);
              if (doc === null) {
                  console.log(false); // this will return undefined to the controller

              } else {
                  console.log(true);  // this will return undefined to the controller
              }
      });

      client.close();
    });

    }

document.getElementById("login_btn").onclick = function(){

      var user = document.getElementById("user").value;
      var password = document.getElementById("password").value;

      user_check(user, password);

}
