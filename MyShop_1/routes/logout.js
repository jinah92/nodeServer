const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    req.session.destroy(()=>{
        res.json({message:"logout OK!"});
    });  // 세션 삭제 
});

module.exports = router;