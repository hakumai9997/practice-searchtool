'use strict';

/*
検索ツール
==================================================
document.addEventListener('DOMContentLoaded', () => {
    
    // 検索値・検索範囲を変数に格納する
    const searchInput1 = document.getElementById('search_word_1');
    const iframe1 = document.getElementById('iframe_1');
    
    const searchInput2 = document.getElementById('search_word_2');
    const iframe2 = document.getElementById('iframe_2');

    // 入力イベントリスナーを追加
    if (searchInput1 && iframe1) {
        searchInput1.addEventListener('input', () => {
            searchInIframe(searchInput1.value, iframe1);
        });
    } else {
        console.error('Element search_word_1 or iframe_1 not found')
    }

    if (searchInput2 && iframe2) {
        searchInput2.addEventListener('input', () => {
            searchInIframe(searchInput2.value, iframe2);
        });
    } else {
        console.error('Element search_word_2 or iframe_2 not found')
    }
});

function searchInIframe(query, iframe) {
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

    if (!iframeDoc) {
        console.error('iframeの内容を取得できませんでした');
        return;
    }

    // 元のコンテンツを取得して再描画
    const originalContent = iframeDoc.body.innerHTML;

    if (query) {
        const regex = new RegExp(`(${query})`, 'gi');
        const newContent = originalContent.replace(regex, '<span class="highlight">$1</span>');
        iframeDoc.body.innerHTML = newContent;
    } else {
        iframeDoc.body.innerHTML = originalContent;  // 元のコンテンツを再表示
    }
} */
