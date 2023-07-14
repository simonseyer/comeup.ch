const iconExpand = "fa-up-right-and-down-left-from-center"
const iconCollapse = "fa-down-left-and-up-right-to-center"

for (const button of document.querySelectorAll("button.expand")) {
    button.querySelector("i").classList.add(iconExpand)
    button.classList.add("active")
    button.onclick = function(){
        toggleExpansion(this)
    };
}

for (const button of document.querySelectorAll(".collapsable")) {
    button.classList.add("collapsed")
}


for (const button of document.querySelectorAll(".expandable")) {
    button.classList.remove("collapsed")
}

function toggleExpansion(element) {
    const section = element.closest(".subsection")
    const icon = element.querySelector("i")
    const expand = icon.classList.contains(iconExpand)

    for (const element of section.querySelectorAll(".collapsable")) {
        if (expand) {
            element.classList.remove("collapsed")
        } else {
            element.classList.add("collapsed")
        }
    }

    for (const element of section.querySelectorAll(".expandable")) {
        if (expand) {
            element.classList.add("collapsed")
        } else {
            element.classList.remove("collapsed")
        }
    }

    if (expand) {
        icon.classList.remove(iconExpand)
        icon.classList.add(iconCollapse)
    } else {
        icon.classList.remove(iconCollapse)
        icon.classList.add(iconExpand)
    }
}