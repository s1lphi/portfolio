document.addEventListener('DOMContentLoaded', () => {
    const toggleContainer = (btn, container, insContainer, insText, initialWidth, expandedWidth, isAboutMe = false) => {
        if (!btn || !container || !insContainer) return;
        let isClicked = false;

        btn.addEventListener('click', () => {
            if (!isClicked) {
                container.style.height = "150px";
                insContainer.style.opacity = "100%";
                insContainer.style[isAboutMe ? 'marginBottom' : 'marginTop'] = "20px";
                setTimeout(() => {
                    insContainer.style.width = expandedWidth;
                    setTimeout(() => insText.forEach(el => el.style.opacity = "100%"), 500);
                }, 500);
            } else {
                insText.forEach(el => el.style.opacity = "0");
                setTimeout(() => {
                    insContainer.style.width = initialWidth;
                    setTimeout(() => {
                        container.style.height = "20px";
                        insContainer.style.opacity = "0";
                        insContainer.style[isAboutMe ? 'marginBottom' : 'marginTop'] = "0";
                    }, 500);
                }, 500);
            }
            isClicked = !isClicked;
        });
    };

    const dragElement = (element, header) => {
        const onDrag = ({movementX, movementY}) => {
            let style = window.getComputedStyle(element);
            let left = parseInt(style.left) + movementX;
            let top = parseInt(style.top) + movementY;
            element.style.left = `${left}px`;
            element.style.top = `${top}px`;
        };

        header.addEventListener("mousedown", () => {
            header.classList.add("active");
            document.addEventListener("mousemove", onDrag);
        });

        document.addEventListener("mouseup", () => {
            header.classList.remove("active");
            document.removeEventListener("mousemove", onDrag);
        });
    };

    toggleContainer(
        document.getElementById('contactmebtn'),
        document.getElementById('contactmecontainer'),
        document.getElementById('contactmeinscontainer'),
        document.querySelectorAll('#contactinstext'),
        "121px", "350px"
    );
    
    toggleContainer(
        document.getElementById('abmebtn'),
        document.getElementById('aboutmecontainer'),
        document.getElementById('aboutmeinscontainer'),
        document.querySelectorAll('#aboutmeinstext'),
        "96px", "350px", true
    );

    dragElement(
        document.querySelector(".internet-container"),
        document.querySelector(".internet-container #draggable")
    );

    dragElement(
        document.querySelector(".abmewindow-container"),
        document.querySelector(".abmewindow-container #draggableabme")
    );

    
    function showElement(selector) {
        document.querySelector(selector).style.display = 'flex';
    }


    document.querySelector('.browser-container').addEventListener('dblclick', () => {
        showElement(".internet-container");
    });

    document.querySelector('.browser-container').addEventListener('touchend', () => {
        showElement(".internet-container");
    });

    document.querySelector('.browsertablet-container').addEventListener('dblclick', () => {
        showElement(".internet-container");
    });

    document.querySelector('.browsertablet-container').addEventListener('touchend', () => {
        showElement(".internet-container");
    });


    document.querySelector('.abme-container').addEventListener('dblclick', () => {
        showElement(".abmewindow-container");
    });

    document.querySelector('.abme-container').addEventListener('touchend', () => {
        showElement(".abmewindow-container");
    });

    document.querySelector('.abmetablet-container').addEventListener('dblclick', () => {
        showElement(".abmewindow-container");
    });

    document.querySelector('.abmetablet-container').addEventListener('touchend', () => {
        showElement(".abmewindow-container");
    });

    const sitesDisplay = document.getElementById('websitesdisplay');
    const siteMappings = {
        '.tof-tabcontainer': '/sites/TOFSITE/index.html',
        '.mov-tabcontainer': '/sites/TREACLSFILMS/index.html',
        '.pokora-tabcontainer': '/sites/MORGUESITE/index.html'
    };

    Object.entries(siteMappings).forEach(([selector, src]) => {
        document.querySelector(selector).addEventListener('click', () => {
            sitesDisplay.src = src;
        });
    });

    document.querySelector('.close-container').addEventListener('click', () => {
        document.querySelector(".internet-container").style.display = 'none';
    });

    document.querySelector('.closeabme-container').addEventListener('click', () => {
        document.querySelector(".abmewindow-container").style.display = 'none';
    });

    const screen = document.querySelector('.screen-container');
    const turnBtn = document.querySelector('.turn-btn');
    const ledTurn = document.querySelector('.ledturn');

    let turn = false;

    turnBtn.addEventListener('click', () => {
        if(!turn){
            screen.style.padding = "25px";
            screen.style.height = "100%";
            ledTurn.style.background = "rgb(38, 255, 0)";
            setTimeout(() => {
                document.querySelector('.browser-container').style.opacity = "1";
                document.querySelector('.abme-container').style.opacity = "1";
            }, 700);
        }else{
            document.querySelector('.browser-container').style.opacity = "0";
            document.querySelector('.abme-container').style.opacity = "0";
            setTimeout(() => {
                screen.style.padding = "0";
                screen.style.height = "0";
                ledTurn.style.background = "rgba(0, 0, 0, 1)";
            }, 700);
        }
        turn = !turn;
    });
});
