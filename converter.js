import * as webp from 'webp-converter'
import * as fs from 'fs'

webp.grant_permission()

const inputRoute = './img/in/'
const outputRoute = './img/out/'
const quality = 50

function convert(fileFullName, quality){
  const arr = fileFullName.split('.')
  const ext = arr.pop()
  const name = arr.join('')
  const inName = `${inputRoute+fileFullName}`
  const outName = `${outputRoute+name}.webp`
  webp.cwebp(inName, outName, `-q ${quality}`).then((response) => {
    console.log(`${inName} converted successfully to ${outName}`)
  })
}

fs.readdir(inputRoute, function(err, data) {
  err && console.log(err)
  console.log(data)
  data.forEach(e => convert(e, quality))
})