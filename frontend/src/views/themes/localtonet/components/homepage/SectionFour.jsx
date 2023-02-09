import React from "react";

export default class SectionFour extends React.Component{

    render(){
        return(
            <>
<section className="relative md:pt-24 md:pb-36 pt-16 pb-24 bg-indigo-600" id="pricing">
    <div className="container">
        <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold text-white">Choose your pricing</h3>
            <p className="text-slate-400 max-w-xl mx-auto text-white/70">
                You can
                    <span>
                        <a href="/subscription" style={{fontWeight: 'bold', color: 'yellow'}}>Create Custom Package </a>
                        or
                    </span>
                <a href="/contact" style={{fontWeight: "bold",color: "yellowgreen"}}> Contact Us </a> for your package request with special options.
            </p>
        </div>
    </div>
</section>
            </>
        )
    }
}