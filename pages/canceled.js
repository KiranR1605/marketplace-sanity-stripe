import React from 'react'
import Link from 'next/link'
import { BsBagXFill } from 'react-icons/bs'

const Canceled = () => {
    return (
        <div className="success-wrapper">
            <div className="success">
                <p className="cancel-icon">
                    <BsBagXFill />
                </p>
                <h2>The payment could not be processed.</h2>
                <p className="email-msg">Return to cart and Try Again!</p>
                <p className="description">
                    If you have any questions, please email
                    <a className="email" href="mailto:order@example.com">
                        order@example.com
                    </a>
                </p>
                <Link href="/">
                    <button type="button" width="300px" className="btn">
                        Home
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Canceled