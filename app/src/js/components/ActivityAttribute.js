import React from "react";

export default class ActivityAttribute extends React.Component {
    render() {
        const {title, item} = this.props;
        const renderAttribute = () => {
            {/* Check if attrobute is of selfie */}
            if(title === 'selfie') {                
                return (
                    <div>                        
                        <div className='title'>{title}</div>
                        {/* Check if selfie is required and does not have a value - render placeholder selfie if true */}
                        {item !== true ? <img src={item} /> : <div className="icon-user_selfie_ph_medium"></div> }
                    </div>
                )
            } else {
                return (
                    <div>
                        <div className='title'>{title.replace("-"," ")}</div>
                        <div className='name'>{item}</div>
                    </div>
                )
            }
        }

        return(
            <div className='attribute'>
                {renderAttribute()}
            </div>
        )
    }
}