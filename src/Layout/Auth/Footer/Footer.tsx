import React from 'react'

const Footer = () => {
  return (

    <footer className="footer">
    <div className="">
        <div className="row h-100">
            <div className="col-sm-6 text-dark my-auto">
                <div className="top">
                    <script>document.write(new Date().getFullYear())</script> © Department of training and development
               </div>
            </div>
            <div className="col-sm-6 my-auto">
                <div className="bottom text-sm-right text-secondary">
                    Powered by Nigeria Police Force
                     <img src="assets/img/pplogo.png" className="w-25"/>
                </div>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer
