import React from "react";

const Hero = ({data}) => {

  console.log(data.languages)
  var languages = data.languages

  var language_str = ''
  for (let i = 0; i < languages.length; i++) {
    language_str+=(languages[i].name+', ')
  }
  language_str = language_str.slice(0, -1)
  return (
    <div>
            <div>
                <p>Name: {data.name}</p>
            </div>
            <div>
                <p>Emoji: {data.emoji}</p>
            </div>

            <div>
                <p>Languages: {language_str}</p>
            </div>
            <br></br>

    </div>
  )
}
export default Hero




