import React,{Component}  from 'react';




class Titles extends Component {
    render(){
        return(

            <div>
                <h1 className="title-container__title grow hover-bg-light-red cursor"> Weather Finder</h1>
                <p className="title-container__subtitle"> <b>Find Weather by City and Country</b></p>
            </div>




        );

    }
}


export default Titles;