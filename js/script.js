const resultsContainer = document.querySelector('.results');
const avgEl = document.querySelector('#average');

fetch('json/data.json').then(res => res.json())
.then(data => {
    let totalScore = 0;
    console.log(data)
    for (let i = 0; i < data.length; i++) {
        const el = data[i];

        // Add Score
        totalScore += el.score;

        resultsContainer.innerHTML += `
        <div class="result-container" style="background-color: ${el.bgColor};">
            <div class="result-title">
                <img src="${el.icon}" alt="alt">
                <p style="color: ${el.fontColor}">${el.category}</p>
            </div>
            <div class="result-numbers">
                <span class="result">${el.score}</span>
                <span class="full-mark">/100</span>
            </div>
        </div>
            `;
    };

    // Average of all score
    avgEl.innerHTML = Math.floor(totalScore / data.length);
});
