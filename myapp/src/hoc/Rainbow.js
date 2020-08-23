import React from "react";

const Rainbow = (LowerOC) => {

    const textColor = "text-info";

    return (props) => {
        return(
            <div className={textColor}>
                <LowerOC {...props} />
            </div>
        )
    }
}

export default Rainbow;