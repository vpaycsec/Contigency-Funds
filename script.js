document.addEventListener("DOMContentLoaded", function() {
    // Ensure first page is visible when page loads
    const firstPage = document.getElementById("firstPage");
    firstPage.style.display = "block"; // Make sure it's visible initially

    // Button for First Page
    const nextButton1 = document.getElementById("nextButton1");
    if (nextButton1) {
        nextButton1.addEventListener("click", function() {
            const secondPage = document.getElementById("secondPage");
            firstPage.classList.remove("visible");
            setTimeout(() => {
                firstPage.style.display = "none"; // Hide first page after fade
                secondPage.style.display = "block"; // Show second page
                secondPage.classList.add("visible");
            }, 500); // Add delay for transition
        });
    }

    // Button for Second Page
    const nextButton2 = document.getElementById("nextButton2");
    if (nextButton2) {
        nextButton2.addEventListener("click", function() {
            const secondPage = document.getElementById("secondPage");
            const calculatorPage = document.getElementById("calculatorPage");
            secondPage.classList.remove("visible");
            setTimeout(() => {
                secondPage.style.display = "none"; // Hide second page
                calculatorPage.style.display = "block"; // Show calculator page
                calculatorPage.classList.add("visible");
            }, 500); // Add delay for transition
        });
    }

    // Calculate Funds
    const calculateButton = document.getElementById("calculateButton");
    if (calculateButton) {
        calculateButton.addEventListener("click", function() {
            const monthlyIncome = parseFloat(document.getElementById("monthlyIncome").value);
            if (isNaN(monthlyIncome) || monthlyIncome <= 0) {
                alert("Please enter a valid income.");
                return;
            }

            // Show graph animation
            document.getElementById("graphContainer").style.display = "block";

            // Simulate graph for 1 second
            setTimeout(() => {
                const contingencyFund = monthlyIncome * 6;
                const cashAmount = contingencyFund * 0.10;
                const savingsAmount = contingencyFund * 0.20;
                const fdAmount = contingencyFund * 0.70;

                // Hide graph animation
                document.getElementById("graphContainer").style.display = "none";

                // Show chart
                document.getElementById("chartContainer").style.display = "block";
                const ctx = document.getElementById('fundChart').getContext('2d');
                const fundChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['Cash', 'Savings', 'Fixed Deposits'],
                        datasets: [{
                            label: 'Fund Distribution',
                            data: [cashAmount, savingsAmount, fdAmount],
                            backgroundColor: ['#56cba3', '#4b9a6e', '#2c6f42'],
                            borderColor: ['#4b9a6e', '#56cba3', '#2c6f42'],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true,
                                ticks: {
                                    callback: function(value) {
                                        return '₹' + value;
                                    }
                                }
                            }
                        }
                    }
                });

                // Show result
                const result = document.getElementById("result");
                result.style.display = "block";
                result.innerHTML = `
                    <p><strong>Your Contingency Fund (6x monthly income):</strong> ₹${contingencyFund}</p>
                    <p><strong>10% in Cash:</strong> ₹${cashAmount}</p>
                    <p><strong>20% in Bank Savings:</strong> ₹${savingsAmount}</p>
                    <p><strong>70% in Fixed Deposits (FD):</strong> ₹${fdAmount}</p>
                `;
            }, 1000); // Delay for 1 second
        });
    }
});
