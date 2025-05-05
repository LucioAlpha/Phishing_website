document.addEventListener('DOMContentLoaded', () => {
    // 保留舊有的表單和按鈕事件監聽器
    const loginForm = document.getElementById('login-form');
    const emailInput = document.getElementById('email');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault(); // 防止表單實際提交導致頁面刷新

            const email = emailInput.value;
            const currentLang = document.documentElement.lang || 'en'; // 獲取當前語言
            const alertTranslations = translations[currentLang] || translations['en']; // 獲取對應語言的彈窗翻譯

            if (email) {
                console.log('Email submitted:', email);
                // 在實際應用中，這裡會觸發 API 請求來處理登入
                alert(alertTranslations.alertLoginSimulated.replace('{email}', email)); // 使用翻譯文本
            } else {
                alert(alertTranslations.alertEmailRequired); // 使用翻譯文本
            }
        });
    }

    const socialButtons = document.querySelectorAll('.social-button');
    socialButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 這裡的文字是固定的，如果需要翻譯按鈕類型，需要更複雜的邏輯
            const buttonText = button.querySelector('span').textContent.trim();
            console.log(`Clicked on: ${buttonText}`);
            // 實際應用中，點擊這些按鈕會觸發對應的 OAuth 流程或 SSO 流程
            // 這裡可以添加一個通用的點擊模擬彈窗，並進行翻譯
            alert(`點擊了 "${buttonText}" 登入 (這只是前端模擬)`); // 這個彈窗沒有翻譯
        });
    });

    // ****** 語言下拉選單邏輯 & 多語言功能 ******

    // 翻譯數據
    const translations = {
        'en': { // 使用語言代碼作為 key
            // UI 顯示的語言名稱
            'langName_en': 'English',
            'langName_zh-TW': '繁體中文',
            'langName_ja': '日本語',
            'langName_es': 'Español',
            'langName_fr': 'Français',

            // 頁面內容翻譯
            'pageTitle': 'Notion - Log in',
            'mainHeading': 'Think it. Make it.',
            'subtitle': 'Log in to your Notion account',
            'continueWithGoogle': 'Continue with Google',
            'continueWithApple': 'Continue with Apple',
            'continueWithMicrosoft': 'Continue with Microsoft',
            'loginWithPasskey': 'Log in with passkey',
            'singleSignOn': 'Single sign-on (SSO)',
            'emailLabel': 'Email',
            'emailPlaceholder': 'Enter your email address...',
            'helperText': 'Use an organizational email to easily collaborate with teammates.',
            'continueButton': 'Continue',
            'termsText': 'By continuing, you acknowledge that you understand and agree to the {termsLink} and {privacyLink}.',
            'termsLinkText': 'Terms & Conditions',
            'privacyLinkText': 'Privacy Policy',

            // 彈窗或提示信息翻譯
            'alertEmailRequired': 'Please enter your email address',
            'alertLoginSimulated': 'Will proceed with Email: {email} (This is a frontend simulation)'
            // ... 其他需要翻譯的文本 ...
        },
        'zh-TW': { // 使用語言代碼作為 key
            'langName_en': 'English',
            'langName_zh-TW': '繁體中文',
            'langName_ja': '日本語',
            'langName_es': 'Español',
            'langName_fr': 'Français',

            'pageTitle': 'Notion - 登入',
            'mainHeading': '發想。建立。',
            'subtitle': '登入您的 Notion 帳戶',
            'continueWithGoogle': '使用 Google 繼續',
            'continueWithApple': '使用 Apple 繼續',
            'continueWithMicrosoft': '使用 Microsoft 繼續',
            'loginWithPasskey': '使用 Passkey 登入',
            'singleSignOn': '單一登入 (SSO)',
            'emailLabel': '電子郵件',
            'emailPlaceholder': '輸入您的電子郵件地址...',
            'helperText': '使用組織電子郵件可以輕鬆與團隊成員協作。',
            'continueButton': '繼續',
            'termsText': '繼續操作即代表您瞭解並同意{termsLink}及{privacyLink}。',
            'termsLinkText': '服務條款',
            'privacyLinkText': '隱私權政策',

            'alertEmailRequired': '請輸入您的電子郵件地址',
            'alertLoginSimulated': '將使用 Email: {email} 繼續登入 (這只是前端模擬)'
            // ... 其他需要翻譯的文本 ...
        },
        'ja': { // 日文示例 (只有語言名稱翻譯，其他沿用英文)
            'langName_en': 'English',
            'langName_zh-TW': '繁體中文',
            'langName_ja': '日本語',
            'langName_es': 'Español',
            'langName_fr': 'Français',

            'pageTitle': 'Notion - ログイン',
            'mainHeading': '考えて、作ろう。',
            'subtitle': 'Notionアカウントにログイン',
            'continueWithGoogle': 'Googleで続行',
            'continueWithApple': 'Appleで続行',
            'continueWithMicrosoft': 'Microsoftで続行',
            'loginWithPasskey': 'パスキーでログイン',
            'singleSignOn': 'シングルサインオン (SSO)',
            'emailLabel': 'メール',
            'emailPlaceholder': 'メールアドレスを入力...',
            'helperText': '組織のメールアドレスを使用すると、チームメイトとの共同作業が簡単になります。',
            'continueButton': '続行',
            'termsText': '続行すると、{termsLink}および{privacyLink}を理解し同意したことになります。',
            'termsLinkText': '利用規約',
            'privacyLinkText': 'プライバシーポリシー',

            'alertEmailRequired': 'メールアドレスを入力してください',
            'alertLoginSimulated': 'メールアドレス: {email} でログインを続行します (これはフロントエンドのシミュレーションです)'
        }
        // 添加更多語言...
    };

    // 語言選擇器相關 DOM 元素
    const languageSelectorTrigger = document.getElementById('language-selector-trigger');
    const languageDropdown = document.getElementById('language-dropdown');
    const selectedLanguageSpan = document.getElementById('selected-language');
    const languageOptions = languageDropdown ? languageDropdown.querySelectorAll('a[data-lang]') : []; // 獲取語言選項

    // 翻譯頁面內容的函數
    function setLanguage(lang) {
        const currentTranslations = translations[lang];
        if (!currentTranslations) {
            console.error(`No translations found for language code: ${lang}`);
            return; // 如果找不到對應語言，則不做任何事
        }

        // 更新 html 標籤的 lang 屬性
        document.documentElement.lang = lang;

        // 更新 Title
        const titleElement = document.querySelector('title');
        if (titleElement && currentTranslations.pageTitle) {
            titleElement.textContent = currentTranslations.pageTitle;
        }


        // 遍歷並翻譯帶有 data-i18n 的元素
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            let translation = currentTranslations[key];

            if (translation) {
                // 處理含有鏈接的文本 (如 termsText)
                if (key === 'termsText' && translation.includes('{termsLink}') && translation.includes('{privacyLink}')) {
                    const termsLinkText = currentTranslations['termsLinkText'] || 'Terms & Conditions'; // 確保有備份
                    const privacyLinkText = currentTranslations['privacyLinkText'] || 'Privacy Policy'; // 確保有備份

                    // 找到對應的鏈接元素
                    const termsLinkElement = element.querySelector('a[data-i18n="termsLinkText"]');
                    const privacyLinkElement = element.querySelector('a[data-i18n="privacyLinkText"]');

                    if (termsLinkElement && privacyLinkElement) {
                        // 替換文本中的佔位符
                        translation = translation.replace('{termsLink}', `<a href="${termsLinkElement.href}" data-i18n="termsLinkText">${termsLinkText}</a>`);
                        translation = translation.replace('{privacyLink}', `<a href="${privacyLinkElement.href}" data-i18n="privacyLinkText">${privacyLinkText}</a>`);

                        // 使用 innerHTML 更新內容 (因為包含 HTML 標籤)
                        element.innerHTML = translation;
                    } else {
                        // 如果找不到鏈接，直接更新文本內容 (可能導致鏈接丟失)
                        element.textContent = translation;
                    }

                } else {
                    // 其他普通文本，直接更新 textContent
                    element.textContent = translation;
                }
            } else {
                console.warn(`Translation key "${key}" not found for language "${lang}"`);
            }
        });

        // 遍歷並翻譯帶有 data-i18n-placeholder 的 input 元素
        document.querySelectorAll('input[data-i18n-placeholder]').forEach(input => {
            const key = input.getAttribute('data-i18n-placeholder');
            const translation = currentTranslations[key];
            if (translation) {
                input.placeholder = translation;
            } else {
                console.warn(`Placeholder translation key "${key}" not found for language "${lang}"`);
            }
        });

        // 更新下拉選單中顯示的當前語言名稱
        // 找到當前語言在 translations 中的 langName key
        const selectedLangNameKey = `langName_${lang}`;
        if (selectedLanguageSpan && currentTranslations[selectedLangNameKey]) {
            selectedLanguageSpan.textContent = currentTranslations[selectedLangNameKey];
        }
    }

    // 初始化頁面語言：首先檢查 localStorage，然後嘗試瀏覽器語言，最後使用預設語言 (en)
    function initializeLanguage() {
        const savedLang = localStorage.getItem('preferredLanguage');
        const browserLang = navigator.language || navigator.userLanguage; // 獲取瀏覽器語言
        let initialLang = 'en'; // 預設語言

        if (savedLang && translations[savedLang]) {
            initialLang = savedLang; // 使用上次保存的語言
        } else if (browserLang) {
            // 嘗試匹配瀏覽器語言，例如 'zh-TW' 或 'zh'
            const browserLangCode = browserLang.split('-')[0]; // 取主語言代碼，如 'zh'
            // 檢查是否有完全匹配的語言代碼 (zh-TW)
            if (translations[browserLang] || translations[browserLangCode]) {
                initialLang = translations[browserLang] ? browserLang : browserLangCode;
                // 對於簡體/繁體中文，可能需要額外邏輯判斷 (這裡只簡單支援 zh-TW)
                if (browserLangCode === 'zh' && !translations[initialLang]) {
                    initialLang = 'zh-TW'; // 假設支援 zh 的話，使用 zh-TW
                }
                // 確保選擇的語言在支援列表中
                if (!translations[initialLang]) {
                    initialLang = 'en'; // 如果瀏覽器語言不在支援列表，回退到預設
                }

            }
        }

        // 設置初始語言
        setLanguage(initialLang);
        // 更新下拉選單的顯示（確保和初始設置的語言一致）
        const initialLangNameKey = `langName_${initialLang}`;
        if (selectedLanguageSpan && translations[initialLang] && translations[initialLang][initialLangNameKey]) {
            selectedLanguageSpan.textContent = translations[initialLang][initialLangNameKey];
        }
    }


    // 下拉選單顯示/隱藏邏輯 (保留原有代碼)
    if (languageSelectorTrigger && languageDropdown && selectedLanguageSpan) {
        languageSelectorTrigger.addEventListener('click', (event) => {
            event.stopPropagation();
            languageDropdown.classList.toggle('show');
        });

        // 點擊下拉選單中的語言選項
        languageDropdown.addEventListener('click', (event) => {
            if (event.target.tagName === 'A') {
                event.preventDefault(); // 阻止鏈接跳轉
                const selectedLang = event.target.getAttribute('data-lang');
                if (selectedLang && translations[selectedLang]) { // 確保選擇的語言有對應的翻譯
                    setLanguage(selectedLang); // 調用翻譯函數
                    localStorage.setItem('preferredLanguage', selectedLang); // 將選擇的語言儲存到 localStorage
                }
                languageDropdown.classList.remove('show'); // 選擇後隱藏下拉選單
            }
        });
    }

    // 點擊頁面其他地方隱藏下拉選單 (保留原有代碼)
    window.addEventListener('click', (event) => {
        if (languageDropdown && languageDropdown.classList.contains('show')) {
            if (!languageSelectorTrigger.contains(event.target) && !languageDropdown.contains(event.target)) {
                languageDropdown.classList.remove('show');
            }
        }
    });

    // 頁面載入完成後初始化語言
    initializeLanguage();

    // ****** 語言下拉選單邏輯 & 多語言功能結束 ******

});