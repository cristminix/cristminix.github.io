import React from "react";

export default class SectionFive extends React.Component{
    ChangeProductLink(a, b) {
        document.getElementById(a).href = b;
    }
    render(){
        return(
            <>
<section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
    <div className="container">
        <div className="grid grid-cols-1">
            <div className="relative z-2 transition-all duration-500 ease-in-out sm:-mt-[200px] -mt-[140px] m-0">
                <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 gap-[30px]">
                    <div className="group relative rounded-md overflow-hidden hover:shadow dark:hover:shadow-gray-700 bg-white dark:bg-slate-900 text-center transition-all duration-500 ease-in-out h-fit">
                            <div className="p-6 py-8 border-b border-gray-100 dark:border-gray-700">
                                <h5 className="text-lg font-semibold uppercase">Free</h5>
                                <p className="text-slate-400 mt-4">Free for <b className="text-black dark:text-white">non-commercial</b> use.</p>
                            </div>

                            <div className="p-6 hosting-price">
                                <ul className="inline-block flex-wrap justify-center text-center p-1 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-full" id="myTabone" data-tabs-toggle="#FreeContent" role="tablist">
                                    <li role="presentation" className="inline-block">
                                        <button className="px-4 py-1 text-sm font-semibold rounded-full w-full transition-all duration-500 ease-in-out text-white bg-indigo-600" id="start-month-tab" data-tabs-target="#start-month" type="button" role="tab" aria-controls="start-month" aria-selected="true">Monthly</button>
                                    </li>
                                    <li role="presentation" className="inline-block">
                                        <button className="px-4 py-1 text-sm font-semibold rounded-full w-full transition-all duration-500 ease-in-out hover:text-indigo-600 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800" id="start-year-tab" data-tabs-target="#start-year" type="button" role="tab" aria-controls="start-year" aria-selected="false">Yearly</button>
                                    </li>
                                </ul>

                                <div id="FreeContent" className="mt-6">
                                    <div className="" id="start-month" role="tabpanel" aria-labelledby="start-month-tab">
                                        <div className="flex justify-center">
                                            <span className="text-sm text-slate-400 font-semibold">$</span>
                                            <span className="text-3xl font-semibold mx-1">0</span>
                                            <span className="text-sm text-slate-400 font-semibold self-end">/month</span>
                                        </div>
                                    </div>
                                    <div className="hidden" id="start-year" role="tabpanel" aria-labelledby="start-year-tab">
                                        <div className="flex justify-center">
                                            <span className="text-sm text-slate-400 font-semibold">$</span>
                                            <span className="text-3xl font-semibold mx-1">0</span>
                                            <span className="text-sm text-slate-400 font-semibold self-end">/year</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <a href="/dashboard" className="btn bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-md">Get Start</a>
                                </div>
                            </div>
                            <div className="p-6 border-b border-gray-100 dark:border-gray-700 text-left">
                                <ul className="list-none">
                                    <li className="text-slate-400 my-1"><i className="mdi mdi-check mr-2 text-emerald-600"></i><b className="text-black dark:text-white">HTTP/TCP/UDP</b> Tunnels</li>
                                    <li className="text-slate-400 my-1"><i className="mdi mdi-check mr-2 text-amber-500"></i><b className="text-black dark:text-white">Random </b>URLs/ports</li>
                                    <li className="text-slate-400 my-1"><i className="mdi mdi-check mr-2 text-amber-500"></i><b className="text-black dark:text-white">1</b> Total Tunnels</li>
                                    <li className="text-slate-400 my-1"><i className="mdi mdi-check mr-2 text-amber-500"></i><b className="text-black dark:text-white">1 GB</b> Bandwidth</li>
                                    <li className="text-slate-400 my-1"><i className="mdi mdi-check mr-2 text-emerald-600"></i><b className="text-black dark:text-white">Basic Authentication</b></li>
                                    <li className="text-slate-400 my-1"><i className="mdi mdi-check mr-2 text-emerald-600"></i><b className="text-black dark:text-white">APIs for Tunnels</b></li>
                                    <li className="text-slate-400 my-1"><i className="mdi mdi-check mr-2 text-emerald-600"></i><b className="text-black dark:text-white">Request Inspection & Modify</b></li>
                                    <li className="text-slate-400 my-1"><i className="mdi mdi-check mr-2 text-emerald-600"></i><b className="text-black dark:text-white">Automated SSL/TLS Certificates</b></li>
                                    <li className="text-slate-400 my-1"><i className="mdi mdi-check mr-2 text-emerald-600"></i><b className="text-black dark:text-white">Unlimited Connections</b></li>
                                    <li className="text-slate-400 my-1"><i className="mdi mdi-check mr-2 text-emerald-600"></i><b className="text-black dark:text-white">No Timeout</b></li>
                                </ul>
                            </div>
                    </div> 
                    <div className="group relative rounded-md overflow-hidden hover:shadow dark:hover:shadow-gray-700 bg-white dark:bg-slate-900 text-center transition-all duration-500 ease-in-out h-fit" style={{maxHeight: "775px"}}>
                        <div className="p-6 py-8 border-b border-gray-100 dark:border-gray-700">
                            <h5 className="text-lg font-semibold uppercase">Starter</h5>
                            <p className="text-slate-400 mt-4">For <b className="text-black dark:text-white">developers</b> bringing new projects to life</p>
                        </div>
                        <div className="p-6 hosting-price">
                            <ul className="inline-block flex-wrap justify-center text-center p-1 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-full" id="myTabthree" data-tabs-toggle="#Starter-Content" role="tablist">
                                <li role="presentation" className="inline-block">
                                    <button className="px-4 py-1 text-sm font-semibold rounded-full w-full text-slate-400 transition-all duration-500 ease-in-out text-white bg-indigo-600" id="Starter-month-tab" data-tabs-target="#Starter-month" type="button" role="tab" aria-controls="Starter-month" aria-selected="true" onClick={()=>{return "ChangeProductLink('Starter-link','/subscription/order/11')"}}>Monthly</button>
                                </li>
                                <li role="presentation" className="inline-block">
                                    <button className="px-4 py-1 text-sm font-semibold rounded-full w-full text-slate-400 transition-all duration-500 ease-in-out hover:text-indigo-600 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800" id="Starter-year-tab" data-tabs-target="#Starter-year" type="button" role="tab" aria-controls="busi-year" aria-selected="false" onClick={()=>{return "ChangeProductLink('Starter-link','/subscription/order/12')"}}>Yearly</button>
                                </li>
                            </ul>

                            <div id="Starter-Content" className="mt-6">
                                <div className="" id="Starter-month" role="tabpanel" aria-labelledby="Starter-month-tab">
                                    <div className="flex justify-center">
                                        <span className="text-sm text-slate-400 font-semibold">$</span>
                                        <span className="text-3xl font-semibold mx-1">2.00</span>
                                        <span className="text-sm text-slate-400 font-semibold self-end">/month</span>
                                    </div>
                                </div>
                                <div className="hidden" id="Starter-year" role="tabpanel" aria-labelledby="Starter-year-tab">
                                    <div className="flex justify-center">
                                        <span className="text-sm text-slate-400 font-semibold">$</span>
                                        <span className="text-3xl font-semibold mx-1">18.00</span>
                                        <span className="text-sm text-slate-400 font-semibold self-end">/year</span>
                                    </div>
                                </div>
                            </div>
                            <span></span>
                            <div className="mt-6">
                                <a id="Starter-link" href="/subscription/order/11" className="btn bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-md">Get Start</a>
                            </div>
                        </div>

                        <div className="p-6 border-b border-gray-100 dark:border-gray-700 text-left">
                            <ul className="list-none">
                                <li className="text-slate-400 my-1"><i className="mdi mdi-check mr-2 text-emerald-600"></i><b className="text-black dark:text-white">All Free Features</b></li>
                                <li className="text-slate-400 my-1"><i className="mdi mdi-check mr-2 text-emerald-600"></i><b className="text-black dark:text-white">Unlimited Bandwidth</b></li>
                                    <li className="text-slate-400 my-1"><i className="mdi mdi-check mr-2 text-amber-500"></i><b className="text-black dark:text-white">0</b> Custom Domains</li>
                                <li className="text-slate-400 my-1"><i className="mdi mdi-check mr-2 text-emerald-600"></i><b className="text-black dark:text-white">1</b> Custom Subdomains</li>
                                <li className="text-slate-400 my-1"><i className="mdi mdi-check mr-2 text-emerald-600"></i><b className="text-black dark:text-white">1</b> UDP/TCP Tunnels</li>
                                <li className="text-slate-400 my-1"><i className="mdi mdi-check mr-2 text-emerald-600"></i><b className="text-black dark:text-white">0</b> Proxy Tunnels</li>
                                <li className="text-slate-400 my-1"><i className="mdi mdi-check mr-2 text-emerald-600"></i><b className="text-black dark:text-white">2</b> Total Tunnels</li>
                                <li className="text-slate-400 my-1"><i className="mdi mdi-check mr-2 text-emerald-600"></i><b className="text-black dark:text-white">1</b> Reserve ports</li>
                            </ul>
                        </div>
                    </div>
                    <div className="group relative rounded-md overflow-hidden hover:shadow dark:shadow-gray-800 hover:shadow-indigo-600 border-[3px] border-indigo-600 bg-white dark:bg-slate-900 text-center transition-all duration-500 ease-in-out" style={{maxHeight: "775px"}}>
                        <div className="p-6 py-8 border-b border-gray-100 dark:border-gray-700">
                            <h5 className="text-lg font-semibold uppercase">Basic</h5>
                            <p className="text-slate-400 mt-4">For <b className="text-black dark:text-white">developers</b> bringing new projects to life</p>
                        </div>
                        <div className="p-6 hosting-price">
                            <ul className="inline-block flex-wrap justify-center text-center p-1 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-full" id="myTabthree" data-tabs-toggle="#Basic-Content" role="tablist">
                                <li role="presentation" className="inline-block">
                                    <button className="px-4 py-1 text-sm font-semibold rounded-full w-full text-slate-400 transition-all duration-500 ease-in-out text-white bg-indigo-600" id="Basic-month-tab" data-tabs-target="#Basic-month" type="button" role="tab" aria-controls="Basic-month" aria-selected="true" onClick={()=>{return "ChangeProductLink('Basic-link','/subscription/order/1')"}}>Monthly</button>
                                </li>
                                <li role="presentation" className="inline-block">
                                    <button className="px-4 py-1 text-sm font-semibold rounded-full w-full text-slate-400 transition-all duration-500 ease-in-out hover:text-indigo-600 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800" id="Basic-year-tab" data-tabs-target="#Basic-year" type="button" role="tab" aria-controls="busi-year" aria-selected="false" onClick={()=>{return "ChangeProductLink('Basic-link','/subscription/order/8')"}}>Yearly</button>
                                </li>
                            </ul>

                            <div id="Basic-Content" className="mt-6">
                                <div className="" id="Basic-month" role="tabpanel" aria-labelledby="Basic-month-tab">
                                    <div className="flex justify-center">
                                        <span className="text-sm text-slate-400 font-semibold">$</span>
                                        <span className="text-3xl font-semibold mx-1">5.00</span>
                                        <span className="text-sm text-slate-400 font-semibold self-end">/month</span>
                                    </div>
                                </div>
                                <div className="hidden" id="Basic-year" role="tabpanel" aria-labelledby="Basic-year-tab">
                                    <div className="flex justify-center">
                                        <span className="text-sm text-slate-400 font-semibold">$</span>
                                        <span className="text-3xl font-semibold mx-1">48.00</span>
                                        <span className="text-sm text-slate-400 font-semibold self-end">/year</span>
                                    </div>
                                </div>
                            </div>
                            <span></span>
                            <div className="mt-6">
                                <a id="Basic-link" href="/subscription/order/1" className="btn bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-md">Get Start</a>
                            </div>
                        </div>

                        <div className="p-6 border-b border-gray-100 dark:border-gray-700 text-left">
                            <ul className="list-none">
                                <li className="text-slate-400 my-1"><i className="mdi mdi-check mr-2 text-emerald-600"></i><b className="text-black dark:text-white">All Free Features</b></li>
                                <li className="text-slate-400 my-1"><i className="mdi mdi-check mr-2 text-emerald-600"></i><b className="text-black dark:text-white">Unlimited Bandwidth</b></li>
                                    <li className="text-slate-400 my-1"><i className="mdi mdi-check mr-2 text-emerald-600"></i><b className="text-black dark:text-white">1</b> Custom Domains</li>
                                <li className="text-slate-400 my-1"><i className="mdi mdi-check mr-2 text-emerald-600"></i><b className="text-black dark:text-white">5</b> Custom Subdomains</li>
                                <li className="text-slate-400 my-1"><i className="mdi mdi-check mr-2 text-emerald-600"></i><b className="text-black dark:text-white">5</b> UDP/TCP Tunnels</li>
                                <li className="text-slate-400 my-1"><i className="mdi mdi-check mr-2 text-emerald-600"></i><b className="text-black dark:text-white">1</b> Proxy Tunnels</li>
                                <li className="text-slate-400 my-1"><i className="mdi mdi-check mr-2 text-emerald-600"></i><b className="text-black dark:text-white">12</b> Total Tunnels</li>
                                <li className="text-slate-400 my-1"><i className="mdi mdi-check mr-2 text-emerald-600"></i><b className="text-black dark:text-white">5</b> Reserve ports</li>
                                    <li className="text-slate-400 my-1"><i className="mdi mdi-check mr-2 text-emerald-600"></i><b className="text-black dark:text-white">Port Customization</b></li>
                                    <li className="text-slate-400 my-1"><i className="mdi mdi-check mr-2 text-emerald-600"></i><b className="text-black dark:text-white">IP Restrictions</b></li>
                            </ul>
                        </div>
                        <div className="p-4 bg-indigo-600">
                            <p className="text-white text-sm">The most frequently chosen package</p>
                        </div>
                    </div>
                    <div className="group relative rounded-md overflow-hidden hover:shadow dark:hover:shadow-gray-700 bg-white dark:bg-slate-900 text-center transition-all duration-500 ease-in-out h-fit" style={{maxHeight: "775px"}}>
                        <div className="p-6 py-8 border-b border-gray-100 dark:border-gray-700">
                            <h5 className="text-lg font-semibold uppercase">Pro</h5>
                            <p className="text-slate-400 mt-4">For <b className="text-black dark:text-white">teams of developers</b> scaling production</p>
                        </div>
                        <div className="p-6 hosting-price">
                            <ul className="inline-block flex-wrap justify-center text-center p-1 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-full" id="myTabthree" data-tabs-toggle="#Pro-Content" role="tablist">
                                <li role="presentation" className="inline-block">
                                    <button className="px-4 py-1 text-sm font-semibold rounded-full w-full text-slate-400 transition-all duration-500 ease-in-out text-white bg-indigo-600" id="Pro-month-tab" data-tabs-target="#Pro-month" type="button" role="tab" aria-controls="Pro-month" aria-selected="true" onClick={()=>{return "ChangeProductLink('Pro-link','/subscription/order/2')"}}>Monthly</button>
                                </li>
                                <li role="presentation" className="inline-block">
                                    <button className="px-4 py-1 text-sm font-semibold rounded-full w-full text-slate-400 transition-all duration-500 ease-in-out hover:text-indigo-600 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800" id="Pro-year-tab" data-tabs-target="#Pro-year" type="button" role="tab" aria-controls="busi-year" aria-selected="false" onClick={()=>{return "ChangeProductLink('Pro-link','/subscription/order/9')"}}>Yearly</button>
                                </li>
                            </ul>

                            <div id="Pro-Content" className="mt-6">
                                <div className="" id="Pro-month" role="tabpanel" aria-labelledby="Pro-month-tab">
                                    <div className="flex justify-center">
                                        <span className="text-sm text-slate-400 font-semibold">$</span>
                                        <span className="text-3xl font-semibold mx-1">8.00</span>
                                        <span className="text-sm text-slate-400 font-semibold self-end">/month</span>
                                    </div>
                                </div>
                                <div className="hidden" id="Pro-year" role="tabpanel" aria-labelledby="Pro-year-tab">
                                    <div className="flex justify-center">
                                        <span className="text-sm text-slate-400 font-semibold">$</span>
                                        <span className="text-3xl font-semibold mx-1">72.00</span>
                                        <span className="text-sm text-slate-400 font-semibold self-end">/year</span>
                                    </div>
                                </div>
                            </div>
                            <span></span>
                            <div className="mt-6">
                                <a id="Pro-link" href="/subscription/order/2" className="btn bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-md">Get Start</a>
                            </div>
                        </div>

                        <div className="p-6 border-b border-gray-100 dark:border-gray-700 text-left">
                            <ul className="list-none">
                                <li className="text-slate-400 my-1"><i className="mdi mdi-check mr-2 text-emerald-600"></i><b className="text-black dark:text-white">All Free Features</b></li>
                                <li className="text-slate-400 my-1"><i className="mdi mdi-check mr-2 text-emerald-600"></i><b className="text-black dark:text-white">Unlimited Bandwidth</b></li>
                                    <li className="text-slate-400 my-1"><i className="mdi mdi-check mr-2 text-emerald-600"></i><b className="text-black dark:text-white">2</b> Custom Domains</li>
                                <li className="text-slate-400 my-1"><i className="mdi mdi-check mr-2 text-emerald-600"></i><b className="text-black dark:text-white">10</b> Custom Subdomains</li>
                                <li className="text-slate-400 my-1"><i className="mdi mdi-check mr-2 text-emerald-600"></i><b className="text-black dark:text-white">10</b> UDP/TCP Tunnels</li>
                                <li className="text-slate-400 my-1"><i className="mdi mdi-check mr-2 text-emerald-600"></i><b className="text-black dark:text-white">2</b> Proxy Tunnels</li>
                                <li className="text-slate-400 my-1"><i className="mdi mdi-check mr-2 text-emerald-600"></i><b className="text-black dark:text-white">24</b> Total Tunnels</li>
                                <li className="text-slate-400 my-1"><i className="mdi mdi-check mr-2 text-emerald-600"></i><b className="text-black dark:text-white">10</b> Reserve ports</li>
                                    <li className="text-slate-400 my-1"><i className="mdi mdi-check mr-2 text-emerald-600"></i><b className="text-black dark:text-white">Port Customization</b></li>
                                    <li className="text-slate-400 my-1"><i className="mdi mdi-check mr-2 text-emerald-600"></i><b className="text-black dark:text-white">IP Restrictions</b></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</section>
<div className="relative">
    <div className="shape absolute right-0 sm:-bottom-px -bottom-[2px] left-0 overflow-hidden z-1 text-gray-50 dark:text-slate-800">
        <svg className="w-full h-auto" viewBox="0 0 2880 250" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M720 125L2160 0H2880V250H0V125H720Z" fill="currentColor"></path>
        </svg>
    </div>
</div>
            </>
        )
    }
}