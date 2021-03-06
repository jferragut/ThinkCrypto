import React from 'react';


export class AdBarZone extends React.Component{
    
    constructor(){
        
        super();   //call the super constructor 

    }
    
    //Prototype of what an Ad is
    createAd(adImage, adURL, adPosition, imageWidth, imageHeight){
        return {
          image: this.props.createAd.image, 
          url: this.props.createAd.url,
          position: this.props.createAd.position,
          width: this.props.createAd.width,
          height: this.props.createAd.height
        };
      }
        
    render(){
        // debugger;
        var orderClassName = "order-2";
        var usedClasses = "adSideBar d-none col-md-2 d-md-inline-block" + " " + orderClassName;  //set initial value of usedClasses for the Ad
        
        // Determine if the Ad should be right or left and then set the appropriate class
        if(this.createAd.position=="right"){
            orderClassName = "order-1";
        }
        else if(this.createAd.position=="left"){
            orderClassName = "order-2";
        }
        
        //set initial value of theStyles
        var theStyles = {
            width: this.createAd.width,
            height: this.createAd.height,
            background: this.createAd.image
        };
        
  
        return(
            <div id="adBarZone" style={theStyles} className={usedClasses} onClick={this.createAd.url}>
            
            </div>  
            );
    }

}