import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";



function createEntry(emojiTerm){
  return(
    <Entry
    key = {emojiTerm.id}
    emoji = {emojiTerm.emoji}
    name = {emojiTerm.name}
    description = {emojiTerm.meaning}
    
    />
  )
}


function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {
          // emojipedia.map(emoji => { 
          //   return(
          //     <Entry
          //     key = {emoji.id}
          //     emoji = {emoji.emoji}
          //     name = {emoji.name}
          //     description = {emoji.meaning}
              
          //     />
          //   )
          // } )
          // emojipedia.map(emoji => (
          //   <Entry
          //   key = {emoji.id}
          //   emoji = {emoji.emoji}
          //   name = {emoji.name}
          //   description = {emoji.meaning}
            
          //   />
          // ))
         // emojipedia.map(emoji => createEntry(emoji))

            emojipedia.map(createEntry)
         
        }
       
      </dl>
    </div>
  );
}

export default App;
