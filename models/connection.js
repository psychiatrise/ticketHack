const mongoose = require('mongoose');


const connectionString = 'mongodb+srv://medhitache_db_user:F3G0zW1j7dVY9oEL@cluster0.ykvqahm.mongodb.net/tickethack';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
 .then(() => console.log('Database connected'))

  .catch(error => console.error(error));