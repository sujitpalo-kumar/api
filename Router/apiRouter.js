const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

/*
    USAGE : Get all the products
    URL : http://127.0.0.1:5000/api/messages
    Method : GET
    Fields : no-fields
 */

    router.get('/messages', async (req, res) => {
        try {
            const messages = await Message.find();
            res.json(messages);
        } catch (err) {
            console.error(err);
            response.status(500).json({
                msg : err.message
            });
        }
    });
    /*
    USAGE : Create a Product
    URL : http://127.0.0.1:5000/api/messages
    Method : POST
    Fields : message
 */
    router.post('/messages', async (req, res) => {
        if (!req.body.content) {
            return res.status(400).json({ message: "Content is required" });
        }
    
        const message = new Message({
            content: req.body.content
        });
    
        try {
            await message.save();
            res.status(201).json(message);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    });
    module.exports = router;