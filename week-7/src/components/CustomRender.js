function generateHTML(element){
    return `<${element.type} href="${element.href}" target="_blank">${element.text}</${element.type}>`
}

function customRender(element,targetSelector){
    const targetElement=document.querySelector(targetSelector);
    if(targetElement){
        targetElement.innerHTML=generateHTML(element);
    }
}

export {customRender}