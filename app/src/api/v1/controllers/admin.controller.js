const { adminOrderNotification } = require("../services/notification.service")

exports.sendOrderNotification = async (req, res) => {
    try {
        const { orderId } = req.body
        const resposne = await adminOrderNotification( orderId)
        res.send({ resposne })
    } catch (error) {
        res.send({ error })
    }
}
