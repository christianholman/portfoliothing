import React from "react"

export default class SocialMedia extends React.Component {

    
    medias = [
        {
            'name': 'Twitter',
            'icon': 'fab fa-twitter',
            'url': 'https://twitter.com/bigluxio',
        },
        {
            'name': 'Github',
            'icon': 'fab fa-github',
            'url': 'https://github.com/christianholman',
        },
        {
            'name': 'Linkedin',
            'icon': 'fab fa-linkedin',
            'url': 'https://www.linkedin.com/in/christianholman/',
        },
        {
            'name': 'E-mail',
            'icon': 'fas fa-envelope',
            'url': 'mailto:chrisholm2@yahoo.com',
        }
    ]



    render() {
        return (
            <div>
                {
                    this.medias.map((media) => {
                        return (
                            <a href={media.url} target="_blank" className="social-media-icon">
                                <i className={media.icon}></i>
                            </a>
                        )
                    })
                }
            </div>
        )
    }
}