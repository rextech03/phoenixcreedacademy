import React from 'react'

export default function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-black fixed-bottom">
        <div className="container flex justify-between">
            <div>
            <span className="text-white">&copy; Phoenix Academy.</span>
            </div>
            <div className="flex space-x-3 ">
                <a className="text-white" href="/">Terms Of Use</a>
                <a className="text-white" href="/">Privacy Policy</a>  
            </div>
        </div>
        </footer>
  )
}
