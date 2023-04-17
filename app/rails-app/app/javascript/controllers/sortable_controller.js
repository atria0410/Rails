import { Controller } from '@hotwired/stimulus'
import Sortable from 'sortablejs'

export default class extends Controller {
  connect() {
    Sortable.create(this.element, {
      handle: '.handle',
      filter: '.filtered',
      animation: 150
    })
  }
}
