//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    friendJoin: [{
      id: 0,
      title: '儿童素养教育计划',
      desc: '捐40元，为渴望学习知识的孩子点燃一根梦想的火柴。',
      image: "../../images/f_list.jpg",
      friends: [{
          id: 0,
          avatar: '../../images/f_avatar.png'
        },
        {
          id: 1,
          avatar: '../../images/f_avatar.png'
        }
      ]
    }],
    donationList: {
      edu: {
        id: 0,
        title: '教育助学成长',
        list: [{
            id: 0,
            title: '儿童素养教育计划',
            desc: '捐40元，为渴望学习知识的孩子点燃一根梦想的火柴。',
            image: "../../images/f_list.jpg",
            num: 63598
          },
          {
            id: 1,
            title: '点亮星空山村幼儿园',
            desc: '山村幼儿园计划为贫困农村3-6岁儿童提供有质量的学前教育。',
            image: "../../images/f_list.jpg",
            num: 58676
          }, {
            id: 2,
            title: '儿童素养教育计划',
            desc: '捐40元，为渴望学习知识的孩子点燃一根梦想的火柴。',
            image: "../../images/f_list.jpg",
            num: 63598
          },
          {
            id: 3,
            title: '点亮星空山村幼儿园',
            desc: '山村幼儿园计划为贫困农村3-6岁儿童提供有质量的学前教育。',
            image: "../../images/f_list.jpg",
            num: 58676
          },
        ]
      },
      poor: {
        id: 0,
        title: '贫困人群关怀',
        list: [{
            id: 0,
            title: '儿童素养教育计划',
            desc: '捐40元，为渴望学习知识的孩子点燃一根梦想的火柴。',
            image: "../../images/f_list.jpg",
            num: 63598
          },
          {
            id: 1,
            title: '点亮星空山村幼儿园',
            desc: '山村幼儿园计划为贫困农村3-6岁儿童提供有质量的学前教育。量的学前教育。',
            image: "../../images/f_list.jpg",
            num: 58676
          }, {
            id: 2,
            title: '儿童素养教育计划',
            desc: '捐40元，为渴望学习知识的孩子点燃一根梦想的火柴。',
            image: "../../images/f_list.jpg",
            num: 63598
          },
          {
            id: 3,
            title: '点亮星空山村幼儿园',
            desc: '山村幼儿园计划为贫困农村3-6岁儿童提供有质量的学前教育。',
            image: "../../images/f_list.jpg",
            num: 58676
          },
        ]
      }
    },
  
  },
  //事件处理函数
  onLoad: function () {
    
  },

})