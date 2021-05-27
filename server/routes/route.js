const router = require('express').Router();

router.post("/new", (req, res) => {
    const newTicket = req.body;
    Tickets.create(newTicket, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    });
});

module.exports = router;