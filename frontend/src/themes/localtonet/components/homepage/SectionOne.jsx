import React from "react";
import image1 from "../../assets/homepage/images/images1.png"
export default class SectionOne extends React.Component{

    render(){
        return(
            <>
<section className="relative table w-full py-36 lg:py-44">
    <div className="container">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
            <div className="md:col-span-7">
                <div className="md:mr-6">
                    <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5">Public URLs for <br/><span className="typewrite" data-period="2000" data-type="[ &quot;Exposing your local web server&quot;, &quot;Http, Tcp, Udp tunnels&quot;, &quot;Exposing your local game server&quot;, &quot;Sending previews to clients&quot;, &quot;Testing on mobile devices&quot;, &quot;Share your local files&quot;, &quot;Testing and debugging webhooks&quot;, &quot;SSH access to your Raspberry Pi&quot; ]"><span className="wrap"></span></span></h4>
                    <p className="text-slate-400 text-lg max-w-xl">LocaltoNet is a reverse proxy that enables you to expose your localhost services to the internet.</p>
                    <div className="mt-6">
                        <a href="/identity/account/register" className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mr-2 mt-2"><i className="uil uil-arrow-circle-right"></i> Get Started For Free</a>
                        <a href="/documents" className="btn bg-transparent hover:bg-indigo-600 border-indigo-600 text-indigo-600 hover:text-white rounded-md mt-2"><i className="uil uil-book-alt"></i> Documentation</a>
                    </div>
                </div>
            </div>
            <div className="md:col-span-5">
                <img src={image1} />
            </div>
        </div>
    </div>
</section>
            </>
        )
    }
}