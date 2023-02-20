exports.handler = async function ( event, context ) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'WJ',
      age: 98,
      email: 'cincu1234@gmail.com'
    })
  }
}