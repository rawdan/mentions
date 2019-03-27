import { Controller } from "stimulus"

export default class extends Controller {
    static targets = ["body", "form"]

    toggle() {
        this.formTarget.classList.remove("d-none")
        this.bodyTarget.classList.add("d-none")
    }
}