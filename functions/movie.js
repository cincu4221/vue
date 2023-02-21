const axios = require('axios')

exports.handler = async function (event) {
  console.log(event)
  const payload = JSON.parse(event.body)
  const { title, type, year, page, id } = payload
  const OMDB_API_KEY = '7035c60c'
  const url = id 
  ? `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}` 
  : `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`

  try {
    const { data } = await axios.get(url)
    if (data.Error) {
      return {
        statusCode: 400,
        body: data.Error // body부분에는 문자데이터만 입력 가능, data.Error는 문자데이터임
      }
    }
    return {
      statusCode: 200,
      body: JSON.stringify(data) // data는 객체데이터이기 떄문에 JSON.stringigy로 변환을 해주어야 함
    }
  } catch (error) {
    return {
      statusCode: error.response.status, // 어떤 에러메시지의 상태코드가 반환되는지 알수 없기때문에 이렇게 작성
      body: error.message
    }
  }
}