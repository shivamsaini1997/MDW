import React from "react";
import Contentcardfull from "../include/Contectcardfull";
import Sidebar from "../include/Sidebar";
import HeaderDb from "../include/HeaderDb";
import OrgHeaderDb from "../organization/OrgHeaderDB";
// import Videopage from "./Videopage";

function Searchvideopage(){
    return(
        <>
            <Sidebar/>
            {/* <HeaderDb/> */}
            <OrgHeaderDb/>
            <div className="body-header pt-5">
                <div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-12">
                            {/* <Contentcardfull data={responseSearch.data}/>  */}
                            <Contentcardfull />
                            {/* <Videopage/> */}
                        </div>
                        {/* <div className="col-12">
                            <Contentcardfull/> 
                        </div> */}
                    </div>  
                </div>
             </div> 
        </>
    );
}
export default Searchvideopage;