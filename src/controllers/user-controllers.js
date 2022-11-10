const db = require("../database");


const welcome = (req, res) => {
    res.render('home',{
        message: "Hello World! from controllers"
    });
}

const credentials = async (req, res) => {
    
    //TODO: create a datetable with credentials data

    try {        
        await db.query('SELECT * FROM users').then( async(rows) => {
            let response = rows[0][0];            

            return res.status(200).render('credentials',{
                username: response.username,
                fullname: response.fullname,    
            });
        });             
    } catch (error) {
        console.log(error);
    }

}

module.exports = 
    {
    welcome,
    credentials
    }
