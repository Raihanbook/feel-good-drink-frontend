import { useState, useEffect } from "react";

// Makes the site jump to the top of new pages when links are clicked
const Terms = () => {

    useEffect(() => {

        window.scroll({
            top: 0,
            left: 0,
        });

    }, []);

    return (
        <div className="container-fluid">
            {/* Header section for the Terms and Conditions page */}
            <div className="row mt-4 align-items-center">
                <div className="col-12 text-left">
                    <h1 className="pageTitle">Terms & Conditions</h1>
                </div>
                <div className="col-12 p-0">
                    <hr style={{ borderTop: '2px solid #b8b8b8' }} /> {/* Divider under title */}
                </div>
            </div>
            <div className="row text-left align-items-center terms-content">
                <div className="col-lg-8 col-md-10 col-sm-12">
                    <div className="terms-section">
                        <h5><strong>PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY BEFORE USING THIS SITE</strong></h5>
                        <p>This terms of use (together with the documents referred to in it) tells you the terms of use on which you may make use of our website www.feelgooddrinks.com (our site) and any of our applications from time to time (apps), whether as a guest or a registered user. Use of our site and apps includes accessing, browsing, downloading or registering to use our site.</p>
                        <p>Please read these terms of use carefully before you start to use our site or apps, as these will apply to your use of our site and apps. We recommend that you print a copy of this for future reference.</p>
                        <p>By using our site and apps, you confirm that you accept these terms of use and that you agree to comply with them.</p>
                        <p>If you do not agree to these terms of use, you must not use our site or apps.</p>
                    </div>
                    <div className="terms-section">
                        <h5><strong>OTHER APPLICABLE TERMS</strong></h5>
                        <p>These terms of use refer to the following additional terms, which also apply to your use of our site and apps:</p>
                        <ul>
                            <li>Our Privacy Policy, which sets out the terms on which we process any personal data we collect from you, or that you provide to us. By using our site or apps, you consent to such processing and you warrant that all data provided by you is accurate.</li><br></br>
                            <li>Our Acceptable Use Policy, (which forms part of these terms of use and is set out in detail below), which sets out the permitted uses and prohibited uses of our site and apps. When using our site or apps, you must comply with this Acceptable Use Policy.</li><br></br>
                            <li>Our Cookie Policy, which sets out information about the cookies on our site.</li><br></br>
                            <li>The Terms and Conditions upon which we provide our services and products to you.</li>
                        </ul>
                    </div>
                    <div className="terms-section">
                        <h5><strong>INFORMATION ABOUT US</strong></h5>
                        <p>Feelgooddrinks.com is a site operated by Nichols plc, Newton-le-Willows, WA12 0HH, UK</p>
                    </div>
                    <div className="terms-section">
                        <h5><strong>CHANGES TO THESE TERMS</strong></h5>
                        <p>We may revise these terms of use at any time by amending this page.</p>
                        <p>Please check this page from time to time to take notice of any changes we made, as they are binding on you.</p>
                    </div>
                    <div className="terms-section">
                        <h5><strong>CHANGES TO OUR SITE AND APPS</strong></h5>
                        <p>We may update our site and apps from time to time, and may change the content at any time. However, please note that any of the content on our site or apps may be out of date at any given time, and we are under no obligation to update it.</p>
                        <p>We do not guarantee that our site and apps, or any content on them, will be free from errors or omissions.</p>
                    </div>
                    <div className="terms-section">
                        <h5><strong>ACCESSING OUR SITE AND APPS</strong></h5>
                        <p>Our site is made available free of charge.</p>
                        <p>We do not guarantee that our site and apps, or any content on them, will always be available or be uninterrupted. Access to our site and apps is permitted on a temporary basis. We may suspend, withdraw, discontinue or change all or any part of our site or apps without notice. We will not be liable to you if for any reason our site or apps are unavailable at any time or for any period.</p>
                        <p>You are responsible for making all arrangements necessary for you to have access to our site and apps. You are also responsible for ensuring that all persons who access our site and apps through your internet connection are aware of these terms of use and other applicable terms and conditions, and that they comply with them.</p>
                    </div>
                    <div className="terms-section">
                        <h5><strong>YOUR ACCOUNT AND PASSWORD</strong></h5>
                        <p>If you choose, or you are provided with, a user identification code, password or any other piece of information as part of our security procedures, you must treat such information as confidential. You must not disclose it to any third party.</p>
                        <p> We have the right to disable any user identification code or password, whether chosen by you or allocated by us, at any time, if in our reasonable opinion you have failed to comply with any of the provisions of these terms of use.</p>
                        <p>If you know or suspect that anyone other than you knows your user identification code or password, you must promptly notify us at <a href="mailto:hello@feelgooddrinks.com">hello@feelgooddrinks.com</a></p> {/* Makes email open in email program */}
                    </div>
                    <div className="terms-section">
                        <h5><strong>INTELLECTUAL PROPERTY RIGHTS</strong></h5>
                        <p>We are the owner or the licensee of all intellectual property rights in our site and apps, and in the material published on or in them. Those works are protected by copyright laws and treaties around the world. All such rights are reserved.</p>
                        <p>You may print off one copy, and may download extracts, of any page(s) from our site or apps for your personal use and you may draw the attention of others within your organisation to content posted on our site or in our apps.</p>
                        <p>You must not modify the paper or digital copies of any materials you have printed off or downloaded in any way, and you must not use any illustrations, photographs, video or audio sequences or any graphics separately from any accompanying text.</p>
                        <p>Our status (and that of any identified contributors) as the authors of content on our site or in our apps must always be acknowledged.</p>
                        <p>You must not use any part of the content on our site or in our apps for commercial purposes without obtaining a licence to do so from us or our licensors.</p>
                        <p>If you print off, copy or download any part of our site or apps in breach of these terms of use, your right to use our site and apps will cease immediately and you must, at our option, return or destroy any copies of the materials you have made.</p>
                    </div>
                    <div className="terms-section">
                        <h5><strong>NO RELIANCE ON INFORMATION</strong></h5>
                        <p>The content on our site is provided for general information only. It is not intended to amount to advice on which you should rely. You must obtain professional or specialist advice before taking, or refraining from, any action on the basis of the content on our site.</p>
                        <p>Although we make reasonable efforts to update the information on our site, we make no representations, warranties or guarantees, whether express or implied, that the content on our site is accurate, complete or up-to- date.</p>
                    </div>
                    <div className="terms-section">
                        <h5><strong>LIMITATION OF OUR LIABILITY</strong></h5>
                        <p>Nothing in these terms of use excludes or limits our liability for death or personal injury arising from our negligence, or our fraud or fraudulent misrepresentation, or any other liability that cannot be excluded or limited by English law.</p>
                        <p>To the extent permitted by law, we exclude all conditions, warranties, representations or other terms which may apply to our site or any content on it, whether express or implied.</p>
                        <p>We will not be liable to any user for any loss or damage, whether in contract, tort (including negligence), breach of statutory duty, or otherwise, even if foreseeable, arising under or in connection with:</p>
                        <ul>
                            <li>use of, or inability to use, our site or apps; or</li><br></br>
                            <li>use of or reliance on any content displayed on our site or in our apps.</li>
                        </ul>
                        <p>If you are a business user, please note that in particular, we will not be liable for:</p>
                        <ul>
                            <li>loss of profits, sales, business, or revenue;</li><br></br>
                            <li>business interruption;</li><br></br>
                            <li>loss of anticipated savings;</li><br></br>
                            <li>loss of business opportunity, goodwill or reputation; or</li><br></br>
                            <li>any indirect or consequential loss or damage.</li>
                        </ul>
                        <p>If you are a consumer user, please note that we only provide our site and apps for domestic and private use. You agree not to use our site or apps for any commercial or business purposes, and we have no liability to you for any loss of profit, loss of business, business interruption, or loss of business opportunity.</p>
                        <p>We will not be liable for any loss or damage caused by a virus, distributed denial-of- service attack, or other technologically harmful material that may infect your computer equipment, computer programs, data or other proprietary material due to your use of our site or apps or to your downloading of any content on them, or on any website linked to them.</p>
                        <p>We assume no responsibility for the content of websites or apps linked on our site or our apps. Such links should not be interpreted as endorsement by us of those linked websites or apps. We will not be liable for any loss or damage that may arise from your use of them.</p>
                    </div>
                    <div className="terms-section">
                        <h5><strong>VIRUSES</strong></h5>
                        <p>We do not guarantee that our site or apps will be secure or free from bugs or viruses. You are responsible for configuring your information technology, computer programmes and platform in order to access our site and apps. You should use your own virus protection software.</p>
                        <p>You must not misuse our site or apps by knowingly introducing viruses, trojans, worms, logic bombs or other material which is malicious or technologically harmful. You must not attempt to gain unauthorised access to our site or apps, the server on which our site is stored or any server, computer or database connected to our site or apps. You must not attack our site or apps via a denial-of- service attack or a distributed denial-of service attack. By breaching this provision, you would commit a criminal offence under the Computer Misuse Act 1990. We will report any such breach to the relevant law enforcement authorities and we will co- operate with those authorities by disclosing your identity to them. In the event of such a breach, your right to use our site and apps will cease immediately.</p>
                    </div>
                    <div className="terms-section">
                        <h5><strong>LINKING TO OUR SITE</strong></h5>
                        <p>You may link to our home page, provided you do so in a way that is fair and legal and does not damage our reputation or take advantage of it.</p>
                        <p>You must not establish a link in such a way as to suggest any form of association, approval or endorsement on our part where none exists.</p>
                        <p>You must not establish a link to our site in any website that is not owned by you. Our site must not be framed on any other site, nor may you create a link to any part of our site other than the home page.</p>
                        <p>We reserve the right to withdraw linking permission without notice.</p>
                        <p>The website in which you are linking must comply in all respects with the content standards set out in our Acceptable Use Policy.</p>
                        <p>If you wish to make any use of content on our site or in our apps other than that set out above, please contact <a href="mailto:hello@feelgooddrinks.com">hello@feelgooddrinks.com</a></p> {/* Makes email open in email program */}
                    </div>
                    <div className="terms-section">
                        <h5><strong>ACCEPTABLE USE POLICY</strong></h5>
                        <p>This Acceptable Use Policy sets out the terms between you and us under which you may access our site and apps and applies to all users of, and visitors to, our site and apps.</p>
                    </div>
                    <div className="terms-section">
                        <h5><strong>PROHIBITED USES</strong></h5>
                        <p>You may use our site and apps only for lawful purposes. You may not use our site and apps:</p>
                        <ul>
                            <li>In any way that breaches any applicable local, national or international law or regulation.</li><br></br>
                            <li>In any way that is unlawful or fraudulent, or has any unlawful or fraudulent purpose or effect.</li><br></br>
                            <li>For the purpose of harming or attempting to harm minors in any way.</li><br></br>
                            <li>To send, knowingly receive, upload, download, use or re-use any material which does not comply with our content standards.</li><br></br>
                            <li>To transmit, or procure the sending of, any unsolicited or unauthorised advertising or promotional material or any other form of similar solicitation (spam).</li><br></br>
                            <li>To knowingly transmit any data, send or upload any material that contains viruses, Trojan horses, worms, time-bombs, keystroke loggers, spyware, adware or any other harmful programs or similar computer code designed to adversely affect the operation of any computer software or hardware.</li>
                        </ul>
                        <p>You also agree:</p>
                        <ul>
                            <li>Not to reproduce, duplicate, copy or re-sell any part of our site in contravention of the provisions of these terms of use.</li><br></br>
                            <li>Not to access without authority, interfere with, damage or disrupt:</li><br></br>
                            <li>any part of our site or apps;</li><br></br>
                            <li>any equipment or network on which our site is stored;</li><br></br>
                            <li>any software used in the provision of our site or apps; or</li><br></br>
                            <li>any equipment or network or software owned or used by any third party.</li>
                        </ul>
                    </div>
                    <div className="terms-section">
                        <h5 className="terms-section"><strong>SUSPENSION AND TERMINATION</strong></h5>
                        <p>We will determine, in our discretion, whether there has been a breach of this Acceptable Use Policy through your use of our site or apps. When a breach of this policy has occurred, we may take such action as we deem appropriate.</p>
                        <p>Failure to comply with this Acceptable Use Policy constitutes a material breach of these terms of use upon which you are permitted to use our site or apps, and may result in our taking all or any of the following actions:</p>
                        <ul>
                            <li>Immediate, temporary or permanent withdrawal of your right to use our site and apps.</li><br></br>
                            <li>Immediate, temporary or permanent removal of any posting or material uploaded by you to our site and apps.</li><br></br>
                            <li>Issue of a warning to you.</li><br></br>
                            <li>Legal proceedings against you for reimbursement of all costs on an indemnity basis (including, but not limited to, reasonable administrative and legal costs) resulting from the breach.</li><br></br>
                            <li>Further legal action against you.</li><br></br>
                            <li>Disclosure of such information to law enforcement authorities as we reasonably feel is necessary.</li><br></br>
                            <li>We exclude liability for actions taken in response to breaches of this Acceptable Use Policy. The responses described in this policy are not limited, and we may take any other action we reasonably deem appropriate.</li>
                        </ul>
                    </div>
                    <div className="terms-section">
                        <h5><strong>APPLICABLE LAW</strong></h5>
                        <p>If you are a consumer, please note that these terms of use, its subject matter and its formation, are governed by English law. You and we both agree to that the courts of England and Wales will have non-exclusive jurisdiction. However, if you are a resident of Northern Ireland you may also bring proceedings in Northern Ireland, and if you are resident of Scotland, you may also bring proceedings in Scotland.</p>
                        <p>If you are a business, these terms of use, its subject matter and its formation (and any non- contractual disputes or claims) are governed by English law. We both agree to the exclusive jurisdiction of the courts of England and Wales.</p>
                    </div>
                    <div className="terms-section">
                        <h5><strong>CHANGES TO THE TERMS OF WEBSITE USE POLICY</strong></h5>
                        <p>We may revise this terms of website use policy at any time by amending this page. You are expected to check this page from time to time to take notice of any changes we make, as they are legally binding on you. Some of the provisions contained in this terms of website use policy may also be superseded by provisions or notices published elsewhere on our site.</p>
                    </div>
                    <div className="terms-section">
                        <h5><strong>CONTACT US</strong></h5>
                        <p>To contact us, please email <a href="mailto:hello@feelgooddrinks.com">hello@feelgooddrinks.com</a></p> {/* Makes email open in email program */}
                        <p>Thank you for visiting our site.</p><br></br>
                    </div>
                </div>
            </div>
        </div>
        // All textual content on this page is from: Feel Good Drinks. n.d. "Terms & Conditions." Feel Good Drinks. Accessed August 1, 2021. https://feelgooddrinks.com/pages/terms-conditions.
    );
}

export default Terms;