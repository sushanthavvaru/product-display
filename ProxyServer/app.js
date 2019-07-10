const express = require('express')
const axios = require('axios')
const cors = require('cors')

let app = express();
app.use(cors())
app.get('/getProduct/', (req, res) => {


	axios.get(`https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json`,{ headers: 
		{'Access-Control-Allow-Origin': '*'}
	}).then((response) => {

		res.send(response.data)

	})

})

app.listen(4000, () => {
	console.log('server started 4000')
})