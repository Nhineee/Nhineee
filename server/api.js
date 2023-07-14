var dboperations = require('./dboperation');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();
var cors = require('cors');

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(cors());
app.use('/api', router);

router.use((request, response, next) => {
    console.log('middleware');
    next();
});

app.use((_, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
// *- LOGIN -* //
router.route('/login').post(async (request, response) => {

        await dboperations.login(request, response);

});
// *- REGISTER -* //
router.route('/register').post(async (request, response) => {

    await dboperations.register(request, response);
});
// *- GET -* //
router.route('/task').get(async (request, response) => {
    dboperations.getTask().then(result =>{
        response.status(200).json(result)
    })
});

// *- ADD -* //
router.route('/task').post(async (request, response) => {
    let task = {...request.body}
    dboperations.addTask(task).then(result =>{
        response.status(200).json(result)
    })
});
// *- UPDATE -* //
router.route('/task/:taskid').put(async (request, response) => {
    dboperations.updateTask(request.params.taskid,request.body).then(result =>{
        response.status(200).json(result)
    })
});

// *- DELETE -* //
router.route('/task/:taskid').delete(async (request, response) => {
    dboperations.delTask(request.params.taskid).then(result =>{
        response.status(200).json(result)
    })
});

// *- TEST -* //
router.route('/test').get(async (request, response) => {
    await dboperations.test().then(result => {
        response.status(200).json(result);
    });
})

var port = process.env.PORT || 8090;
app.listen(port);
console.log('Server is running at ' + port);