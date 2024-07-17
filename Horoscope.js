const compatibilityChart = {
    'Aries': {'Aries': ['Medium', 'Medium', 'Medium', 'Low'], 'Taurus': ['Medium', 'Medium', 'Medium', 'Medium'], 'Gemini': ['High', 'High', 'High', 'High'], 'Cancer': ['Low', 'Low', 'Low', 'Low'], 'Leo': ['Medium', 'Medium', 'Medium', 'High'], 'Virgo': ['Medium', 'Medium', 'Medium', 'Medium'], 'Libra': ['High', 'Medium', 'High', 'High'], 'Scorpio': ['Medium', 'Medium', 'Medium', 'Low'], 'Sagittarius': ['High', 'High', 'Medium', 'High'], 'Capricorn': ['Low', 'Low', 'Low', 'Low'], 'Aquarius': ['High', 'Medium', 'Medium', 'Medium'], 'Pisces': ['Medium', 'High', 'Medium', 'Medium']},
    'Taurus': {'Aries': ['Medium', 'Medium', 'Medium', 'Low'], 'Taurus': ['High', 'High', 'High', 'Medium'], 'Gemini': ['Medium', 'Medium', 'Low', 'Medium'], 'Cancer': ['High', 'High', 'High', 'High'], 'Leo': ['Medium', 'Medium', 'Medium', 'Medium'], 'Virgo': ['High', 'High', 'High', 'High'], 'Libra': ['Medium', 'Medium', 'High', 'Medium'], 'Scorpio': ['Medium', 'Medium', 'Medium', 'High'], 'Sagittarius': ['Medium', 'Medium', 'Low', 'Medium'], 'Capricorn': ['High', 'High', 'High', 'Medium'], 'Aquarius': ['Low', 'Medium', 'Low', 'Low'], 'Pisces': ['High', 'Medium', 'High', 'Medium']},
    'Gemini': {'Aries': ['High', 'High', 'High', 'High'], 'Taurus': ['Medium', 'Medium', 'Low', 'Medium'], 'Gemini': ['Medium', 'Medium', 'Medium', 'Medium'], 'Cancer': ['High', 'High', 'High', 'High'], 'Leo': ['High', 'High', 'Medium', 'High'], 'Virgo': ['Medium', 'Medium', 'Medium', 'High'], 'Libra': ['High', 'High', 'High', 'High'], 'Scorpio': ['Low', 'Low', 'Low', 'Medium'], 'Sagittarius': ['Medium', 'High', 'Medium', 'Medium'], 'Capricorn': ['Low', 'Low', 'Low', 'Low'], 'Aquarius': ['High', 'High', 'High', 'Medium'], 'Pisces': ['Low', 'Low', 'Medium', 'Medium']},
    'Cancer': {'Aries': ['Low', 'Low', 'Low', 'Low'], 'Taurus': ['High', 'High', 'High', 'High'], 'Gemini': ['High', 'High', 'High', 'High'], 'Cancer': ['Medium', 'Medium', 'Medium', 'Medium'], 'Leo': ['Medium', 'Medium', 'Medium', 'Medium'], 'Virgo': ['High', 'High', 'High', 'High'], 'Libra': ['Medium', 'Medium', 'High', 'Medium'], 'Scorpio': ['High', 'High', 'High', 'High'], 'Sagittarius': ['Medium', 'Medium', 'Medium', 'Medium'], 'Capricorn': ['High', 'High', 'High', 'High'], 'Aquarius': ['Low', 'Low', 'Medium', 'Medium'], 'Pisces': ['High', 'High', 'High', 'High']},
    'Leo': {'Aries': ['Medium', 'Medium', 'Medium', 'High'], 'Taurus': ['Medium', 'Medium', 'Medium', 'Medium'], 'Gemini': ['High', 'High', 'Medium', 'High'], 'Cancer': ['Medium', 'Medium', 'Medium', 'Medium'], 'Leo': ['Medium', 'Medium', 'Medium', 'Medium'], 'Virgo': ['Medium', 'Medium', 'Medium', 'Medium'], 'Libra': ['High', 'Medium', 'High', 'High'], 'Scorpio': ['Low', 'Medium', 'Medium', 'Low'], 'Sagittarius': ['High', 'High', 'Medium', 'High'], 'Capricorn': ['Low', 'Low', 'Low', 'Low'], 'Aquarius': ['Medium', 'Medium', 'Medium', 'Medium'], 'Pisces': ['Medium', 'Medium', 'Medium', 'Medium']},
    'Virgo': {'Aries': ['Medium', 'Medium', 'Medium', 'Medium'], 'Taurus': ['High', 'High', 'High', 'High'], 'Gemini': ['Medium', 'Medium', 'Medium', 'High'], 'Cancer': ['High', 'High', 'High', 'High'], 'Leo': ['Medium', 'Medium', 'Medium', 'Medium'], 'Virgo': ['Medium', 'Medium', 'Medium', 'Medium'], 'Libra': ['Medium', 'Medium', 'Medium', 'Medium'], 'Scorpio': ['High', 'High', 'High', 'High'], 'Sagittarius': ['Medium', 'Medium', 'Medium', 'Medium'], 'Capricorn': ['High', 'High', 'High', 'Medium'], 'Aquarius': ['Medium', 'Medium', 'Medium', 'Medium'], 'Pisces': ['Medium', 'High', 'Medium', 'Medium']},
    'Libra': {'Aries': ['High', 'Medium', 'High', 'High'], 'Taurus': ['Medium', 'Medium', 'High', 'Medium'], 'Gemini': ['High', 'High', 'High', 'High'], 'Cancer': ['Medium', 'Medium', 'High', 'Medium'], 'Leo': ['High', 'Medium', 'High', 'High'], 'Virgo': ['Medium', 'Medium', 'Medium', 'Medium'], 'Libra': ['Medium', 'Medium', 'Medium', 'Medium'], 'Scorpio': ['Low', 'Medium', 'Low', 'Low'], 'Sagittarius': ['High', 'Low', 'Low', 'Medium'], 'Capricorn': ['Low', 'Medium', 'Low', 'Low'], 'Aquarius': ['High', 'Medium', 'High', 'High'], 'Pisces': ['Medium', 'Medium', 'Medium', 'Medium']},
    'Scorpio': {'Aries': ['Medium', 'Medium', 'Medium', 'Low'], 'Taurus': ['Medium', 'Medium', 'Medium', 'High'], 'Gemini': ['Low', 'Low', 'Low', 'Medium'], 'Cancer': ['High', 'High', 'High', 'High'], 'Leo': ['Medium', 'Medium', 'Medium', 'Medium'], 'Virgo': ['High', 'High', 'High', 'High'], 'Libra': ['Medium', 'Medium', 'Medium', 'Low'], 'Scorpio': ['Medium', 'Medium', 'Medium', 'Medium'], 'Sagittarius': ['High', 'Medium', 'Medium', 'Medium'], 'Capricorn': ['High', 'High', 'High', 'High'], 'Aquarius': ['Medium', 'Medium', 'Medium', 'Medium'], 'Pisces': ['High', 'High', 'High', 'High']},
    'Sagittarius': {'Aries': ['High', 'High', 'Medium', 'High'], 'Taurus': ['Medium', 'Medium', 'Low', 'Medium'], 'Gemini': ['Medium', 'High', 'Medium', 'Medium'], 'Cancer': ['Medium', 'Medium', 'Medium', 'Medium'], 'Leo': ['High', 'High', 'Medium', 'High'], 'Virgo': ['Medium', 'Medium', 'Medium', 'Medium'], 'Libra': ['High', 'Low', 'Low', 'Medium'], 'Scorpio': ['Medium', 'Medium', 'Medium', 'Medium'], 'Sagittarius': ['Medium', 'High', 'Medium', 'Medium'], 'Capricorn': ['Medium', 'Medium', 'Low', 'Medium'], 'Aquarius': ['High', 'Medium', 'Medium', 'Medium'], 'Pisces': ['Low', 'Medium', 'Low', 'Low']},
    'Capricorn': {'Aries': ['Low', 'Low', 'Low', 'Low'], 'Taurus': ['High', 'High', 'High', 'Medium'], 'Gemini': ['Low', 'Low', 'Low', 'Low'], 'Cancer': ['High', 'High', 'High', 'High'], 'Leo': ['Low', 'Low', 'Low', 'Low'], 'Virgo': ['High', 'High', 'High', 'Medium'], 'Libra': ['Low', 'Medium', 'Low', 'Low'], 'Scorpio': ['High', 'High', 'High', 'High'], 'Sagittarius': ['Medium', 'Medium', 'Low', 'Medium'], 'Capricorn': ['High', 'High', 'High', 'High'], 'Aquarius': ['Low', 'Low', 'Low', 'Low'], 'Pisces': ['High', 'High', 'High', 'High']},
    'Aquarius': {'Aries': ['High', 'Medium', 'Medium', 'Medium'], 'Taurus': ['Low', 'Medium', 'Low', 'Low'], 'Gemini': ['High', 'High', 'High', 'Medium'], 'Cancer': ['Low', 'Low', 'Medium', 'Medium'], 'Leo': ['Medium', 'Medium', 'Medium', 'Medium'], 'Virgo': ['Medium', 'Medium', 'Medium', 'Medium'], 'Libra': ['High', 'Medium', 'High', 'High'], 'Scorpio': ['Medium', 'Medium', 'Medium', 'Medium'], 'Sagittarius': ['High', 'Medium', 'Medium', 'Medium'], 'Capricorn': ['Low', 'Low', 'Medium', 'Medium'], 'Pisces': ['Low', 'Low', 'Medium', 'Medium']},
    'Pisces': {'Aries': ['Medium', 'High', 'Medium', 'Medium'], 'Taurus': ['High', 'Medium', 'High', 'Medium'], 'Gemini': ['Low', 'Low', 'Medium', 'Medium'], 'Cancer': ['High', 'High', 'High', 'High'], 'Leo': ['Medium', 'Medium', 'Medium', 'Medium'], 'Virgo': ['Medium', 'High', 'Medium', 'Medium'], 'Libra': ['Medium', 'Medium', 'Medium', 'Medium'], 'Scorpio': ['High', 'High', 'High', 'High'], 'Sagittarius': ['Low', 'Medium', 'Low', 'Low'], 'Capricorn': ['High', 'High', 'High', 'High'], 'Aquarius': ['Low', 'Low', 'Medium', 'Medium'], 'Pisces': ['Medium', 'High', 'Medium', 'Medium']}
};

function checkCompatibility(sign1, sign2) {
    if (sign1 in compatibilityChart && sign2 in compatibilityChart[sign1]) {
        return compatibilityChart[sign1][sign2];
    } else {
        return "Sign not found in the compatibility chart.";
    }
}

function checkCompatibility() {
    const sign1 = document.getElementById('sign1').value.trim().capitalize();
    const sign2 = document.getElementById('sign2').value.trim().capitalize();

    const result = compatibilityChart[sign1] && compatibilityChart[sign1][sign2];
    const resultsDiv = document.getElementById('results');

    if (result) {
        resultsDiv.innerHTML = `
            <h2>Compatibility between ${sign1} and ${sign2}:</h2>
            <p><strong>Overall Compatibility:</strong> ${result[0]}</p>
            <p><strong>Love Compatibility:</strong> ${result[1]}</p>
            <p><strong>Friendship Compatibility:</strong> ${result[2]}</p>
            <p><strong>Communication Compatibility:</strong> ${result[3]}</p>
        `;
    } else {
        resultsDiv.innerHTML = `
            <h2>Error:</h2>
            <p>Horoscope sign not found.</p>
        `;
    }
}

// Add capitalize method to String prototype
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
};
