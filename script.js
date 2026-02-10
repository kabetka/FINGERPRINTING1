function vyhodnot() {
    let total = 0;
    let maxPoints = 8;

    for (let i = 1; i <= 4; i++) {
        let q = document.querySelector(`input[name="q${i}"]:checked`);
        if (!q) {
            alert("Prosím odpovedz na všetky otázky 🙂");
            return;
        }
        total += parseInt(q.value);
    }

    let percent = Math.round((total / maxPoints) * 100);
    let result = document.getElementById("result");

    if (total <= 2) {
        result.style.background = "#d4edda";
        result.innerHTML = `
            🟢 <b>Nízke riziko</b><br>
            Digitálne riziko: <b>${percent}%</b><br><br>
            Máš dobrú kontrolu nad svojou digitálnou stopou.
        `;
    } 
    else if (total <= 5) {
        result.style.background = "#fff3cd";
        result.innerHTML = `
            🟡 <b>Stredné riziko</b><br>
            Digitálne riziko: <b>${percent}%</b><br><br>
            Niektoré návyky by si mal/a upraviť.
        `;
    } 
    else {
        result.style.background = "#f8d7da";
        result.innerHTML = `
            🔴 <b>Vysoké riziko</b><br>
            Digitálne riziko: <b>${percent}%</b><br><br>
            Tvoja digitálna stopa môže byť ľahko zneužiteľná.
        `;
    }
}
