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

// (保留之前的表單和按鈕事件監聽器)

// ****** 語言下拉選單邏輯 ******
document.addEventListener('DOMContentLoaded', () => {
    // (將之前的表單和按鈕監聽器移到這裡面，確保 DOM 已載入)
    const loginForm = document.getElementById('login-form');
    const emailInput = document.getElementById('email');
    // ... (其他之前的 JS 代碼) ...


    // --- 新增的下拉選單代碼 ---
    const languageSelectorTrigger = document.getElementById('language-selector-trigger');
    const languageDropdown = document.getElementById('language-dropdown');
    const selectedLanguageSpan = document.getElementById('selected-language');

    if (languageSelectorTrigger && languageDropdown && selectedLanguageSpan) {
        // 點擊觸發器時顯示/隱藏下拉選單
        languageSelectorTrigger.addEventListener('click', (event) => {
            event.stopPropagation(); // 防止事件冒泡到 window 監聽器
            languageDropdown.classList.toggle('show');
        });

        // 點擊下拉選單中的語言選項
        languageDropdown.addEventListener('click', (event) => {
            if (event.target.tagName === 'A') {
                event.preventDefault(); // 阻止鏈接跳轉
                const selectedLang = event.target.getAttribute('data-lang');
                if (selectedLang) {
                    selectedLanguageSpan.textContent = selectedLang; // 更新顯示的語言
                    console.log('Selected language:', selectedLang); // 可以在這裡觸發實際的語言切換邏輯
                }
                languageDropdown.classList.remove('show'); // 選擇後隱藏下拉選單
            }
        });
    }

    // 點擊頁面其他地方隱藏下拉選單
    window.addEventListener('click', (event) => {
        // 檢查下拉選單是否存在並且是顯示狀態
        if (languageDropdown && languageDropdown.classList.contains('show')) {
            // 檢查點擊的目標是否不在觸發器內部，也不在下拉選單內部
            if (!languageSelectorTrigger.contains(event.target) && !languageDropdown.contains(event.target)) {
                languageDropdown.classList.remove('show');
            }
        }
    });

    // --- 舊的表單和按鈕代碼 (確保也在 DOMContentLoaded 內) ---
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const email = emailInput.value;
            if (email) {
                console.log('Email submitted:', email);
                alert(`將使用 Email: ${email} 繼續登入 (這只是前端模擬)`);
            } else {
                alert('請輸入您的 Email 地址');
            }
        });
    }
    const socialButtons = document.querySelectorAll('.social-button');
    socialButtons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonType = button.textContent.trim().replace('Continue with ', '').replace('Log in with ','').replace('Single sign-on (SSO)','SSO');
            console.log(`Clicked on: ${buttonType}`);
            alert(`點擊了 ${buttonType} 登入 (這只是前端模擬)`);
        });
    });
    // --- 舊代碼結束 ---

});
// ****** 語言下拉選單邏輯結束 ******