import React from "react";

const Hero = ({data}) => {
  return (
    <div>
            <div>
                <p>{data.name}</p>
            </div>
            <div>
                <p>{data.emoji}</p>
            </div>
            {/* <div>
                <p>{data.languages.name}</p>
            </div> */}
    </div>
  )
}
export default Hero




