// 1. ระบบตะกร้าสินค้าเบื้องต้น
let cart = [];
let totalCount = 0;

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    totalCount++;
    
    // อัปเดตตัวเลขบนหน้าเว็บ
    document.getElementById('cart-count').innerText = totalCount;
    
    // แจ้งเตือนผู้ใช้ (Interaction)
    alert("เพิ่ม " + productName + " ลงในตะกร้าเรียบร้อยแล้ว!");
    console.log("สินค้าในตะกร้า:", cart);
}

// 2. ฟังก์ชันตรวจสอบการกรอกข้อมูลในหน้า Contact (Validation)
function validateForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name == "" || email == "" || message == "") {
        alert("กรุณากรอกข้อมูลให้ครบถ้วนก่อนส่งข้อความ");
        return false;
    }
    
    alert("ขอบคุณคุณ " + name + " ทางเราได้รับข้อความเรียบร้อยแล้ว!");
    return true;
}

// 3. ตกแต่งเพิ่มเติม: เปลี่ยนสี Navbar เมื่อ Scroll
window.onscroll = function() {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = "#004d00"; // เขียวเข้มขึ้นเมื่อเลื่อนลง
    } else {
        nav.style.backgroundColor = "#006400";
    }
};