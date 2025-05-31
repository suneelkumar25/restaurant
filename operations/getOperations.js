const connection = require("../config/database");

module.exports = {
    staff_get: () => {
        return new Promise((resolve, reject) => {
            const query = `select name, role, phone, email from staff`;
            
            connection.execute(query, [], (error, result) => {
                if (error) {
                    console.log(error, "get error");
                    return reject(`Internal Server Error. Something went wrong while retrieving the data. ${error}`);
                }
                resolve({result: result, message: `Data Fetched Successfully`});
            })
        })
    }
}