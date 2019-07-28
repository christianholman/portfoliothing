import React from "react"

import Layout from '../components/layout'
import SocialMedia from "../components/socialmedia";

export default class ContactPage extends React.Component {
    render() {
        return (
            <Layout>
                <span className="text-xl sm:text-2xl text-blackish"><span className="underlined font-bold">Get in touch</span></span>
                <p className="text-lg sm:text-xl text-blackish font-light mt-2">
                    If you would like to work with me, or speak with me for any reason, feel free to hit me up on any social media below or by e-mail at <a className="underlined underlined-blue" href="mailto:chrisholm2@yahoo.com">chrisholm2@yahoo.com</a>
                    <br/>
                </p>
                <SocialMedia className="text-xl"/>
            </Layout>
        );
    }
}