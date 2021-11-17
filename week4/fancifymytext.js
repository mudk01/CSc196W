function biggifyText() {
    const textArea = document.getElementById('textArea')
    textArea.style.fontSize = "2em"
}

function checkedChange() {
    const textArea = document.getElementById('textArea')
    const fancyCheck = document.getElementById('fancy')
    const boringCheck = document.getElementById('boring')
    if (fancyCheck.checked) {
        textArea.style.fontWeight = 'bold'
        textArea.style.color = 'blue'
        textArea.style.textDecoration = 'underline'
    }
    else if (boringCheck.checked) {
        // textArea.attributeStyleMap.clear() || not fully supported yet
        textArea.style.fontWeight = ''
        textArea.style.color = ''
        textArea.style.textDecoration = ''
    }
}

function mooAdd() {
    const textArea = document.getElementById('textArea')
    let text = textArea.value
    let textParts = text.split(".")
    text = textParts.join('Moo.')
    textArea.value = text
}