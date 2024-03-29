const iconExpand = "fa-up-right-and-down-left-from-center"
const iconCollapse = "fa-down-left-and-up-right-to-center"

for (const button of document.querySelectorAll("button.expand")) {
    button.querySelector("i").classList.add(iconExpand)
    button.classList.add("active")
    button.onclick = function(){
        toggleExpansion(this)
    };
}

for (const section of document.querySelectorAll(".subsection")) {
    if (section.id == window.location.hash.substring(1)) {
        expandSection(section, true)
    } else {
        expandSection(section, false)
    }        
}

function toggleExpansion(element) {
    const toggledSection = element.closest(".subsection")
    const icon = element.querySelector("i")
    const expand = icon.classList.contains(iconExpand)

    for (const section of document.querySelectorAll(".subsection")) {
        if (section == toggledSection) {
            expandSection(section, expand)
        } else {
            expandSection(section, false)
        }        
    }

    if (expand) {
        window.location.hash = toggledSection.id
    } else {
        // Removes hash from URL without changing the scroll position
        history.replaceState(null, '', ' ');
    }

    // Workaround for Safari bug where the section is not redrawn correctly
    const isSafari = window.safari !== undefined
    if (isSafari) {
        const parentSection = toggledSection.closest(".section")
        parentSection.style.display = 'none'
        setTimeout(() => {
            parentSection.style.display = 'block'
        }, 0)
    }
}

function expandSection(section, expand) {
    const icon = section.querySelector("button i")
    if (icon == null) {
        return
    }
    
    for (const element of section.querySelectorAll(".collapsable")) {
        if (expand) {
            element.classList.remove("collapsed")
        } else {
            element.classList.add("collapsed")
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