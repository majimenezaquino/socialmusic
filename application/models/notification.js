const Notification =require('./schemas/notifications.js');




async function createNotification(_notification) {
    let notification= await Notification.create(_notification);
    return notification;
}

async function getNotification(user_id=null,limit=10) {
    let notification= await Notification.find({user_target:user_id, status: {$ne : "remove"}})
    .sort( { _id: -1 } )
    .limit(limit)
    .populate({ path: 'user_target', select: ['name','last_name','profile_picture'] })
    .populate({ path: 'user_published', select: ['name','last_name','profile_picture'] });
    return notification;
}

async function getNotificationByKEy(_key) {
    let notification= await Notification.find({key:_key, status: {$ne : "remove"}})
    .populate({ path: 'user_target', select: ['name','last_name','profile_picture'] })
    .populate({ path: 'user_published', select: ['name','last_name','profile_picture'] });
    return notification;
}



async function updateNotification(id,_notification) {
    let notification= await Notification.findOneAndUpdate({_id:id},_notification,{new: true})
    .populate({ path: 'user_target', select: ['name','last_name','profile_picture'] })
    .populate({ path: 'user_published', select: ['name','last_name','profile_picture'] });
    return notification;
}

module.exports={
    createNotification,
    updateNotification,
    getNotification,
    getNotificationByKEy
}
