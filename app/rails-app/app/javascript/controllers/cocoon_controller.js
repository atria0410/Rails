import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  connect() {
    $(this.element)
      .on('cocoon:before-insert', () => {
        console.log('追加します')
      })
      .on('cocoon:after-insert', () => {
        console.log('追加されました')
      })
      .on('cocoon:before-remove', () => {
        console.log('削除します')
      })
      .on('cocoon:after-remove', () => {
        console.log('削除されました')
      })
  }
}
