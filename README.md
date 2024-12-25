# Node-Slack-Bot

In this nodejs project, we're building a slack bot that uploads file to channels. We will everything from how to get your slack token to assigning permissions and use a node package that uses the slack API.

# Slack File Uploader App

This repository contains a simple yet powerful Slack app built using the Bolt framework and Node.js. The app demonstrates how to upload files to Slack channels using Slack's latest files.uploadV2 API. The project is a stepping stone toward developing a more advanced Slack-integrated solution.

# Features

1.File Uploads: Upload files to specific Slack channels effortlessly.
2.Support for New APIs: Leverages Slack's files.uploadV2 API for seamless file handling.
3.Socket Mode Enabled: Supports real-time interaction with the Slack workspace.
4.Environment Variable Configuration: Easy setup and secure token handling using dotenv.

#Prerequisites
Node.js (v16+ recommended)
A Slack App with the following scopes:
files:write
chat:write
channels:read
groups:read
#Note Its better to add more Scopes than less. even though we don't use most of them

#Usage
1.Ensure your Slack App is installed in the desired workspace.
2.Modify the channel_id and file fields in the app to point to the Slack channel where the file should be uploaded.
3.Start the app and watch files being uploaded effortlessly.

#Acknowledgment
By building on this project, I plan to develop an even more feature-rich solution to enhance collaboration and streamline workflows in Slack workspaces. Stay tuned!
