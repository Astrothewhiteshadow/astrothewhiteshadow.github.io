const texts = [
    `うぃーあーざじゃぱにーずごぶりん
どぅゆぅはぶけいのたかとびおにごろし
あいあむえぇとじゃぱにーずごぶりん
あかあおきいろのおにずあんどもあ
はいびびっとしゃとるーずぐりーんおに
せくしーみでぃあむばいおれっとおに
むらさきだいだいしゃくなげおに
らららいえるかなとぅないひゃっきやぎょう
`,
    `はいてんしょんじゃぱにーずごぶりん
どらんくはっぴーどんどんへべれけ
あいあむえぇとじゃぱにーずごぶりん
れつごーつきみだうたえやさわげや
ふろしきつつんでしゃるうぃーなんちゃら
ひともあやかしもしゃくにほしうかべ
くるしゅうないぞくるしゅうないぞ
ぶれいくあうとでぶれいこう`,
    `夕闇がこの場所を包むから
今宵の肴に待ち惚け
繰り返すまだかなもういいよ
華密恋が空に揺ぐ
`,
    `人は皆誰しもが非力だと
里に伝わるはカタシハヤ
拳で問うエカセニクリニ
後はもう忘れ物`,
    `いつか見たあの月がまた覗くから
今宵も宴でさて舞い踊れ
きらり光り瞬き消えて
夜明けはもうすぐそこ`,
    `夕闇がこの場所を包むから
今宵の肴に待ち惚け
繰り返すまだかなもういいよ
華密恋が空に揺ぐ
`,
    `（えーこれより鬼ヶ島国際鬼サミットを開会致します。
昨年度多くの負傷者を出し、角がかける程度の被害が
出ている豆腐ハンバーグ問題につきまして
なまはげ委員会主導の下
「大豆　ダメ・絶対」キャンペーンを実施致しまして、
国民の鬼の皆様が間違えて摂取せぬよう、こちらの
方針にてお知らせしていきたいと考えております）`,
    `今日も夜の帳が降りるから
今宵の肴に待ち惚け
ありふれた夕焼け亜麻色に
華密恋が空に揺ぐ
`,
    `人は皆誰しもが非力だと
里に伝わるはカタシハヤ
拳で問うエカセニクリニ
後はもう忘れ物
`,
    `いつか見たあの月がまた覗くから
今宵も宴でさて舞い踊れ
きらり光り瞬き消えて
夜明けはもうすぐそこ`,
    `今日も夜の帳が降りるから
今宵の肴に待ち惚け
ありふれた夕焼け亜麻色に
華密恋が空に揺ぐ
`,
    `夕闇がこの場所を包むから
今宵の肴に待ち惚け
繰り返すまだかなもういいよ
華密恋が空に揺ぐ
`,
    `人は皆誰しもが非力だと
里に伝わるはカタシハヤ
拳で問うエカセニクリニ
後はもう忘れ物`
];

// Here's where we unleash the goblin magic!
document.getElementById('magicButton').addEventListener('click', function () {
    let index = 0;

    while (true) {
        //alert('You have the right to remain silent. Anything you say can be used against you in court. You have the right to talk to a lawyer for advice before we ask you any questions. You have the right to have a lawyer with you during questioning. If you cannot afford a lawyer, one will be appointed for you before any questioning if you wish. If you decide to answer questions now without a lawyer present, you have the right to stop answering at any time.');
        alert(texts[index]);
        index = (index + 1) % texts.length; // Move to next index, looping back to 0 if reached end
    }
});