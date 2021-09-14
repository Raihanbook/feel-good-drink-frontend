import { useEffect } from "react";

const Privacy = () => {

    useEffect(() => {

        // Makes the site jump to the top of new pages when links are clicked
        window.scroll({
            top: 0,
            left: 0,
        });

    }, []);

    return (
        <div className="container-fluid">
            {/* Header section for the Privacy Policy page */}
            <div className="row mt-4 align-items-center">
                <div className="col-12 text-left">
                    <h1 className="pageTitle">Privacy Policy</h1>
                </div>
                <div className="col-12 p-0">
                    <hr style={{ borderTop: '2px solid #b8b8b8' }} /> {/* Divider under page title */}
                </div>
            </div>
            <div className="row text-left align-items-center privacy-content">
                <div className="col-lg-8 col-md-10 col-sm-12">
                    <div className="privacySection">
                        <h5><strong>1. INTRODUCTION</strong></h5>
                        <p><strong>1.1</strong> This Privacy Policy explains how Feel Good Drinks collects information from you when you visit or register to use feelgooddrinks.com or feelgooddrinks.co.uk (the "Website") and how this information is then used. If you have any questions about this statement or any personal information that we may collect from you, please contact us at <a href="mailto:hello@feelgooddrinks.com">hello@feelgooddrinks.com</a></p>
                        <p><strong>1.2</strong> Please read this Privacy Policy carefully and re-visit this page from time to time to review any changes that may have been made.</p>
                        <p><strong>1.3</strong> We are registered as a data controller in accordance with the Data Protection Act 2018. We will process any personal information we collect in accordance with the Data Protection Act 2018.</p>
                        <p><strong>1.4</strong> This Privacy Policy applies to you whether you use the Website as a casual browser, have registered to use the Website or have entered into a contract with Feel Good Drinks in relation to the supply of specific services and/or products. In the event of any conflict between this Privacy Policy and the terms of a contract you have with Feel Good Drinks, the relevant provision of that contract shall prevail to the extent of any inconsistency.</p>
                    </div>
                    <div className="privacySection">
                        <h5><strong>2. WHAT PERSONAL INFORMATION DOES FEEL GOOD DRINKS COLLECT?</strong></h5>
                        <p><strong>2.1</strong> You will decide what personal data to provide. You may give us information about you by filling in forms on our site or by corresponding with us by phone, e-mail or otherwise. This includes, for example, information you provide when you register to use our site, subscribe to our services, log into the secure facility on our site and when you report a problem with our site. The information you give us may include your name, address, e-mail address and phone number, credit card information, personal description and physical address.</p>
                    </div>
                    <div className="privacySection">
                        <h5><strong>3. HOW WILL WE USE ANY PERSONAL INFORMATION?</strong></h5>
                        <p><strong>3.1</strong> We may employ the services of a third party to help us in certain areas, such as website hosting or fulfilment of our online store orders. In some cases that third party may receive your information. However, at all times we will control and be responsible for the use of your information.</p>
                        <p><strong>3.2</strong> At all times we will collect, retain and process any personal information that you provide in accordance with the Data Protection Act 2018. Each time you provide us with personal information we will let you know how we intend to use it and ask you to give your consent to such use. This may include:</p>
                        <div className="indent">
                            <p><strong>(a)</strong> where we would like to use that information to send you details of other products and services we offer which are similar to the product/service for which you have subscribed; and</p>
                            <p><strong>(b)</strong> where we would like to share that information with certain selected third parties to allow them to provide you with details of their services and/or products which might be of interest to you.</p>
                        </div>
                    </div>
                    <div className="privacySection">
                        <h5><strong>4. HOW DOES FEEL GOOD DRINKS PROTECT YOUR PERSONAL INFORMATION?</strong></h5>
                        <p><strong>4.1</strong> We will hold your personal information securely and will only keep it for as long you are registered to use the Website or for as long as you use the service that you have requested, unless you have provided us with your consent to use the data for any additional purposes. We take the security of the Website and the information you provide very seriously and we will take all appropriate technical measures using recognised security procedures and tools in accordance with good industry practice to protect your personal information.</p>
                        <p><strong>4.2</strong> Whilst we use all reasonable endeavours to protect your security in the manner described above, you need to know that data transmission over the Internet and the World Wide Web cannot always be guaranteed as 100% secure, and therefore that you use the Website at your own risk.</p>
                    </div>
                    <div className="privacySection">
                        <h5><strong>5. DOES FEEL GOOD DRINKS USE COOKIES?</strong></h5>
                        <p><strong>5.1</strong> Your Internet browser has a feature called "cookies" which store small amounts of data on your computer about your visit to the Website. You do not need to have cookies turned on to visit most of the Website. A cookie will not provide us with any personal information. Therefore, if you have not supplied us with any personal information, you can still browse our site anonymously.</p>
                        <p><strong>5.2</strong> We do not automatically capture or store personal data from browsers to the site, other than to log your IP address and session information such as the duration of the visit to our site and the nature of the browser used. This information is used only for administration of the site system and in the compilation of statistics used by Feel Good Drinks.</p>
                        <p><strong>5.3</strong> The majority of browsers will allow you to alter the settings used for cookies and to disable and enable them as you require. If you do not want cookies then please refer to the help menu on your browser for instructions on disabling them. For further general information on cookies and more detailed advice on how to disable and enable them please go to <a href="https://www.allaboutcookies.org" target="_blank" rel="noreferrer">allaboutcookies.org</a></p>
                    </div>
                    <div className="privacySection">
                        <h5><strong>6. CHANGES TO THIS PRIVACY POLICY</strong></h5>
                        <p><strong>6.1</strong> If we make any changes to this Privacy Policy these changes will be detailed on this page in order to ensure that you are fully aware of what information is collected, how it is used and under what circumstances it will be disclosed.</p>
                    </div>
                    <div className="privacySection">
                        <h5><strong>7. Links</strong></h5>
                        <p><strong>7.1</strong> This Privacy Policy applies only to information collected by this Website. The Website may contain links to other websites. Please be aware that we are not responsible for the privacy policies of such other sites and we would advise you to read the privacy statement of any website that collects personal information from you.</p>
                        <p>© Feel Good Drinks 2020</p>
                        <p>2009 – Vimto soft drinks. Vimto is a registered trade mark.</p>
                        <p>Updated 21ST July 2020 – an update to point 2.1 of this document allowing for the introduction of a Feel Good online store and the personal information we will collect.</p>
                    </div>
                </div>
            </div>
        </div>
        // All textual content from: Feel Good Drinks. n.d. "Privacy Policy." Feel Good Drinks. Accessed August 1, 2021. https://feelgooddrinks.com/pages/privacy-policy. 
    );
}

export default Privacy;