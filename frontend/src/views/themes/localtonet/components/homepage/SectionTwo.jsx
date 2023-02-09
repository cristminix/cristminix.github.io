import React from "react";
import _1Png from "../../assets/homepage/images/1.png"
import diagramPng from "../../assets/homepage/images/diagram.png"
export default class SectionTwo extends React.Component{

    render(){
        return(
            <>
<section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
    <div className="container">
        <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">How It Works</h3>

            <p className="text-slate-400 max-w-xl mx-auto">Your local or private network services are made available to the internet with reverse proxy. </p>
        </div>

        <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center mt-10 gap-[30px]">
            <div className="lg:col-span-7">
                <img src={diagramPng} alt=""/>
            </div>
            <div className="lg:col-span-5 mt-8 md:mt-0">
                <div className="lg:ml-10">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Change the way you build services</h3>
                    <p className="text-slate-400 max-w-xl">
                        Instant access to any system without network pain.
                        No dynamic DNS, port forwarding, and VPNs required.
                    </p>

                    <ul className="list-none text-slate-400 mt-4">
                        <li className="mb-1 flex"><i className="uil uil-check-circle text-indigo-600 text-xl mr-2"></i> Put localhost on the internet</li>
                        <li className="mb-1 flex"><i className="uil uil-check-circle text-indigo-600 text-xl mr-2"></i> Connect to networks without pain</li>
                        <li className="mb-1 flex"><i className="uil uil-check-circle text-indigo-600 text-xl mr-2"></i> Protect and scale your services</li>
                    </ul>

                </div>
            </div>
        </div>
    </div>

    <div className="container md:mt-24 mt-16">
        <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center mt-10 gap-[30px]">
            <div className="lg:col-span-6 mt-8 md:mt-0">
                <div className="grid grid-cols-1 gap-[30px]">
                    <div className="group flex items-center relative overflow-hidden p-6 rounded-md shadow dark:shadow-gray-800 bg-gray-50 dark:bg-slate-800 hover:bg-indigo-600 dark:hover:bg-indigo-600 transition-all duration-500 ease-in-out noHover">
                        <span className="text-indigo-600 group-hover:text-white text-5xl font-semibold transition-all duration-500 ease-in-out">
                            <i className="uil uil-padlock"></i>
                        </span>
                        <div className="flex-1 ml-3">
                            <h5 className="group-hover:text-white text-xl font-semibold transition-all duration-500 ease-in-out">Enhance Security</h5>
                            <p className="text-slate-400 group-hover:text-white/50 transition-all duration-500 ease-in-out mt-2">End-to-end encryption (E2EE)</p>
                        </div>
                        <div className="absolute left-1 top-5 text-dark/[0.03] dark:text-white/[0.03] text-8xl group-hover:text-white/[0.04] transition-all duration-500 ease-in-out">
                            <i className="uil uil-padlock"></i>
                        </div>
                    </div>

                    <div className="group flex items-center relative overflow-hidden p-6 rounded-md shadow dark:shadow-gray-800 bg-gray-50 dark:bg-slate-800 hover:bg-indigo-600 dark:hover:bg-indigo-600 transition-all duration-500 ease-in-out noHover">
                        <span className="text-indigo-600 group-hover:text-white text-5xl font-semibold transition-all duration-500 ease-in-out">
                            <i className="uil uil-tachometer-fast-alt"></i>
                        </span>
                        <div className="flex-1 ml-3">
                            <h5 className="group-hover:text-white text-xl font-semibold transition-all duration-500 ease-in-out">High Performance</h5>
                            <p className="text-slate-400 group-hover:text-white/50 transition-all duration-500 ease-in-out mt-2">Feel like on your localhost</p>
                        </div>
                        <div className="absolute left-1 top-5 text-dark/[0.03] dark:text-white/[0.03] text-8xl group-hover:text-white/[0.04] transition-all duration-500 ease-in-out">
                            <i className="uil uil-tachometer-fast-alt"></i>
                        </div>
                    </div>

                    <div className="group flex items-center relative overflow-hidden p-6 rounded-md shadow dark:shadow-gray-800 bg-gray-50 dark:bg-slate-800 hover:bg-indigo-600 dark:hover:bg-indigo-600 transition-all duration-500 ease-in-out noHover">
                        <span className="text-indigo-600 group-hover:text-white text-5xl font-semibold transition-all duration-500 ease-in-out">
                            <i className="uil uil-user-check"></i>
                        </span>
                        <div className="flex-1 ml-3">
                            <h5 className="group-hover:text-white text-xl font-semibold transition-all duration-500 ease-in-out">Unbeatable Support</h5>
                            <p className="text-slate-400 group-hover:text-white/50 transition-all duration-500 ease-in-out mt-2">24/7 support with live support</p>
                        </div>
                        <div className="absolute left-1 top-5 text-dark/[0.03] dark:text-white/[0.03] text-8xl group-hover:text-white/[0.04] transition-all duration-500 ease-in-out">
                            <i className="uil uil-user-check"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:col-span-6">
                <div className="lg:mr-8">
                    <img src={_1Png} />
                </div>
            </div>
        </div>
    </div>
</section>
            </>
        )
    }
}