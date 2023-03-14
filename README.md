# memoa

menubar app for replace-text

![screenshot](https://user-images.githubusercontent.com/43945931/224884354-00010c92-77d5-4044-a3ee-4d0116a4e8f1.jpg)


---

## How to install
1. node_modulesをインストール

    `npm install electron-prebuilt-compile --save`

2. appをインストール

    `npm run make`

    out >  make > memoa-1.0-x64.dmg でIntel Macのアプリケーションにmemoa.appを入れることができる
    
---

## What's memoa
`Shift+Cmd+M`（`⇧+⌘+M`）でポップアップのページを呼び出し、テキストボックスにペーストした瞬間に全角に挟まれた半角スペースを削除したり、ピリオドカンマと句読点を正しくしてくれたり、テキスト置換をしてくれるMenubar app。

* 全角に挟まれた半角スペースを削除（テキストボックスにペーストすると自動で半角スペースが削除される。）
* 改行などの削除
* テキスト置換する（2つまで）

`Alt+M`で呼び出す。Macだと`⌥+M`。

---

## Function

### 全角に挟まれた半角スペースを削除
日本語pdfをコピーすると、このように半角スペースが挟まってしまうことがある。テキストボックスに文字列を入力したら、即座に全角に挟まれた半角スペースを削除する。
    
e.g.)
    日本語pdfについて、日本語間に空白ができることがある。
    改行が半角スペースとなっており、邪魔。
    
    テキストボックスにペーストすると半角スペースが削除される。
    
    
### 改行などの削除

* `NL`
    改行→半角スペースにする。Alt（⌥）キーを連打するとこれが実行され、さらにクリップボードにコピーされる。
    e.g.) 
    ```
    I have a pen.
    I have an apple.
    ```
    ↓
    ```
    I have a pen. I have an apple.
    ```

* `BL`
    空白となっている行を消去する。
    e.g.) 
    ```
    I have a pen.
    
    I have an apple.
    ```
    ↓
    ```
    I have a pen.
    I have an apple.
    ```


* `NL&Spc`
    改行のみを削除する。
    e.g.) 
    ```
    I have a pinea
    pple
    ```
    ↓
    ```
    I have a pineapple
    ```

* `Copy`
    クリップボードにコピーする。
  
* `~Spc~`
    文字列の先頭(前方/左側)及び末尾(後方/右側)にある空白文字を一括削除

* `ALL`
    すべての半角スペースを一括削除

* `Cmd`
    ネットに載っているコマンドをコピーするときに偶に邪魔な、`$`+`半角スペース`、`%`+`半角スペース`、`>`+`半角スペース`、`+`+`半角スペース`を削除する。
    e.g.)
    ```
    $ cd Desktop
    $ ls
    ```
    ↓
    ```
    cd Desktop
    ls
    ```
* `cnt`
    文字数カウントする。右下に文字数が表示される。

* etc
    * テキストボックスにペーストすると自動で全角に囲まれた半角スペースが削除されるが、何回かフォーカスしないと途中までしかやってくれないかもしれないので注意。
    * 履歴が3つまで残る。（History1~3）
    * 下段のテキストボックスはなにもしないので元のテキストの保存用に。Memoは履歴には残らないただのテキストボックス。


### 文字列置換
置換前wordに置換したいと思っている文字列を入力し、置換後wordに変換する文字列を入力。Beforeの欄に、テキストを入れると、Afterに置換後のテキストがリアルタイムで出力される。`Clear`でテキストボックスがクリアされ、`Copy`を押すとクリップボードにコピーされる。

![image](https://user-images.githubusercontent.com/43945931/219882632-b8d83389-3792-4890-ad3b-ad0f5cdb60ee.png)


### UpperCase & LowerCase
入力を大文字・小文字に変換する。

![image](https://user-images.githubusercontent.com/43945931/219880505-c83e36b3-a301-49fc-888a-fe2a58cd203e.png)


### 半角to全角 & 全角to半角
入力を半角→全角、全角→半角に変換する。

![image](https://user-images.githubusercontent.com/43945931/219880517-eec2d81b-7e1e-414d-9f5d-dc5f4c9f0aef.png)


### SpongeCase
入力をsPoNgEcAsEのような、大文字と小文字がランダムに混じった文にする。これは皮肉めいたネットミームで使われ、SpOnGeBoB mEmEと呼ばれる。

![image](https://user-images.githubusercontent.com/43945931/219880535-edf94b36-e3b5-4064-a406-674b756474f9.png)

### Insert
行頭または行末に文字を挿入する

![image](https://user-images.githubusercontent.com/43945931/219882448-f19ec6bd-e34a-4f2d-b7ff-01ed87adac6a.png)

