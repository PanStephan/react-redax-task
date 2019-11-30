export default class RestoService {
  async getMenuItems() {
    return await fetch('/menu')
      .then(res => res.json())
      .catch(err => console.log(err))
  }
}