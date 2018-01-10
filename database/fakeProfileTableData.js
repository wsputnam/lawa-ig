var fakeProfileTableData = {
    'username': 'willputnam12', 
    'avatar': 'https://pickaface.net/gallery/avatar/akinto54676adec860d.png',
    'caption': 'Will is my name, volcanoes are my game',
    //possible join from post table
    'posts': [
      //post 1
      {photo: 'https://cdn.images.express.co.uk/img/dynamic/78/590x/Russia-volcano-888840.jpg', 
      comments: [{user: 'wongal12', text:'explosive!'}, {user: 'fredzirdung', text:'billowing smoke speaks to me'}, {user: 'aaron123', text: 'Followed u for this'}], 
      likes: ['fredzirdung', 'aaron123', 'joshwardle', 'wongal12', 'marcusphillips'], 
      date: 'January 7, 2018'},

      //post 2
      {photo: 'http://www.arenal.net/img/gallery/volcano/2.jpg', 
      comments: [], 
      likes: ['fredzirdung', 'aaron123'], 
      date: 'January 2, 2018'},

      //etc
      {photo: 'https://i.kinja-img.com/gawker-media/image/upload/s--6l4Bf9Wf--/c_fill,fl_progressive,g_north,h_264,q_80,w_470/h98k8gzwa5gou1gmchkj.jpg',
      comments: [], 
      likes: ['fredzirdung', 'aaron123', 'joshwardle', 'wongal12'], 
      date: 'January 1, 2018'},

      {photo: 'http://cdn.cnn.com/cnnnext/dam/assets/170301100404-mount-etna-lava-erupt-volcano-00000000-exlarge-169.jpg',
      comments: [], 
      likes: ['fredzirdung', 'aaron123', 'joshwardle', 'wongal12'], 
      date: 'December 10, 2017'},

      {photo: 'https://sciencetrends-techmakaillc.netdna-ssl.com/wp-content/uploads/2017/11/Mauna-Loa-700x468.jpg',
      comments: [], 
      likes: ['fredzirdung', 'aaron123', 'joshwardle', 'wongal12'], 
      date: 'November 22, 2017'},

      {photo: 'http://i.dailymail.co.uk/i/pix/2015/04/02/11/27377ACF00000578-3022885-The_Colima_volcano_is_regarded_as_one_of_the_most_dangerous_in_M-a-2_1427970366256.jpg', 
      comments: [], 
      likes: ['fredzirdung', 'aaron123', 'joshwardle', 'wongal12'], 
      date: 'June 5, 2017'},

      {photo: 'https://cdn.images.express.co.uk/img/dynamic/78/590x/Popocatepetl-878612.jpg', 
      comments: [], 
      likes: ['fredzirdung', 'aaron123', 'joshwardle', 'wongal12'], 
      date: 'May 30, 2017'},

      {photo: 'https://www.statisticbrain.com/wp-content/uploads/2012/05/Krakatau-volcano-1.jpeg', 
      comments: [], 
      likes: ['fredzirdung', 'aaron123', 'joshwardle', 'wongal12'], 
      date: 'May 20, 2017'},

      {photo: 'https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzAxNy83NDAvb3JpZ2luYWwva2lsYXVlYS1oYXdhaWktdm9sY2Fuby0xMDAyLTAyLmpwZw==', 
      comments: [], 
      likes: ['fredzirdung', 'aaron123', 'joshwardle', 'wongal12'], 
      date: 'May 1, 2017'},
    ],
    'followers': [
      'wongal', 'larry123', 'airbear', 'marcusphillips', 'fredzirdung', 'nickforster', 'aaron123', 'sile'
    ],
    'following': [
      'strictlyvolcanopics'
    ]
  };

  module.exports.fakeProfileTableData = fakeProfileTableData;
  export default fakeProfileTableData;