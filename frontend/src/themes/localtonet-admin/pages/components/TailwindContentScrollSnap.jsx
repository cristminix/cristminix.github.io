import React from "react";
import ReactMarkdown from 'react-markdown';

import FooterContent from "./FooterContent";
import HeaderContent from "./HeaderContent";;
import $ from "jquery"

import {formatHtmlString} from "../../../../libs/utils";

export default class TailwindContentScrollSnap extends React.Component{
    state = {
       code : ""
    }  
    componentDidMount(){
       const htmlContent = $("#htmlContent").html();
       const code =  '```' +formatHtmlString(htmlContent) + '````';
       this.setState({code})
    }
    render(){
        return(
            <>
<div className="wrapper d-flex flex-column flex-row-fluid ">
   <HeaderContent title="Tailwind Masonry"/>
    <div className="container">
       <div className=" p-4">
          <ReactMarkdown children={this.state.code}></ReactMarkdown>
       </div>
    </div> 
    <div className="container" id="htmlContent">
         
       <div class="snap-y snap-mandatory h-screen overflow-scroll">
             <div class="snap-start bg-amber-200 w-full h-screen flex items-center justify-center text-8xl">1</div>
             <div class="snap-start bg-teal-200 w-full  h-screen flex items-center justify-center text-8xl">2</div>
             <div class="snap-start bg-cyan-200 w-full h-screen flex items-center justify-center text-8xl">3</div>
             <div class="snap-start bg-fuchsia-200 w-full h-screen flex items-center justify-center text-8xl">4</div>
       </div>
       <div class="snap-x snap-mandatory h-screen overflow-scroll flex">
             <div class="snap-start bg-amber-200 w-full h-screen flex-shrink-0 items-center justify-center text-8xl">1</div>
             <div class="snap-start bg-teal-200 w-full  h-screen flex-shrink-0 items-center justify-center text-8xl">2</div>
             <div class="snap-start bg-cyan-200 w-full h-screen flex-shrink-0 items-center justify-center text-8xl">3</div>
             <div class="snap-start bg-fuchsia-200 w-full h-screen flex-shrink-0 items-center justify-center text-8xl">4</div>
      </div>
       
       <div class="snap-x mx-auto snap-mandatory h-screen flex w-96 overflow-scroll">
          <div class="snap-start bg-amber-200 w-96 flex-shrink-0 h-screen flex items-center justify-center text-8xl">1</div>
          <div class="snap-start bg-teal-200 w-96 flex-shrink-0  h-screen flex items-center justify-center text-8xl">2</div>
          <div class="snap-start bg-cyan-200 w-96 flex-shrink-0 h-screen flex items-center justify-center text-8xl">3</div>
          <div class="snap-start bg-fuchsia-200 w-96 flex-shrink-0 h-screen flex items-center justify-center text-8xl">4</div>
      </div>
    </div>           
</div>
            </>
        )
    }
}