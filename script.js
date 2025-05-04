document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const emailInput = document.getElementById('email');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault(); // 防止表單實際提交導致頁面刷新

            const email = emailInput.value;

            // 這裡可以添加更複雜的驗證邏輯
            if (email) {
                console.log('Email submitted:', email);
                // 在實際應用中，這裡會觸發 API 請求來處理登入
                alert(`將使用 Email: ${email} 繼續登入 (這只是前端模擬)`);
            } else {
                alert('請輸入您的 Email 地址');
            }
        });
    }

    // 可以為其他按鈕添加事件監聽器
    const socialButtons = document.querySelectorAll('.social-button');
    socialButtons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonType = button.textContent.trim().replace('Continue with ', '').replace('Log in with ','').replace('Single sign-on (SSO)','SSO');
            console.log(`Clicked on: ${buttonType}`);
            // 實際應用中，點擊這些按鈕會觸發對應的 OAuth 流程或 SSO 流程
            alert(`點擊了 ${buttonType} 登入 (這只是前端模擬)`);
        });
    });
});