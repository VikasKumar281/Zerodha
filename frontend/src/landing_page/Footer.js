import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)", padding: "40px 0" }}>
      <div className="container border-top pt-5 ">
        <div className="row">
          {/* Left Column with Logo + Copyright + Icons */}
          <div className="col-md-3">
            {/* Zerodha Logo */}
            <img
              src={'media/images/logo.svg'}
              alt="Zerodha Logo"
              style={{ height: "20px", marginBottom: "10px" }}
            />
            <p className="text-muted" style={{ fontSize: "14px" }}>
              © 2010 - 2025, Zerodha Broking Ltd.<br />
              All rights reserved.
            </p>

            {/* Social Row 1 */}
            <div className="d-flex gap-3 mt-3">
              <a href="https://x.com/zerodhaonline">
                <i className="fab fa-x-twitter" style={{ color: "#6c757d", fontSize: "20px" }}></i>
              </a>
              <a href="https://www.facebook.com/zerodha.social">
                <i className="fab fa-facebook" style={{ color: "#6c757d", fontSize: "20px" }}></i>
              </a>
              <a href="https://www.instagram.com/zerodhaonline/">
                <i className="fab fa-instagram" style={{ color: "#6c757d", fontSize: "20px" }}></i>
              </a>
              <a href="https://www.linkedin.com/company/zerodha/">
                <i className="fab fa-linkedin" style={{ color: "#6c757d", fontSize: "20px" }}></i>
              </a>
            </div>

            {/* Divider */}
            <hr style={{ width: "60px", margin: "15px 0", border: "1px solid #e0e0e0" }} />

            {/* Social Row 2 */}
            <div className="d-flex gap-3">
              <a href="https://www.youtube.com/@zerodhaonline">
                <i className="fab fa-youtube" style={{ color: "#6c757d", fontSize: "20px" }}></i>
              </a>
              <a href="https://www.whatsapp.com/channel/0029Va8tzF0EquiIIb9j791g">
                <i className="fab fa-whatsapp" style={{ color: "#6c757d", fontSize: "20px" }}></i>
              </a>
              <a href="https://t.me/zerodhain">
                <i className="fab fa-telegram" style={{ color: "#6c757d", fontSize: "20px" }}></i>
              </a>
            </div>
          </div>

          {/* Account */}
          <div className="col-md-2">
            <p style={{ fontWeight: "bold" }}>Account</p>
            {[
              ["Open demat account", "https://zerodha.com/open-account/"],
              ["Minor demat account", "https://zerodha.com/open-account/minor/"],
              ["NRI demat account", "https://zerodha.com/open-account/nri/"],
              ["Commodity", "https://zerodha.com/commodities/"],
              ["Dematerialisation", "https://zerodha.com/dematerialise/"],
              ["Fund transfer", "https://zerodha.com/fund-transfer/#tab-deposit_funds"],
              ["MTF", "https://zerodha.com/mtf/"],
              ["Referral program", "https://zerodha.com/refer/"],
            ].map(([text, url]) => (
              <a key={text} href={url} style={{
                display: "block",
                textDecoration: "none",
                color: "#6c757d",
                marginBottom: "6px"
              }}>{text}</a>
            ))}
          </div>

          {/* Support */}
          <div className="col-md-2">
            <p style={{ fontWeight: "bold" }}>Support</p>
            {[
              ["Contact us", "https://zerodha.com/contact/"],
              ["Support portal", "https://support.zerodha.com/"],
              ["How to file a complaint?", "https://support.zerodha.com/category/your-zerodha-account/your-profile/ticket-creation/articles/how-do-i-create-a-ticket-at-zerodha"],
              ["Status of your complaints", "https://support.zerodha.com/category/your-zerodha-account/your-profile/ticket-creation/articles/track-complaints-or-tickets"],
              ["Bulletin", "https://zerodha.com/marketintel/bulletin/"],
              ["Circular", "https://zerodha.com/marketintel/circulars/"],
              ["Z-Connect blog", "https://zerodha.com/z-connect/"],
              ["Downloads", "https://zerodha.com/resources/"],
            ].map(([text, url]) => (
              <a key={text} href={url} style={{
                display: "block",
                textDecoration: "none",
                color: "#6c757d",
                marginBottom: "6px"
              }}>{text}</a>
            ))}
          </div>

          {/* Company */}
          <div className="col-md-2">
            <p style={{ fontWeight: "bold" }}>Company</p>
            {[
              ["About", "https://zerodha.com/about/"],
              ["Philosophy", "https://zerodha.com/about/philosophy/"],
              ["Press & media", "https://zerodha.com/media/"],
              ["Careers", "https://careers.zerodha.com/"],
              ["Zerodha Cares (CSR)", "https://zerodha.com/cares/"],
              ["Zerodha.tech", "https://zerodha.tech/"],
              ["Open source", "https://zerodha.com/open-source/"],
            ].map(([text, url]) => (
              <a key={text} href={url} style={{
                display: "block",
                textDecoration: "none",
                color: "#6c757d",
                marginBottom: "6px"
              }}>{text}</a>
            ))}
          </div>

          {/* Quick links */}
          <div className="col-md-3">
            <p style={{ fontWeight: "bold" }}>Quick links</p>
            {[
              ["Upcoming IPOs", "https://zerodha.com/ipo/"],
              ["Brokerage charges", "https://zerodha.com/charges/#tab-equities"],
              ["Market holidays", "https://zerodha.com/marketintel/holiday-calendar/"],
              ["Economic calendar", "https://zerodha.com/markets/calendar/"],
              ["Calculators", "https://zerodha.com/calculators/"],
              ["Markets", "https://zerodha.com/markets/stocks/"],
              ["Sectors", "https://zerodha.com/markets/sector/"],
            ].map(([text, url]) => (
              <a key={text} href={url} style={{
                display: "block",
                textDecoration: "none",
                color: "#6c757d",
                marginBottom: "6px"
              }}>{text}</a>
            ))}
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="mt-5 text-muted " style={{ fontSize: "10px", lineHeight: "1.6" }}>
          Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href="mailto:complaints@zerodha.com" style={{textDecoration:'none'}}>complaints@zerodha.com</a>, for DP related to <a href="mailto:dp@zerodha.com" style={{textDecoration:'none'}}>dp@zerodha.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
          <br /><br />
          Procedure to file a complaint on <a href="https://scores.gov.in/scores/Welcome.html" style={{textDecoration:'none'}}>SEBI SCORES</a>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
          <br /><br />
          <a href="https://smartodr.in/" style={{textDecoration:'none'}}>Smart Online Dispute Resolution</a> | <a href="https://scores.gov.in/scores/Welcome.html" style={{textDecoration:'none'}}>Grievances Redressal Mechanism</a>
          <br /><br />
          Investments in securities market are subject to market risks; read all the related documents carefully before investing.
          <br /><br />
          Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
          <br /><br />
          India's largest broker based on network as per NSE. <a href="https://www.nseindia.com" style={{textDecoration:'none'}}>NSE broker factsheet</a>
          <br /><br />
          "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <a href="https://support.zerodha.com" style={{textDecoration:'none'}}>create a ticket here</a>.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
