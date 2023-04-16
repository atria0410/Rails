# README

Docker による Ruby on Rails の開発用テンプレートです。  
VsCode の拡張機能「Remote - Containers」が必要です。

## バージョン情報

- Ruby: 3.2.1
- Ruby on Rails: 7.0.4.2
- PostgreSQL: 15.2
- Nginx: 1.23.3

## セットアップ

### コンテナの起動

```
$ docker-compose -f docker-compose.dev.yml up --build -d
$ docker ps
```

### データベースの作成[^1]

```
$ docker exec rails-app-1 rails db:create
$ docker exec rails-app-1 rails db:migrate
```

[^1]: コンテナ名 rails-app-1 が既に存在する場合はサフィックスが異なります。
