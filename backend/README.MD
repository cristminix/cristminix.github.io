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
- Configure firestore for realtime database
- Setup Local Server Development
    
- Setup GCE On Colab
    - Install tampermonkey extension
        - Add this userscripts to keep alive colab
        ```
        // ==UserScript==
        // @name         Colab Communicator
        // @namespace    http://tampermonkey.net/
        // @version      0.1
        // @description  TTS
        // @author       You
        // @match        https://colab.research.google.com/drive/*
        // @require      https://releases.jquery.com/git/jquery-1.x-git.min.js
        // @require      https://cdnjs.cloudflare.com/ajax/libs/blueimp-md5/2.19.0/js/md5.min.js
        // @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
        // @grant        none
        // ==/UserScript==

        (function() {
            function my_log(str){
                //socket.emit("notice","tampermonkey",str)
                str = btoa(str)
                fetch(`http://localhost:3000/api/proxy/setNgrokUrl?url=${str}`).then((e)=>{return e.json()}).then((e)=>{console.log(e)})

            }
            function ClickConnect(){
        console.log("Working");
        document.querySelector("#comments > span").shadowRoot.querySelector("#connect").click();
                setTimeout(()=>{document.location.href=document.location.href},60*1000*30)
        }
        var clicker = setInterval(ClickConnect,60000);
            var tm_ = 0
            console.log("Hello Hacker");
            var text_hash = ""
            var tm_changed = setInterval(()=>{
                
                var sd = document.querySelectorAll('.stream.output_text');
                sd.forEach(el=>{
                    try{
                    var text = el.textContent
                    var match_text = text.match(/(.*ngrok\.io)/g);
                    if(match_text.length > 0){
                        var host = match_text[0].replace(" * Running on ","");
                        if(text_hash != host){
                            text_hash = host;
                            my_log(`${host}`);
                        }
                    }
                    }catch(e){}

                })
            },3000);
        })();
        ```

    - Load google colab project template
        - Clone a copy this [https://colab.research.google.com/drive/1kA_mRLnpItzpIOQL4JMRDtUndOGusT-A](https://colab.research.google.com/drive/1kA_mRLnpItzpIOQL4JMRDtUndOGusT-A)
    - Starting server on GCE
        - Copy and run this code to your notebook


        ```
        ! wget https://github.com/cristminix/cristminix.github.io/raw/main/backend/bin/setup-github-project.sh
        ! chmod +x setup-github-project.sh
        ! ./setup-github-project.sh
        ```

        ```
        !./cristminix.github.io/backend/bin/init-gce-server.sh
        ```

        ```
        ! cd ./cristminix.github.io/backend/ && ./bin/start-server.sh --tunnel & /content/cristminix.github.io/backend/bin/start-bore-ssh-server.sh > /content/cristminix.github.io/backend/logs/bore.log
        ```


