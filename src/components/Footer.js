import React from 'react'
import './Footer.css'
export const Footer = () => {
  return (
    <div className=' mt-5 '>
      <div className='container mybg '>
          <div class="row">
             <div class="col-sm-8">
               <ul class=" d-flex">
                <li class="list-group-item px-1 h4">English | FR-Canada</li>
                <li class="list-group-item px-2">Support</li>
                <li class="list-group-item px-2">EKalakaar Data Privacy Notice</li>
                <li class="list-group-item px-2">Accessbility </li>
                <li class="list-group-item px-2">Legal Policies </li>
              </ul>
            </div>
          <div class="col-sm-4">
            <div className='d-flex justify-content-end'>
              <span class="fa-stack fa-lg">
                <i class="fa fa-circle fa-stack-2x"></i>
                <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
              </span>
              <span class="fa-stack fa-lg">
                <i class="fa fa-circle fa-stack-2x"></i>
                <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
              </span>
              <span class="fa-stack fa-lg">
                <i class="fa fa-circle fa-stack-2x"></i>
                <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
              </span>
              <span class="fa-stack fa-lg">
                <i class="fa fa-circle fa-stack-2x"></i>
                <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
              </span>
          </div>
        </div>
      </div>
      </div>
      <div className='container d-flex justify-content-end pt-3 pb-4 '>
            <li class="list-group-item px-2">Your privacy choices</li>
                <li class="list-group-item px-2">Privacy</li>
                <li class="list-group-item px-2">Trademark</li>

                <li class="list-group-item px-2">Terms of use EKalakaar</li>
                
      </div>
    </div>
  )
}
