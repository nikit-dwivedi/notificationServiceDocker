const PubNub = require('pubnub');
require('dotenv').config()
const publishKey = process.env.PUB_PUBLISH_KEY
const subscribeKey = process.env.PUB_SUBSCRIBE_KEY
const punubUserId = process.env.PUB_USER_ID
const pubnub = new PubNub({
    publishKey: publishKey,
    subscribeKey: subscribeKey,
    userId: punubUserId,
});


exports.publishOrderNotification = async (sellerId, orderId) => {
    // With the right payload, you can publish a message, add a reaction to a message,
    const publishPayload = {
        channel: `order-${sellerId}`,
        message: `${orderId}`,
    };
    try {
        // send a push notification, or send a small payload called a signal.
        pubnub.publish(publishPayload, (a, b) => console.log(a, b))
        return true
    } catch (error) {
        return false
    }
}

exports.publishStatusNotification = async (outletId, message) => {
    // With the right payload, you can publish a message, add a reaction to a message,
    try {
        // send a push notification, or send a small payload called a signal.
        const publishPayload = {
            channel: `status-${outletId}`,
            message: `status changed to${message}`,
        };
        pubnub.publish(publishPayload, (a, b) => console.log(a, b))
        return true
    } catch (error) {
        return false
    }
}

exports.customerOrderNotification = async (customerId, orderId) => {
    // With the right payload, you can publish a message, add a reaction to a message,
    try {
        // send a push notification, or send a small payload called a signal.
        const publishPayload = {
            channel: `order-${customerId}`,
            message: `${orderId}`,
        };
        pubnub.publish(publishPayload, (a, b) => console.log(a, b))
        return true
    } catch (error) {
        return false
    }
}

exports.adminOrderNotification  =async(orderId)=>{
    try {
        const publishPayload = {
            channel: `order-admin`,
            message: `${orderId}`,
        };
        pubnub.publish(publishPayload, (a, b) => console.log(a, b))
        return true
    } catch (error) {
        return false
    }
}