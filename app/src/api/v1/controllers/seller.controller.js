const { publishOrderNotification, publishStatusNotification } = require("../services/notification.service")

exports.sendOrderNotification = async (req, res) => {
    try {
        const { sellerId, orderId } = req.body
        const resposne = await publishOrderNotification(sellerId, orderId)
        res.send({ resposne })
    } catch (error) {
        res.send({ error })
    }
}

exports.sendStatusNotification = async (req, res) => {
    try {
        const { outletId, message } = req.body
        const resposne = await publishStatusNotification(outletId, message)
        res.send({ resposne })
    } catch (error) {
        res.send({ error })
    }
}