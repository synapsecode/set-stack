const router = require('express').Router();

router.get('/', (req, res) => {
    res.status(200).json({
        message: '🍕 Api route 🍕',
    });
});

router.get('/message', (req, res) => {
    res.status(200).json({
        message: '🍕 BY ORDER OF THE PEAKY BLINDERS 🍕',
    });
});

//NotFound
router.get('*', (req, res) => {
    res.status(404).json({
        message: 'Error 404: Not Found',
    });
});

module.exports = router;