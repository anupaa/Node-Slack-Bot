import dotenv from 'dotenv';
import pkg from '@slack/bolt';
import fs from "node:fs"

dotenv.config();
const { App } = pkg

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    appToken: process.env.SLACK_APP_TOKEN,
    socketMode: true
});
const fileData = "./bat.gif"
const uploadFile = async (filePath) => {
    try {
        const fp = fs.createReadStream(filePath)
        const channel = `${process.env.SLACK_CHANNEL_ID}`
        await app.client.files.uploadV2({
            channel_id: channel,
            initial_comment: "Just not for fun",
            file: fp,
            filename: 'bat.gif'
        })
    } catch (error) {
        console.log(error)
    }
}

// Most of time we don't invoke function after defining. in our case for demo purpose we're creating and invoking it on same file
uploadFile(fileData)