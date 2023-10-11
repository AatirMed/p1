//tab Our Schedule
const changeClr = (index) => {
    document.getElementById(index).classList.add('change-color-click');
    for (let i = 0; i < 5; i++) {
        if (i !== parseInt(index[1])) {
            document.getElementById(`d${i}`).classList.remove('change-color-click')
        }
    }
}


// document.getElementById(index).classList.add('change-color-click');
// document.getElementById(index).classList.remove('change-color-click');







































function updateCountdown() {
    let days = document.getElementById('day');
    let hrs = document.getElementById('H');
    let Min = document.getElementById('Min');
    let s = document.getElementById('Sec');

    let ss = parseInt(s.textContent);
    let mm = parseInt(Min.textContent);
    let hh = parseInt(hrs.textContent);
    let dd = parseInt(days.textContent);

    if (ss === 0) {
        ss = 59;
        if (mm === 0) {
            mm = 59;
            if (hh === 0) {
                if (dd === 0) {
                    clearInterval(countdownInterval);
                    return;
                } else {
                    dd--;
                    hh = 23;
                }
            } else {
                hh--;
            }
        } else {
            mm--;
        }
    } else {
        ss--;
    }

    days.textContent = (dd <= 9 ? "0" + dd : dd);
    hrs.textContent = (hh <= 9 ? "0" + hh : hh);
    Min.textContent = (mm <= 9 ? "0" + mm : mm);
    s.textContent = (ss <= 9 ? "0" + ss : ss);
}

let countdownInterval = setInterval(updateCountdown, 1000);