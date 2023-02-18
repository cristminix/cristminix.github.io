import React from "react";

import ReactMarkdown from 'react-markdown';

import FooterContent from "./FooterContent";
import HeaderContent from "./HeaderContent";;
import $ from "jquery"

import {formatHtmlString} from "../../../../libs/utils";
export default class TailwindContentMasonry extends React.Component{
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
<div className="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
   <HeaderContent title="Tailwind Masonry"/>
    <div className="container">
       <div className=" p-4">
          <ReactMarkdown children={this.state.code}></ReactMarkdown>
       </div>
    </div>
    <div className="container" id="htmlContent">
       
        <div className="w-full max-w-5xl p-5 pb-10 mx-auto mb-10 columns-3 gap-5 space-y-5">
            <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
            <img src="https://images.unsplash.com/photo-1542224566-6e85f2e6772f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" />
            <img src="https://images.unsplash.com/photo-1540390769625-2fc3f8b1d50c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80" />
            <img src="https://images.unsplash.com/photo-1579846321882-45cf6140c2ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" />
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
            <img src="https://images.unsplash.com/photo-1535224206242-487f7090b5bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
        </div>
    </div>           
</div>
            </>
        )
    }
}