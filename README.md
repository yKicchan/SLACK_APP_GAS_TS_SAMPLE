# GAS + TypeScript Sample

GAS を TypeScript で動かすサンプルプロジェクト  
Webpack + babel を使うことで、 npm に公開されている便利なパッケージを使える

このサンプルでは `dayjs` を利用して現在時刻を返す処理を実装した。  
Slack App にして Slash Command で動かす想定をしているが、もちろん Slack App 以外でも利用可能。  
例えば GAS のトリガーを使って任意のスクリプトを定期実行することなど、一般的な用途にも使える(結局 GAS が動いてるだけなので)

## 構成

- src
  - スクリプトはここ以下に置く
  - `src/index.ts` で、GAS で実行したい関数を `global` に登録してあげる
    - サンプルで言う `src/main.ts` の `doPost`
- dist
  - Webpack + babel でのビルド成果物
  - ここにあるものが GAS に `push` される

## Install

```bash
$ git clone git@github.com:yKicchan/SLACK_APP_GAS_TS_SAMPLE.git
$ cd SLACK_APP_GAS_TS_SAMPLE
$ yarn install
```

**※ このリポジトリを使ってなにか動かしてみたい場合は `.clasp.json` の `scriptId` を適宜変更すること**

## Deploy

```bash
$ yarn deploy
```
