// ฟังก์ชันบันทึกข้อมูลจากฟอร์ม
function saveData(event) {
    event.preventDefault(); // ป้องกันหน้าเว็บรีเฟรชเมื่อกดปุ่ม

    // ดึงค่าจากฟอร์ม
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // สร้าง Object เพื่อเก็บข้อมูล
    const contactData = {
        name: fullName,
        email: email,
        msg: message,
        date: new Date().toLocaleString()
    };

    // บันทึกลง LocalStorage (จำลองการบันทึกข้อมูลลงฐานข้อมูล)
    localStorage.setItem('lastContact', JSON.stringify(contactData));

    // แสดงข้อความโต้ตอบ (Button Interaction)
    alert("ระบบบันทึกข้อมูลของคุณเรียบร้อยแล้ว!\nชื่อ: " + fullName + "\nเราจะติดต่อกลับทางอีเมล: " + email);

    // ล้างข้อมูลในฟอร์มหลังจากบันทึก
    document.getElementById('contactForm').reset();
    
    console.log("ข้อมูลที่บันทึก:", contactData);
}