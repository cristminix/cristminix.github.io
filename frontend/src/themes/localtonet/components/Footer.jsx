import React from "react";

export default class Footer extends React.Component{

    render(){
        return(
            <>
<footer className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">
    <div className="container">
        <div className="grid grid-cols-12">
            <div className="col-span-12">
                <div className="py-[60px] px-0">
                    <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                        <div className="lg:col-span-4 md:col-span-4">
                            <h5 className="tracking-[1px] text-gray-100 font-semibold">Contact</h5>
                            <ul className="list-none footer-list mt-6">
                                <li className="mt-[10px]"><a href="/contact" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i className="uil uil-angle-right-b me-1"></i> support@localtonet.com</a></li>
                            </ul>
                        </div>

                        <div className="lg:col-span-4 md:col-span-4">
                            <h5 className="tracking-[1px] text-gray-100 font-semibold">Quick Link</h5>
                            <ul className="list-none footer-list mt-6">
                                <li><a className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out" href="/Dashboard"><i className="uil uil-angle-right-b me-1"></i> Dashboard</a></li>
                                <li className="mt-[10px]"><a href="/api" target="_blank" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i className="uil uil-angle-right-b me-1"></i> Localtonet API</a></li>
                                <li className="mt-[10px]"><a href="/terms" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i className="uil uil-angle-right-b me-1"></i> Terms of Services</a></li>
                                <li className="mt-[10px]"><a href="/privacy" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i className="uil uil-angle-right-b me-1"></i> Privacy Policy</a></li>
                            </ul>
                        </div>

                        <div className="lg:col-span-4 md:col-span-4">
                            <h5 className="tracking-[1px] text-gray-100 font-semibold">Need Help?</h5>
                            <ul className="list-none footer-list mt-6">
                                <li className="mt-[10px]"><a href="/documents" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i className="uil uil-angle-right-b me-1"></i> Documentation</a></li>
                                <li className="mt-[10px]"><a href="/download" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i className="uil uil-angle-right-b me-1"></i> Download</a></li>
                                <li className="mt-[10px]"><a href="/blog" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i className="uil uil-angle-right-b me-1"></i> Blog</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="py-[30px] px-0 border-t border-slate-800">
        <div className="container text-center">
            <div className="grid md:grid-cols-2 items-center">
                <div className="md:text-left text-center">
                    <p className="mb-0">© {new Date().getFullYear()} Localtonet</p>
                </div>
            </div>
            
        </div>
    </div>
</footer>
            </>
        )
    }
}