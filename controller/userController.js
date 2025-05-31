const userOperations = require('../operations/userOperations');

module.exports = {
    staff: async (req, res) => {
        try {
            const { name, role, phone, email } = req.body; // this is body.
            if(!name || !role || !phone || !email){
                return res.status(404).json({status: false, message: ' All Fields Are Required.'})
            }
            const staff_result = await userOperations.staff(name, role, phone, email);
            console.log(staff_result,"staff_result");
            return res.status(200).json({status: true, message: 'Staff Added Successfully.', result: staff_result});
        } catch (error) {
            res.status(500).json({ status: false, message: `Internal Server Error. ${error}` });
        }
    },
    
}