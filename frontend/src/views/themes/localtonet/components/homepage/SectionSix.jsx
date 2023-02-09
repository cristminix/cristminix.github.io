import React from "react";

export default class SectionSix extends React.Component{

    render(){
        return(
            <>
<section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
    <div className="container">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-[30px]">
            <div className="flex">
                <i data-feather="help-circle" className="fea icon-ex-md text-indigo-600 mr-3"></i>
                <div className="flex-1">
                    <h5 className="mb-2 text-xl font-semibold">Who can use <span className="text-indigo-600">Localtonet</span></h5>
                    <p className="text-slate-400">Everyone (DevOps, Developers, Web designers, Gamers) who cant expose his local servers to the internet. </p>
                </div>
            </div>

            <div className="flex">
                <i data-feather="help-circle" className="fea icon-ex-md text-indigo-600 mr-3"></i>
                <div className="flex-1">
                    <h5 className="mb-2 text-xl font-semibold">Can I use the same account in more than one device?</h5>
                    <p className="text-slate-400">Yes, you can generate a token for each device</p>
                </div>
            </div>

            <div className="flex">
                <i data-feather="help-circle" className="fea icon-ex-md text-indigo-600 mr-3"></i>
                <div className="flex-1">
                    <h5 className="mb-2 text-xl font-semibold">What is reserve ports?</h5>
                    <p className="text-slate-400">It prevents the port from changing every time you activate the tunnel.</p>
                </div>
            </div>

            <div className="flex">
                <i data-feather="help-circle" className="fea icon-ex-md text-indigo-600 mr-3"></i>
                <div className="flex-1">
                    <h5 className="mb-2 text-xl font-semibold"> Can I cancel my plan?</h5>
                    <p className="text-slate-400">To apply for a refund, all you need to do is get in touch with us and request the refund and provide us with a reason validating your request so we could properly review and document your case.</p>
                </div>
            </div>
        </div>
    </div>
    <div className="container mt-20">
        <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Download</h3>

            <p className="text-slate-400 max-w-xl mx-auto">The easiest way to put anything on the internet.</p>
        </div>

        <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px] mt-8">

            <div className="lg:col-span-4 md:col-span-6">
                <a href="https://localtonet.com/download/localtonet-win-64.zip" target="_blank">
                    <div className="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
                        <div className="flex items-center justify-center h-[45px] min-w-[45px] bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3">
                            <span><i className="uil uil-windows"></i></span>
                        </div>
                        <div className="flex-1">
                            <h4 className="mb-0 text-lg font-medium">Windows (64-Bit)</h4>
                        </div>
                    </div>
                </a>
            </div>

            <div className="lg:col-span-4 md:col-span-6">
                <a href="https://localtonet.com/download/localtonet-win-32.zip" target="_blank">
                    <div className="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
                        <div className="flex items-center justify-center h-[45px] min-w-[45px] bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3">
                            <span><i className="uil uil-windows"></i></span>
                        </div>
                        <div className="flex-1">
                            <h4 className="mb-0 text-lg font-medium">Windows (32-Bit)</h4>
                        </div>
                    </div>
                </a>
            </div>

            <div className="lg:col-span-4 md:col-span-6">
                <a href="https://localtonet.com/download/localtonet-win-arm.zip" target="_blank">
                    <div className="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
                        <div className="flex items-center justify-center h-[45px] min-w-[45px] bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3">
                            <span><i className="uil uil-windows"></i></span>
                        </div>
                        <div className="flex-1">
                            <h4 className="mb-0 text-lg font-medium">Windows (ARM)</h4>
                        </div>
                    </div>
                </a>
            </div>

            <div className="lg:col-span-4 md:col-span-6">
                <a href="https://localtonet.com/download/localtonet-win-arm64.zip" target="_blank">
                    <div className="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
                        <div className="flex items-center justify-center h-[45px] min-w-[45px] bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3">
                            <span><i className="uil uil-windows"></i></span>
                        </div>
                        <div className="flex-1">
                            <h4 className="mb-0 text-lg font-medium">Windows (ARM-64)</h4>
                        </div>
                    </div>
                </a>
            </div>

            <div className="lg:col-span-4 md:col-span-6">
                <a href="https://apps.microsoft.com/store/detail/localtonet/9MZBMT85F2SB" target="_blank">
                    <div className="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
                        <div className="flex items-center justify-center h-[45px] min-w-[45px]  bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3">
                            <span><i className="uil uil-windows"></i></span>
                        </div>
                        <div className="flex-1">
                            <h4 className="mb-0 text-lg font-medium">Microsoft Store</h4>
                        </div>
                    </div>
                </a>
            </div>
            <div className="lg:col-span-4 md:col-span-6">
                <a href="https://play.google.com/store/apps/details?id=com.localtonet.localtonetapp" target="_blank">
                    <div className="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
                        <div className="flex items-center justify-center h-[45px] min-w-[45px]  bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3">
                            <span><i className="uil uil-google-play"></i></span>
                        </div>
                        <div className="flex-1">
                            <h4 className="mb-0 text-lg font-medium">Google Play (Android)</h4>
                        </div>
                    </div>
                </a>
            </div>
            <div className="lg:col-span-4 md:col-span-6">
                <a href="https://localtonet.com/download/localtonet-linux-x64.zip" target="_blank">
                    <div className="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
                        <div className="flex items-center justify-center h-[45px] min-w-[45px]  bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3">
                            <span><i className="uil uil-linux"></i></span>
                        </div>
                        <div className="flex-1">
                            <h4 className="mb-0 text-lg font-medium">Linux (64-Bit)</h4>
                        </div>
                    </div>
                </a>
            </div>

            <div className="lg:col-span-4 md:col-span-6">
                <a href="https://localtonet.com/download/localtonet-linux-arm.zip" target="_blank">
                    <div className="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
                        <div className="flex items-center justify-center h-[45px] min-w-[45px]  bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3">
                            <span><i className="uil uil-linux"></i></span>
                        </div>
                        <div className="flex-1">
                            <h4 className="mb-0 text-lg font-medium">Linux (ARM)</h4>
                        </div>
                    </div>
                </a>
            </div>

            <div className="lg:col-span-4 md:col-span-6">
                <a href="https://localtonet.com/download/localtonet-linux-arm64.zip" target="_blank">
                    <div className="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
                        <div className="flex items-center justify-center h-[45px] min-w-[45px]  bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3">
                            <span><i className="uil uil-linux"></i></span>
                        </div>
                        <div className="flex-1">
                            <h4 className="mb-0 text-lg font-medium">Linux (ARM-64)</h4>
                        </div>
                    </div>
                </a>
            </div>

            <div className="lg:col-span-4 md:col-span-6">
                <a href="https://localtonet.com/download/localtonet-osx-64.zip" target="_blank">
                    <div className="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
                        <div className="flex items-center justify-center h-[45px] min-w-[45px] bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3">
                            <span><i className="uil uil-apple"></i></span>
                        </div>
                        <div className="flex-1">
                            <h4 className="mb-0 text-lg font-medium">MacOS (64-Bit)</h4>
                        </div>
                    </div>
                </a>
            </div>
            <div className="lg:col-span-4 md:col-span-6">
                <a href="https://localtonet.com/download/localtonet-osx-arm64.zip" target="_blank">
                    <div className="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
                        <div className="flex items-center justify-center h-[45px] min-w-[45px] bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3">
                            <span><i className="uil uil-apple"></i></span>
                        </div>
                        <div className="flex-1">
                            <h4 className="mb-0 text-lg font-medium">MacOS (ARM-64)</h4>
                        </div>
                    </div>
                </a>
            </div>
            <div className="lg:col-span-4 md:col-span-6">
                <a href="https://hub.docker.com/r/localtonet/localtonet" target="_blank">
                    <div className="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
                        <div className="flex items-center justify-center h-[45px] min-w-[45px] bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full mr-3">
                            <span><i className="uil uil-docker"></i></span>
                        </div>
                        <div className="flex-1">
                            <h4 className="mb-0 text-lg font-medium">Docker</h4>
                        </div>
                    </div>
                </a>
            </div>
        </div>

        <div className="grid grid-cols-1 justify-center">
            <div className="mt-6 text-center">
                <a href="/download" className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mr-2 mt-2">See More <i className="uil uil-arrow-right"></i></a>
            </div>
        </div>
    </div>
    <div className="container md:mt-24 mt-16 md:mb-12">
        <div className="grid grid-cols-1 text-center">
            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Have Question? Get in touch!</h3>

            <p className="text-slate-400 max-w-xl mx-auto">If you have questions, then please do not hesitate to get in touch with us. You are always welcome.</p>

            <div className="mt-6">
                <a href="/contact" className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mr-2 mt-2"><i className="uil uil-comment-question"></i> Contact us</a>
            </div>
        </div>
    </div>
</section>
<div className="relative mt-10">
    <div className="shape absolute right-0 sm:-bottom-px -bottom-[2px] left-0 overflow-hidden z-1 text-dark-footer">
        <svg className="w-full h-auto" viewBox="0 0 2880 250" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M720 125L2160 0H2880V250H0V125H720Z" fill="currentColor"></path>
        </svg>
    </div>
</div>
            </>
        )
    }
}