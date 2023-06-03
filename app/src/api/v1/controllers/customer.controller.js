const { customerOrderNotification } = require("../services/notification.service")

exports.sendOrderNotification = async (req, res) => {
    try {
        const { customId, orderId } = req.body
        const resposne = await customerOrderNotification(customId, orderId)
        res.send({ resposne })
    } catch (error) {
        res.send({ error })
    }
}
