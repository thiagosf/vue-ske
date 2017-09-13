import { underscored } from 'underscore.string'

export default {
  build (data, model, type = 'json') {
    let formData = null

    switch (type) {
      case 'json':
        formData = {}
        for (let i in data) {
          let field = underscored(i)
          if (model) {
            if (!formData[model]) formData[model] = {}
            formData[model][field] = data[i]
          } else {
            formData[field] = data[i]
          }
        }
        break

      case 'form-data':
        formData = new FormData()
        for (let i in data) {
          let field = underscored(i)
          let name = field
          if (model) {
            name = `${model}[${field}]`
          }
          formData.append(name, data[i])
        }
        break
    }

    return formData
  }
}
