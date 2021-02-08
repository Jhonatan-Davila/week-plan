import Mock from "../mock";

const status = [
  {
    id: '1',
    name: 'Duo Training'    
  },
  {
    id: '2',
    name: 'Personal Training'    
  },
  {
    id: '3',
    name: 'Solo Training'    
  },
  {
    id: '4',
    name: 'Trial Lesson'
  }
];

const weekPlans = [
  {
    _id: "60136f364cf3ed0017556bac",
    userId: {
      "firstName":null,
      "lastName":null,
      "userName":"Sean",
    },
    email: "sean@mail.com",
    createdDate: new Date("08-12-2005"),
    weekPlans: [
      {
        dayOfWeek: 1,
        availableStatus: 1,
        checkIn: "09:00",
        checkOut: "17:00"
      },
      {
        dayOfWeek: 2,
        availableStatus: 1,
        checkIn: "09:00",
        checkOut: "17:00"
      },
      {
        dayOfWeek: 3,
        availableStatus: 1,
        checkIn: "09:00",
        checkOut: "17:00"
      },
      {
        dayOfWeek: 4,
        availableStatus: 1,
        checkIn: "09:00",
        checkOut: "17:00"
      },
      {
        dayOfWeek: 5,
        availableStatus: 1,
        checkIn: "09:00",
        checkOut: "17:00"
      },
      {
        dayOfWeek: 6,
        availableStatus: 1,
        checkIn: "09:00",
        checkOut: "17:00"
      },
      {
        dayOfWeek: 7,
        availableStatus: 1,
        checkIn: "09:00",
        checkOut: "17:00"
      }
    ],
  },
];

Mock.onGet("/api/week-plan").reply(config => {
  const response = weekPlans;
  return [200, response];
});
