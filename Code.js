// تحديد العناصر من HTML
const counterDisplay = document.getElementById('counter-display');
const incrementBtn = document.getElementById('increment-btn');
const resetBtn = document.getElementById('reset-btn');

// تهيئة متغير العد
let count = 0;

// **********************************
// 1. دالة الزيادة (التسبيح)
function incrementCount() {
    count++;
    counterDisplay.textContent = count;
}

// 2. دالة إعادة الضبط
function resetCount() {
    count = 0;
    counterDisplay.textContent = count;
}
// **********************************

// ربط الدوال بالأزرار عند النقر
incrementBtn.addEventListener('click', incrementCount);
resetBtn.addEventListener('click', resetCount);

// (اختياري): يمكن إضافة وظيفة لحفظ العدد في المتصفح حتى لا يضيع بعد التحديث
// لكن نتركها لوقت لاحق.


// ? Comeback Pro