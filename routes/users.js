var express = require('express');
var router = express.Router();

router.param('id', function(req, res, next, id){

console.log(5566);
console.log(id);
//next()
    res.send('end');
})

/* GET users listing. */
router.get('/:id?', function(req, res, next){
    console.log(req.params);

    res.send('123');
//    next();
});





module.exports = router;
