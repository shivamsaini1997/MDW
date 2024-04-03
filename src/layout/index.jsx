import React from 'react'
import OrgHeaderDb from '../components/organization/OrgHeaderDB'
import Sidebar from '../components/include/Sidebar'

function Layout({ children }) {
          return (
                    <div>
                               <OrgHeaderDb />
            <div className="body-header pt-lg-5 pt-4">
                <div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-lg-2 ps-0">
                            <Sidebar />
                        </div>
                        <div className="col-lg-10">
                          {children}
                        </div>
                    </div>
                </div>

            </div >
                    </div>
          )
}

export default Layout