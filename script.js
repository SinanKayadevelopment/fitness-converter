function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // cm'yi m'ye çevir
    
    if (weight && height) {
        const bmi = weight / (height * height);
        let category = '';
        
        if (bmi < 18.5) category = 'Zayıf';
        else if (bmi < 25) category = 'Normal';
        else if (bmi < 30) category = 'Fazla Kilolu';
        else category = 'Obez';

        document.getElementById('bmiResult').innerHTML = 
            `BMI: ${bmi.toFixed(1)}<br>Kategori: ${category}`;
    }
}

function calculateCalories() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const activity = parseFloat(document.getElementById('activity').value);

    if (weight && height && age) {
        let bmr;
        if (gender === 'male') {
            bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
        } else {
            bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
        }

        const dailyCalories = bmr * activity;

        document.getElementById('calorieResult').innerHTML = 
            `Günlük Kalori İhtiyacınız: ${Math.round(dailyCalories)} kcal`;
    }
} 