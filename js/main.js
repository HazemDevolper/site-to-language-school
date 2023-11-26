
    function handleSubmit() {
        var formData = {
            studentName: document.getElementById('studentName').value,
            studentGender: document.getElementById('studentGender').value,
            studentGuardianNumber: document.getElementById('studentGuardianNumber').value,
            studentGrada: document.getElementById('studentGrada').value,
            studentDate: document.getElementById('studentDate').value,
            email: document.getElementById('email').value
        };

        // إرسال البيانات إلى الـ API
        // قم بتحديد رابط الـ API الخاص بك
        var apiUrl = 'http://localhost/phpexample/hazem.php';

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            // التعامل مع الرد من الـ API (اختياري)
            console.log(data);
        })
        .catch(error => {
            // التعامل مع خطأ في حالة فشل الطلب إلى الـ API (اختياري)
            console.error('Error sending data to API:', error);
        });
    }
