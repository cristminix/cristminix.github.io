import React from "react";

export default class SectionThree extends React.Component{

    render(){
        return(
            <>

<section className="relative md:py-24 py-16">
    <div className="container">
        <div className="grid grid-cols-1 pb-0 text-center">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Features</h3>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
            <div className="group relative p-6 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 hover:bg-indigo-600 dark:hover:bg-indigo-600 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden text-center noHover">
                <div className="relative overflow-hidden text-transparent -m-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-hexagon h-24 w-24 fill-indigo-600/5 group-hover:fill-white/10 mx-auto"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                    <div className="absolute top-2/4 -translate-y-2/4 left-0 right-0 mx-auto text-indigo-600 rounded-xl group-hover:text-white transition-all duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                        <i className="uil uil-server"></i>
                    </div>
                </div>

                <div className="mt-6">
                    <a href="#" className="text-lg font-medium group-hover:text-white transition-all duration-500 ease-in-out">Any Protocol</a>
                    <p className="text-slate-400 group-hover:text-white/50 transition-all duration-500 ease-in-out mt-3">Supports HTTP, UDP, TLS, and any TCP based protocol.</p>
                </div>
            </div>

            <div className="group relative p-6 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 hover:bg-indigo-600 dark:hover:bg-indigo-600 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden text-center noHover">
                <div className="relative overflow-hidden text-transparent -m-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-hexagon h-24 w-24 fill-indigo-600/5 group-hover:fill-white/10 mx-auto"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                    <div className="absolute top-2/4 -translate-y-2/4 left-0 right-0 mx-auto text-indigo-600 rounded-xl group-hover:text-white transition-all duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                        <i className="uil uil-processor
"></i>
                    </div>
                </div>

                <div className="mt-6">
                    <a href="#" className="text-lg font-medium group-hover:text-white transition-all duration-500 ease-in-out">Runs Everywhere</a>
                    <p className="text-slate-400 group-hover:text-white/50 transition-all duration-500 ease-in-out mt-3">One executable, no dependencies. Any OS, any CPU architecture.</p>
                </div>
            </div>

            <div className="group relative p-6 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 hover:bg-indigo-600 dark:hover:bg-indigo-600 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden text-center noHover">
                <div className="relative overflow-hidden text-transparent -m-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-hexagon h-24 w-24 fill-indigo-600/5 group-hover:fill-white/10 mx-auto"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                    <div className="absolute top-2/4 -translate-y-2/4 left-0 right-0 mx-auto text-indigo-600 rounded-xl group-hover:text-white transition-all duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                        <i className="uil uil-lock-access"></i>
                    </div>
                </div>

                <div className="mt-6">
                    <a href="#" className="text-lg font-medium group-hover:text-white transition-all duration-500 ease-in-out">IP Whitelisting</a>
                    <p className="text-slate-400 group-hover:text-white/50 transition-all duration-500 ease-in-out mt-3">Allow or block access to specific IP addresses.</p>
                </div>
            </div>

            <div className="group relative p-6 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 hover:bg-indigo-600 dark:hover:bg-indigo-600 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden text-center noHover">
                <div className="relative overflow-hidden text-transparent -m-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-hexagon h-24 w-24 fill-indigo-600/5 group-hover:fill-white/10 mx-auto"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                    <div className="absolute top-2/4 -translate-y-2/4 left-0 right-0 mx-auto text-indigo-600 rounded-xl group-hover:text-white transition-all duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                        <i className="uil uil-rocket"></i>
                    </div>
                </div>

                <div className="mt-6">
                    <a href="#" className="text-lg font-medium group-hover:text-white transition-all duration-500 ease-in-out">Instant domains</a>
                    <p className="text-slate-400 group-hover:text-white/50 transition-all duration-500 ease-in-out mt-3">Select your own custom domain or subdomin</p>
                </div>
            </div>

            <div className="group relative p-6 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 hover:bg-indigo-600 dark:hover:bg-indigo-600 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden text-center noHover">
                <div className="relative overflow-hidden text-transparent -m-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-hexagon h-24 w-24 fill-indigo-600/5 group-hover:fill-white/10 mx-auto"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                    <div className="absolute top-2/4 -translate-y-2/4 left-0 right-0 mx-auto text-indigo-600 rounded-xl group-hover:text-white transition-all duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                        <i className="uil uil-clock"></i>
                    </div>
                </div>

                <div className="mt-6">
                    <a href="#" className="text-lg font-medium group-hover:text-white transition-all duration-500 ease-in-out">24/7 Support</a>
                    <p className="text-slate-400 group-hover:text-white/50 transition-all duration-500 ease-in-out mt-3">24/7 support with live support</p>
                </div>
            </div>

            <div className="group relative p-6 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 hover:bg-indigo-600 dark:hover:bg-indigo-600 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden text-center noHover">
                <div className="relative overflow-hidden text-transparent -m-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-hexagon h-24 w-24 fill-indigo-600/5 group-hover:fill-white/10 mx-auto"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                    <div className="absolute top-2/4 -translate-y-2/4 left-0 right-0 mx-auto text-indigo-600 rounded-xl group-hover:text-white transition-all duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                        <i className="uil uil-folder-network"></i>
                    </div>
                </div>

                <div className="mt-6">
                    <a href="#" className="text-lg font-medium group-hover:text-white transition-all duration-500 ease-in-out">Built-in File Server</a>
                    <p className="text-slate-400 group-hover:text-white/50 transition-all duration-500 ease-in-out mt-3">Serve any local system directory.</p>
                </div>
            </div>

            <div className="group relative p-6 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 hover:bg-indigo-600 dark:hover:bg-indigo-600 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden text-center noHover">
                <div className="relative overflow-hidden text-transparent -m-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-hexagon h-24 w-24 fill-indigo-600/5 group-hover:fill-white/10 mx-auto"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                    <div className="absolute top-2/4 -translate-y-2/4 left-0 right-0 mx-auto text-indigo-600 rounded-xl group-hover:text-white transition-all duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                        <i className="uil uil-bug"></i>
                    </div>
                </div>

                <div className="mt-6">
                    <a href="#" className="text-lg font-medium group-hover:text-white transition-all duration-500 ease-in-out">Webhooks</a>
                    <p className="text-slate-400 group-hover:text-white/50 transition-all duration-500 ease-in-out mt-3">Inspect and modify request & response</p>
                </div>
            </div>

            <div className="group relative p-6 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 hover:bg-indigo-600 dark:hover:bg-indigo-600 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden text-center noHover">
                <div className="relative overflow-hidden text-transparent -m-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-hexagon h-24 w-24 fill-indigo-600/5 group-hover:fill-white/10 mx-auto"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                    <div className="absolute top-2/4 -translate-y-2/4 left-0 right-0 mx-auto text-indigo-600 rounded-xl group-hover:text-white transition-all duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                        <i className="uil uil-cloud-lock"></i>
                    </div>
                </div>

                <div className="mt-6">
                    <a href="#" className="text-lg font-medium group-hover:text-white transition-all duration-500 ease-in-out">Let's Encrypt</a>
                    <p className="text-slate-400 group-hover:text-white/50 transition-all duration-500 ease-in-out mt-3">Let's encrypt certificate for your custom domain on the fly.</p>
                </div>
            </div>
        </div>
    </div>
</section>
            </>
        )
    }
}