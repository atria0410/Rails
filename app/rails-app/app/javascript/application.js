// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import { Turbo } from '@hotwired/turbo-rails'
import 'controllers'
import jquery from 'jquery'
import * as bootstrap from 'bootstrap'
import '@popperjs/core'
import '@oddcamp/cocoon-vanilla-js'
import * as utils from 'utils'

// Turbo Driveが有効だと画面遷移時にjsが実行されないため無効化
Turbo.session.drive = false

window.$ = jquery
window.bootstrap = bootstrap

// 画面読み込み時
window.addEventListener('load', () => {
  const sidebar = document.getElementById('sidebar')
  const sidebar_toggle = document.getElementById('sidebar-toggle')
  const content = document.getElementById('content')

  // サイドバーの開閉を設定
  if (utils.getLocalStorage('sidebar_open')) {
    sidebar.classList.add('open')
  } else {
    sidebar.classList.remove('open')
  }
  setTimeout(() => {
    sidebar.style.transition = 'all 0.3s'
    content.style.transition = 'all 0.3s'
  }, 300)

  // サイドバーのトグルボタンクリック時イベント
  sidebar_toggle.addEventListener('click', () => {
    if (sidebar_toggle.checked) {
      sidebar.classList.add('open')
      utils.setLocalStorage('sidebar_open', true)
    } else {
      sidebar.classList.remove('open')
      utils.setLocalStorage('sidebar_open', false)
    }
  })
})
