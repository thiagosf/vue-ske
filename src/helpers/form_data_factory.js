import { underscored } from 'underscore.string'

export default {
  build (data, model) {
    let formData = new FormData()
    for (let i in data) {
      let field = underscored(i)
      let name = field
      if (model) {
        name = `${model}[${field}]`
      }
      formData.append(name, data[i])
    }
    return formData
  }
}
