function predictNumber() {
    const predictedNumber = Math.floor(Math.random() * 10) + 1;
    document.getElementById("result").textContent = `Your predicted number is: ${predictedNumber}`;
}
