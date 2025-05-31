const getOperations = require('../operations/getOperations');

module.exports = {
    staff_get: async (req, res) => {
        try {
            const result = await getOperations.staff_get();
            return res.status(200).json({ status: true, message: `Data fetched Successfully.`, result: result });
        } catch (error) {
            return res.status(500).json({ status: false, message: `Internal Server Error. ${error}` });
        }
    }
}