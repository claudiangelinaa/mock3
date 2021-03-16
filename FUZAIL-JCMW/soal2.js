let isLogin = false

let userData = [
  {
    username: 'fuzail',
    password: 'rahasia',
    role: 'admin',
  },
  {
    username: 'jack',
    password: 'rahasiadong',
    role: 'user',
  }
]

let activities =[
  {
    no: 1,
    activity: 'lari',
    day:'senin',
    poster: 'google.com'
  },
  {
    no: 2,
    activity: 'renang',
    day:'selasa',
    poster: 'google.com'
  },
  {
    no: 3,
    activity: 'tidur',
    day:'rabu',
    poster: 'google.com'
  }
]

function login(){
  let userName = document.getElementById('UserName').value
  let passWord = document.getElementById('PassWord').value
  
  let userIndex = userData.findIndex(el=>el.username == userName)
  
  if(passWord == userData[userIndex].password){
    isLogin = true
    if(userData[userIndex].role == 'admin'){
      document.getElementById('LoginStatus').innerHTML = 'admin'
      showActivities('admin')
    }else{
      document.getElementById('LoginStatus').innerHTML = userData[userIndex].username
      showActivities('user')
    }
    document.getElementById('Logout').innerHTML = `
    <input type="button" value="logout" onclick="logout()">
  `
  }else{
    isLogin = false
    document.getElementById('LoginStatus').innerHTML = 'password salah'
  }

  document.getElementById('UserName').value = ''
  document.getElementById('PassWord').value = ''
}

function showActivities(role, number){
  if(role == 'user'){
    let list = activities.map(el=>{
      return `
        <tr>
          <td>${el.no}</td>
          <td>${el.activity}</td>
          <td>${el.day}</td>
          <td><img src='${el.poster}' alt = '${el.poster}'></td>
          <td></td>
        </tr>
      `
    })

    document.getElementById('Activities').innerHTML = list.join('')
  }else{
    let list = activities.map(el=>{
      if(el.no == number){
        return `
        <tr>
          <td></td>
          <td><input type="text" id="EditActivity" value="${el.activity}"></td>
          <td><input type="text" id="EditDay" value="${el.day}"></td>
          <td><input type="text" id="EditPoster" value="${el.poster}"></td>
          <td>
            <input type="button" value="save" onclick="save(${el.no})">
            <input type="button" value="cancel" onclick="cancel()">
          </td>
        </tr>
      `
      }else{
        return `
        <tr>
          <td>${el.no}</td>
          <td>${el.activity}</td>
          <td>${el.day}</td>
          <td><img src='${el.poster}' alt = '${el.poster}'></td>
          <td>
            <input type="button" value="Delete" onclick="deleteTask(${el.no})">
            <input type="button" value="Edit" onclick="editTask(${el.no})">
          </td>
        </tr>
      `
      }
    })

    list.push(`
    <tr>
      <td></td>
      <td><input type="text" id="InputActivity"></td>
      <td><input type="text" id="InputDate"></td>
      <td><input type="text" id="InputPoster"></td>
      <td>
        <input type="button" value="Add Todo" onclick="addActivity()">
      </td>
    </tr>
    `)

    document.getElementById('Activities').innerHTML = list.join('')
  }
}

function deleteTask(number){
  activities = activities.filter(el=>{
    return el.no != number
  })

  showActivities('admin')
}

function addActivity(){
  let activity = document.getElementById('InputActivity').value
  let day = document.getElementById('InputDate').value
  let poster = document.getElementById('InputPoster').value

  activities.push({
    no: activities.length+1,
    activity,
    day,
    poster
  })

  showActivities('admin')
}

function editTask(number){
  showActivities('admin',number)
}

function save(number){
  let index = activities.findIndex(el=> el.no == number)

  let activity = document.getElementById('EditActivity').value
  let day = document.getElementById('EditDay').value
  let poster = document.getElementById('EditPoster').value

  activities[index] ={
    ...activities[index],
    activity,
    day,
    poster
  }

  showActivities('admin')
}

function cancel(){
  showActivities('admin')
}

function logout(){
  isLogin = false
  document.getElementById('Activities').innerHTML =''
  document.getElementById('LoginStatus').innerHTML =''
  document.getElementById('Logout').innerHTML = ''
}