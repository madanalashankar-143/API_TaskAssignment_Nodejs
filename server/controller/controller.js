var Userdb = require('../model/model');

// Create and save new User

exports.create = (req, res) => {

    //Validate the request.
    if(!req.body) {
        res.status(400).send( {message: "Content cannot be empty."} );
        return;
    }

    //new User
    const user = new Userdb( {
        name: req.body.name,
    
        mobile: req.body.mobile,
    
        email: req.body.email,
    
        address: {
            street: req.body.street,
            locality: req.body.locality,
            city: req.body.city,
            state: req.body.state,
            pincode: req.body.pincode,
            coordinateType: req.body.coordinateType,
            coordinates: req.body.coordinates
            
        }
    } )

    //save Userin the database.
    user.save(user).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send( {
            message: err.message || "Some error is occurred while creating a user."
        });
    });

}

// retrive and return all users/ retrive and return a single User.
exports.find = (req, res) => {
    Userdb.find().then(user => {
        res.send(user)
    }).catch(err => {
        res.status(500).send( {
            message: err.message || "Error Occuring while retriving User Input"
        });
    });

}

//Update a new identified  user by userid

exports.update = (req, res) => {
    if(!req.body) {
        return res.status(400).send({
            message: "Data to update cannot be empty."
        })
    }

    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, {useFindAndModify: false}).then(data => {
        if(!data) {
            res.status(404).send( {
                message: `Cannot Update user with ${id}. May be user not found.`
            })
        }else{
            res.send(data)
        }
    }).catch(err => {
        res.status(500).send( {
            message: "Error update user Information."
        } )
    })

}

//Delete a  user with specified user id in the request

exports.delete = (req, res) => {
    const id = req.params.id;
    Userdb.findByIdAndDelete(id).then(data => {
        if(!data) {
            res.status(404).send( {
                message: `Cannot delete with ${id}. May be id is wrong.`
            } )
        }else{
            res.send( {
                message: "User Was Deleted Successfully"
            })
        }
    }).catch(err => {
        res.status(500).send( {
            message: "Could not delete User with Id"+ id
        } )
    })
}