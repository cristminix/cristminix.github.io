**Free Server Backend Developement GCE infrasctructure**

This repository contain server development on Free GCE infrastructure. Using Google Colab with tunneling method to achieve learning curve on server testing on Google Infrastructure Machine

***Feature***

- Easy development insfrastructure test via google colab
- SSH Server tunneling via bore
- Api testing tunneling via ngrok
- Local nginx reverse proxy autoconfig for random ngrok url
- SSL support
- Minimal server uptime 2 Hours non interactive to 12 Hours with interactive
- Example API Testing using nodejs express
- Example Init script for starting server and install its dependencies

***Preparation On Local Computer***

I currently work on Windows Machine, but you can try adapting to another Operating System

This item must be installed on your local machine

- nodejs `version >= 18` 
- nginx 
- postman
- chrome browser
- tampermonkey extension
- terminal app
- bash
- ngrok
- bore
- localtonet
- firebase account

***Configuring Local Machine***

- Installing Required Software
- Setup Tunnel
    - Setup Ngrok Tunnel
        - Download Ngrok tunnel app
        - Getting Ngrok Token
    - Setup Bore Tunnel
        - Download bore tunnel app
    - Setup Localtonet Tunnel
        - Download Localtonet app
        - Setup tunnel url on Dashboard
        - Getting Localtonet Token
- Configuring Local nginx
    - Getting SSL to work
    - Configuring Ngrok reverse proxy API
    - Testing Ngrok Reverse Proxy
- Setup GCE On Colab
    - Install tampermonkey extension
    - Load google colab project template
    - Starting server on GCE


