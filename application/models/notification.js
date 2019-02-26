const Notification =require('./schemas/notifications.js');




async function createNotification(_notification) {
    let notification= await Notification.create(_notification);
    return notification;
}



async function updateNotification(id,_notification) {
    let notification= await Notification.findOneAndUpdate({_id:id},_notification,{new: true});
    return notification;
}

module.exports={
    createNotification,
    updateNotification,
}
