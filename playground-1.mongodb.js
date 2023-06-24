// Select the database to use.
use('ReactBackendProject');

// Insert a few documents into the PortfolioData collection.
db.getCollection('projects').insertMany(
    [
        {
          
            image: 'https://cdn.dribbble.com/userupload/7898778/file/original-944f5335f22913ed9caee242690d169d.jpg?compress=1',
            title: 'Cube Aesthetics',
            github: 'https://github.com',
            demo: 'https://dribbble.com/shots/21771767-Backend-Photos?added_first_shot=true',
        },
        {
       
            image: 'https://cdn.dribbble.com/userupload/7898779/file/original-3c59f77d90626a5076d657ed34a4fa65.png?compress=1',
            title: 'Education App UIX',
            github: 'https://github.com',
            demo: 'https://dribbble.com/shots/21771767-Backend-Photos?added_first_shot=true',
        },
        {
            image: 'https://cdn.dribbble.com/userupload/7898780/file/original-47f1fcc8a1b79a045b644aa9a37ca8ad.jpg?compress=1',
            title: 'Recipe app design',
            github: 'https://github.com',
            demo: 'https://dribbble.com/shots/21771767-Backend-Photos?added_first_shot=true',
        },
        {
        
            image: 'https://cdn.dribbble.com/userupload/7898785/file/original-4578e71bf0af8ba17a1e1144e7d7b494.png?compress=1',
            title: 'OnStep - Shoes Store',
            github: 'https://github.com',
            demo: 'https://dribbble.com/shots/21771767-Backend-Photos?added_first_shot=true',
        },
        {
     
            image: 'https://cdn.dribbble.com/userupload/7898782/file/original-1870d052ffe1a00e44c550be54787566.jpg?compress=1',
            title: 'Mobile App Exploration',
            github: 'https://github.com',
            demo: 'https://dribbble.com/shots/21771767-Backend-Photos?added_first_shot=true',
        },
        {
       
            image: 'https://cdn.dribbble.com/userupload/7898781/file/original-2e35d60dc93ee1d55650a9166941addc.jpg?compress=1',
            title: 'Recipe app',
            github: 'https://github.com',
            demo: 'https://dribbble.com/shots/21771767-Backend-Photos?added_first_shot=true',
        },
        {
       
            image: 'https://cdn.dribbble.com/userupload/7898786/file/original-1008ed15dba30d220a2b8a553460f4e0.jpg?compress=1',
            title: 'Recipe app',
            github: 'https://github.com',
            demo: 'https://dribbble.com/shots/21771767-Backend-Photos?added_first_shot=true',
        },
        {
       
            image: 'https://cdn.dribbble.com/userupload/7898784/file/original-678fef2288fa8b45989d0cf95d9b755d.jpg?compress=1',
            title: 'Recipe app',
            github: 'https://github.com',
            demo: 'https://dribbble.com/shots/21771767-Backend-Photos?added_first_shot=true',
        },
        {
       
            image: 'https://cdn.dribbble.com/userupload/7898783/file/original-6968dfad0b83f9aab4547b09c427f97c.jpg?compress=1',
            title: 'Recipe app',
            github: 'https://github.com',
            demo: 'https://dribbble.com/shots/21771767-Backend-Photos?added_first_shot=true',
        }

    ]
);

// Insert a few documents into the PortfolioData collection.
db.getCollection('testimonials').insertMany(
 [
        {
          avatar: 'https://img.freepik.com/free-photo/woman-with-long-hair-yellow-hoodie-with-word-music-it_1340-39068.jpg',
          name: 'James Bond',
          review: "Your help was highly appreciated Mr D. Your services changed the whole functioning of our company. We are greatful for all you did."
        },
        
        {
          avatar: 'https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg',
          name: 'Holly McAllister',
          review: "On behalf of my team and I, I wish to thank you for all you did for us. We look forward to working with you again"
        },
        {
          avatar: 'https://kritikanstvo.ru/games/d/doom2016/covers/1620299318.jpg',
          name: 'P!nk Swe@t',
          review: "Thanks man for the record. It was a blast as you saw from the numbers lol. Sending payment ASAP man."
        },
        {
          avatar: 'https://img.freepik.com/premium-photo/digital-illustration-man-with-red-jacket-blue-eyes_1340-41269.jpg',
          name: 'Tommy Vercetti',
          review: "It was nice doing business with you. Getting rid of Sonny virus was easy thanks to you man."
        },
      
      
      ]
);
