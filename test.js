const createElement=(arr)=>{
    const htmlelements = arr.map(el => `<span class="btn">${el}</span>`)
    console.log(htmlelements.join(''));
};


const synonyms = ["hello", "hi", "How"];
createElement(synonyms);