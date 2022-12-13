/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

 import React from "react"
 import PropTypes from "prop-types"
 import { StaticQuery, graphql } from "gatsby"
 

//  import Header from "./header"
 import "./layout.css"
import { ConsentManager, openConsentManager } from "@segment/consent-manager"
 
 const bannerContent = (
   <span className="bannerContent">
     We use cookies (and other similar technologies) to collect data to improve
     your experience on our site. By using our website, you’re agreeing to the
     collection of data as described in our{" "}
     <a href="/docs/legal/website-data-collection-policy/" target="_blank">
       Website Data Collection Policy
     </a>
     .
   </span>
 )
 const bannerSubContent = "You can change your preferences at any time."
 const preferencesDialogTitle = "Website Data Collection Preferences"
 const preferencesDialogContent =
   "We use data collected by cookies and JavaScript libraries to improve your browsing experience, analyze site traffic, deliver personalized advertisements, and increase the overall performance of our site."
 const cancelDialogTitle = "Are you sure you want to cancel?"
 const cancelDialogContent =
   "Your preferences have not been saved. By continuing to use our website, you՚re agreeing to our Website Data Collection Policy."
 
  const bannerActionsBlock = ({ acceptAll, denyAll }) => (
  <div>
    <button type="button" onClick={acceptAll}>
      Yes All
    </button>
    <button type="button" onClick={denyAll}>
      Not All
    </button>
  </div>
)

const mapCustomPreferences = {
  context: {
    ip: '0.0.0.0'
  }
}

 const Layout = ({ children }) => (
   <StaticQuery
     query={graphql`
       query SiteTitleQuery {
         site {
           siteMetadata {
             title
           }
         }
       }
     `}
     render={data => (
       <>
         {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
         <ConsentManager
           writeKey="YOUR KEY"
           otherWriteKeys={['ANOTHER KEY']}
           implyConsentOnInteraction={false}
           bannerContent={bannerContent}
           bannerActionsBlock={bannerActionsBlock}
           bannerSubContent={bannerSubContent}
           preferencesDialogTitle={preferencesDialogTitle}
           preferencesDialogContent={preferencesDialogContent}
           cancelDialogTitle={cancelDialogTitle}
           cancelDialogContent={cancelDialogContent}
           mapCustomPreferences={mapCustomPreferences}
         />
         <button type="button" onClick={openConsentManager}>
           Website Data Collection Preferences
         </button>
         <div
           style={{
             margin: `0 auto`,
             maxWidth: 960,
             padding: `0px 1.0875rem 1.45rem`,
             paddingTop: 0,
           }}
         >
           <main>{children}</main>
           <footer>
             © {new Date().getFullYear()}, Built with
             {` `}
             <a href="https://www.gatsbyjs.org">Gatsby</a>
           </footer>
         </div>
       </>
     )}
   />
 )
 
 Layout.propTypes = {
   children: PropTypes.node.isRequired,
 }
 
 export default Layout
 