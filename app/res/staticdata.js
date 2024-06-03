const subscriber1 = {
  number: "#1335",
  status: 0,
  department: "Network",
  person: {
    name: "Mr Biglongname Testlongsurname",
    email: 'theproton@protonmail.com',
    phone: '20 424 523 523',
  },
  date: ["22/01/2024","22/01/2024"],
  time: ["06:00","12:00"],
}
const subscriber2 = {
  number: "#1336",
  status: 1, // 0=waiting 1=approved 2=disapproved
  department: "Software",
  person: {
    name: 'Mr Mark Buckerzerg',
    email: 'ypuremail@gmail.com',
    phone: '20 957 368 853',
  },
  date: ["12/02/2024","14/02/2024"],
  time: ["12:00","12:00"],
}
const subscriber3 = {
  number: "#1337",
  status: 2, // 0=waiting 1=approved 2=disapproved
  department: "Special",
  person: {
    name: 'Mr Jeff Bezoff',
    email: 'iamanemai@gmail.com',
    phone: '20 957 368 853',
  },
  date: ["11/02/2024","17/07/2024"],
  time: ["32:00","12:00"],
}
//-------------------------------
const cardcar1 = {
  img: require('../res/booking_vehicle_sample.png'),
  brand: "toyota",
  fuel: "diesel",
  numberplate: "ອຮ 4523",
  type: "2 Seats",
}
const cardcar2 = {
  img: require('../res/booking_vehicle_sample.png'),
  brand: "Ranger",
  fuel: "diesel",
  numberplate: "ຂກ 6356",
  type: "6 Seats",
}
// --------------------
const cardroom1 = {
  img: require('../res/booking_room_sample.png'),
  floor: "1",
  seats: "6",
  longtable: "1",
  flatscreen: "1",
  landlinephone: "1",
  speakers: "2",
  projector: "1",
}
// --------------------
const cardhistory1 = {

}


export {subscriber1,subscriber2,subscriber3,cardcar1,cardcar2,cardroom1}


