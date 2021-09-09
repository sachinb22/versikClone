import React from 'react'
import "./style.scss"
const WhatWeDo = () => {
    return (
        <section className="what-we-do" id="what-we-do">
            <h2 className="title">What we do</h2>
            <div className="desc">
                <div className="history">
                    <p> Since 2009, Verisk Nepal has provided software development and product delivery services to Verisk’s businesses, including ISO and Argus.</p>

                    <p>We’re focused on software projects and business operations. We consider our internal clients’ objectives and requirements from both a business and technology perspective. Plus, we collaborate with Verisk’s businesses through all stages of a project, from team development and management to final delivery.</p>

                    <p>We use standard software development technology, including Waterfall, Agile, ScrumXP, Kanban, and Kaizen; and we customize solutions based on business needs. We offer risk assessment services and software solutions across product lines. We’re involved in the design, development, testing, and maintenance of our internal clients’ software and applications.</p>
                </div>
                <div className="feature">
                    <div className="feature-item">
                        <span class="material-icons">
                            check_circle
                        </span>
                        Scalable software development solutions
                    </div>
                    <div className="feature-item">
                        <span class="material-icons">
                            check_circle
                        </span>
                        Certified and experienced IT engineers and analysts
                    </div>
                    <div className="feature-item">
                        <span class="material-icons">
                            check_circle
                        </span>
                        Industry-standard process management
                    </div>
                    <div className="feature-item">
                        <span class="material-icons">
                            check_circle
                        </span>
                        Collaborative development
                    </div>
                    <div className="feature-item">
                        <span class="material-icons">
                            check_circle
                        </span>
                        Enterprise security compliance
                    </div>
                </div>
            </div>
        </section>
    )
}
export default WhatWeDo