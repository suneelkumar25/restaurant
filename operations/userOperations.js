const connection = require('../config/database');

module.exports = {
    staff: (name, role, phone, email) => {
        return new Promise((resolve, reject) => {
            const insertQuery = `INSERT INTO staff (name, role, phone, email) VALUES (?, ?, ?, ?)`;
            const insertValues = [name, role, phone, email];

            connection.execute(insertQuery, insertValues, (insertError, insertResult) => {
                if (insertError) {
                    console.log("Insert Error:", insertError);
                    return reject(`Internal Server Error. Error while inserting data. ${insertError}`);
                }

                const insertedId = insertResult.insertId;

                // ✅ CORRECT SQL query used here
                const fetchQuery = `SELECT name, role, phone, email FROM staff WHERE id = ?`; // Use actual column name for primary key
                connection.execute(fetchQuery, [insertedId], (fetchError, fetchResult) => {
                    if (fetchError) {
                        console.log("Fetch Error:", fetchError);
                        return reject(`Internal Server Error. Inserted but failed to load data. ${fetchError}`);
                    }

                    resolve({
                        data: fetchResult[0],
                        message: `Staff fetched successfully.`
                    });
                });
            });
        });
    },
    
}
