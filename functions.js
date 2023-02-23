let count = 0;
document.getElementById("triangleCal").addEventListener("click", function () {
    const [base, height] = getInput("triangleBaseInput", "triangleHeightInput");
    if (base < 0 || height < 0|| isNaN(base) || isNaN(height)) {
        window.alert("Please enter valid input");
    } else {
        count++;
        const area = (base * height) / 2;
        getOutput(count, area, "Triangle");
    }
});
document.getElementById("rectangleCal").addEventListener("click", function () {
    const [base, height] = getInput("rectangleBaseInput", "rectangleHeightInput");
    if (base < 0 || height < 0|| isNaN(base) || isNaN(height)) {
        window.alert("Please enter valid input");
    } else {
        count++;
        const area = (base * height) / 2;
        getOutput(count, area, "Rectangle");
    }

});
document.getElementById("parallelogramCal").addEventListener("click", function () {
    const [base, height] = getInput("parallelogramBaseInput", "parallelogramHeightInput");
    if (base < 0 || height < 0|| isNaN(base) || isNaN(height)) {
        window.alert("Please enter valid input");
    } else {
        count++;
        const area = (base * height) / 2;
        getOutput(count, area, "Parallelogram");
    }

});
document.getElementById("rhombusCal").addEventListener("click", function () {
    const [base, height] = getInput("rhombusBaseInput", "rhombusHeightInput");
    if (base < 0 || height < 0|| isNaN(base) || isNaN(height)) {
        window.alert("Please enter valid input");
    } else {
        count++;
        const area = (base * height) / 2;
        getOutput(count, area, "Rhombus");
    }

});

echo "# Jeometry-calculation-by-es6" >> README.md
git init
git add .
git commit -m "jeometry area calculation by es6"
git branch -M main
git remote add origin https://github.com/shahiduzzamantauhid/Jeometry-calculation-by-es6.git
git push -u origin main











function getInput(baseId, heightId) {
    const base = document.getElementById(baseId);
    const baseString = base.value;
    const baseFloat = parseFloat(baseString);
    const height = document.getElementById(heightId);
    const heightString = height.value;
    const heightFloat = parseFloat(heightString);
    // to avoid reassignment
    base.value = ''; height.value = '';
    return [baseFloat, heightFloat];
};

function getOutput(count, area, title) {
    const output = document.getElementById("result");
    const tableRow = document.createElement("tr");
    tableRow.innerHTML = `
    <td><span>${count}</span>. </td>
    <td> ${title} </td>
    <td><span>${area}</span>cm<sup>2</sup></td>
    <td>
    <button class="bg-sky-600 text-white px-2 py-1 rounded-lg">Covert to m<sup>2</sup></button>
    </td>
    `;
    output.appendChild(tableRow);
}
