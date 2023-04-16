FROM nginx:1.23.3

# デフォルトの設定ファイルを削除
RUN rm -f /etc/nginx/conf.d/*

# 設定ファイルを配置
COPY nginx.conf /etc/nginx/conf.d/app.conf

# Nginxをforeground起動
CMD ["nginx", "-g", "daemon off;"]