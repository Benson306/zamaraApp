import React from 'react'

export default function SendMail(action, to, staffName) {
    let subject = '';
    let body = '';

    if(action == 'create' ){
        subject = 'Profile Notification #Created'
        body = `Greeting ${staffName}, we are glad to inform you that your staff profile has been created.`
    }else if(action == 'edit'){
        subject = 'Profile Notification #Edited'
        body = `Greeting ${staffName}, we are glad to inform you that your staff profile has been updated.`
    }else if(action == 'delete'){
        subject = 'Profile Notification #Deleted'
        body = `Greeting ${staffName}, we are sad to inform you that your staff profile has been deleted.`
    }

    let data = { to , subject, body }


    fetch('https://61a0-105-29-165-73.ngrok.io/',{
        method: 'POST',
        headers: {
            "Content-Type":'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(res =>{
        console.log(res)
    })
    .catch(err => console.log(err))
}
