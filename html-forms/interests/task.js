const interests = document.querySelectorAll('.interest__check')

for (let interest of interests) {

    interest.addEventListener('change' , (event) => {

        if (interest.closest('.interests').previousElementSibling === null) {
            
            setCheckBoxValue(event)

        } else {
            if (event.target.parentElement.nextElementSibling !== null){
                
                setCheckBoxValue(event)
            }
        }

    })
}

function setCheckBoxValue(event) {
    const childCheckBoxes = event.target.parentElement.nextElementSibling.querySelectorAll('.interest__check')
    for (checkBox of childCheckBoxes) {
            checkBox.checked = event.target.checked
        }
}

