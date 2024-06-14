const express = require('express')
const router = express.Router()

const Subscriber = require('../models/subscribers')

//Getting all
router.get('/', async (req, res) => {
    try {
        const subscribers = await Subscriber.find()
        res.json(subscribers)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
})
//Getting one
router.get('/:id', getSubsciber, (req, res) => {
    res.json(res.subscriber)
})
//Creating one
router.post('/', async (req, res) => {
    const subscriber = new Subscriber({
        name: req.body.name,
        subscriberToChannel: req.body.subscriberToChannel,
    })

    try {
        const newSubscriber = await subscriber.save()
        res.status(201).json(newSubscriber)
    }
    catch (err) {
        res.status(400).json({message: err.message})
    }
})
//Updating one
router.patch('/:id', getSubsciber, async (req, res) => {
    if (req.body.name != null){
        res.subscriber.name = req.body.name
    }
    if (req.body.subscriberToChannel != null){
        res.subscriber.subscriberToChannel = req.body.subscriberToChannel
    }
    try {
        const updatedSubscriber = await res.subscriber.save()
        res.status(200).json({message: "Subscriber updated"})
    }
    catch(err){
        res.status(400).json({message: err.message})
    }
})
//Deleting one
router.delete('/:id', getSubsciber, async (req, res) => {
    try {
        await Subscriber.deleteOne({"_id": res.subscriber.id})
        res.json({message: "Deleted Subscriber"})
    }
    catch (err){
        res.status(500).json({message: err.message})
    }
})


async function getSubsciber(req, res, next){
    let subscriber
    try{
        subscriber = await Subscriber.findById(req.params.id)
        if (subscriber == null){
            return res.status(404).json({ message: "Cannot find user" })
        }
    }
    catch (err){
        return res.status(500).json({ message: err.message })
    }

    res.subscriber = subscriber
    next()
}

module.exports = router