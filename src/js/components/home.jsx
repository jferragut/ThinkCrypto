import React from 'react';


export class Home extends React.Component{
    
    render(){
        return(
            // Begin Carousel
          
            
            // Begin Sections
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-3">Fluid jumbotron</h1>
                    <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                </div>
            </div>
            
            <div class="jumbotron-fluid">
                <h1 class="display-3">Hello, world!</h1>
                <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr class="my-4">
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p class="lead">
                    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </p>
            </div>
            );
    }
    
}