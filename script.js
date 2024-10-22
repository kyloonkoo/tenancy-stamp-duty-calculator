function calculate() {
    const monthlyRent = parseFloat(document.getElementById('monthly-rent').value);
    const duration = parseInt(document.getElementById('duration').value);
    const additionalCopies = parseInt(document.getElementById('copies').value);
    const yearlyRent = monthlyRent * 12;
    
    document.getElementById('yearly-rent').value = yearlyRent;

    // Stamp Duty calculation
    let taxableAmount = yearlyRent - 2400;
    taxableAmount = Math.max(0, taxableAmount);  // If less than 2400, no tax

    let stampDuty = 0;
    if (duration <= 1) {
        stampDuty = Math.ceil(taxableAmount / 250) * 1;
    } else if (duration <= 3) {
        stampDuty = Math.ceil(taxableAmount / 250) * 2;
    } else {
        stampDuty = Math.ceil(taxableAmount / 250) * 4;
    }

    // Add additional copies fee
    const additionalCopyFee = additionalCopies * 10;
    const total = stampDuty + additionalCopyFee;

    // Display result
    document.getElementById('stamp-duty').innerText = `RM ${stampDuty}`;
    document.getElementById('total').innerText = `RM ${total}`;
}
