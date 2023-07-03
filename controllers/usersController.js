const User = require("../models/Users");


exports.createUser = async (req, res) => {
    try {

        let user;

        user = new User(req.body);

        await user.save();
        res.send(user)

    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.getUsers = async (req, res) => {
    try {

        const users = await User.find();

        res.json(users);

    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.updateUser = async (req, res) => {
    try {

        const { 
            email, 
            phonenumber, 
            firstname, 
            lastname, 
            documenttype, 
            documentnumber,
            birthdate,
            expeditiondate
         } = req.body;

         let user = await User.findById(req.params.id);

         if(!user){
            res.status(404).json({msg: 'User not found'})
         }

         user.email = email;
         user.phonenumber = phonenumber;
         user.firstname = firstname;
         user.lastname = lastname;
         user.documenttype = documenttype;
         user.documentnumber = documentnumber;
         user.birthdate = birthdate;
         user.expeditiondate = expeditiondate;


         user = await User.findOneAndUpdate({ _id: req.params.id}, user, {new: true})
        res.json(user)

    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}