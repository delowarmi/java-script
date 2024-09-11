// function mi(){
//         let x = 900
//         let y =50 
//         let z = x*y
//         let result = z

//         console.log(result);
// }
// mi()

// let colorList = ["red","green","yellow","orange","blue","sky","gray","black","white"]

// // for( let i = 0; i < colors.length; i++*i++){
// //     console.log(colors [i] );
// }

// colors.map((item) => {
//         console.log(item);

// })
// colors.forEach((item) => {
//         console.log(item);

// })
let memberList = ["red","green","yellow","orange","blue","sky","gray","black","white"]

function gattings(members){
        let Utterance = new SpeechSynthesisUtterance('welcom! ${members}');
        window.speechSynthesis.speak(Utterance);

}
for ( let i = 0; i < memberList.length; i++ ){

        gattings(memberList [i]);
}

 