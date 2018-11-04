const User = require('../model/user.js');

module.exports = {
    register:async function (req, res) {

        const FindUser = await User.findOne({ username });
        if (FindUser) {
            return res.status(200).json({ 
                status: 0, 
                message: "User is already to use !!" })
        } else {
            const nUser = new User({
                username: req.body.username,
                password: req.body.password,
                sex: req.body.sex
            })
            await nUser.save();
            return res.status(200).json({
                status: 1, 
                message: "Success !!", 
                data: await User.findOne({ _id: nUser._id }, {
                    username : 1,
                    sex : 1
                })
            });

        }

    }
}