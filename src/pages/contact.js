import React from "react"

import Layout from '../components/layout'
import SocialMedia from "../components/socialmedia";

import SEO from '../components/seo'
export default class ContactPage extends React.Component {
    render() {
        return (
            <Layout>
                <SEO
                    description="Christian Holman contact details and social medias."
                    title="Contact"
                    lang="en"
                />
                <span className="text-xl sm:text-2xl text-blackish"><span className="underlined font-bold">Get in touch</span></span>
                <p className="text-lg sm:text-xl text-blackish font-light mt-2">
                    If you would like to work with me, or speak with me for any reason, feel free to hit me up on any social media below or by e-mail at <a className="underlined underlined-blue" href="mailto:c.holman@zohomail.eu">c.holman@zohomail.eu</a>
                    <br/>
                </p>
                <div className="text-center w-full text-3xl p-5">
                    <SocialMedia />
                </div>
            </Layout>
        );
    }
}
