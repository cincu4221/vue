export default {
  namespaced: true, // index.js에서 연결된 store의 한 모듈이 되기 위해 작성
  state: () => ({ // 객체데이터는 참조형이고 그래서 데이터의 불변성을 위해 함수로 반환해준다.
    name: 'WooJeong',
    email: 'thesecon@gmail.com',
    blog: 'https://youtube.com',
    phone: '+82-10-1234-5678',
    image: 'https://icons-for-free.com/iconfiles/png/512/part+1+github-1320568339880199515.png'
  }) 
}