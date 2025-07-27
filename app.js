function lightUp(id) {
  const element = document.getElementById(id);
    if (element) {
        // generate randome color
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    element.style.backgroundColor = randomColor;
    
    // element.style.backgroundColor = 'yellow';
    // element.style.color = 'black';
    }

}

function resetLight(id) {
  const element = document.getElementById(id);
  if (element) {
    element.style.backgroundColor = 'black';
    element.style.color = 'white';
  }
}



const globalObject = {
  counter: 1,
  isReverse: false,
  id: 1
}

function main(){
   
    if (globalObject.id ==11) {
     globalObject.id=10;
     globalObject.counter+=1
      globalObject.isReverse = true;
    }
    if (globalObject.id ==0) {
     globalObject.id=1;
    globalObject.isReverse = false;
    }
     if (globalObject.counter >3 ) {
       return;
    }
setTimeout(() => {
    if (globalObject.isReverse) {
      resetLight(globalObject.id);
      globalObject.id-=1
    } else {
        lightUp(globalObject.id);
        globalObject.id+=1;
    }

    main();
  
},100)

}

main()